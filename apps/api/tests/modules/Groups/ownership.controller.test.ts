import type { Request, Response } from "express";
import { ownershipService } from "../../../src/modules/Groups/ownership.service.js";
import { ownershipController } from "../../../src/modules/Groups/ownership.controller.js";

jest.mock("../../../src/modules/Groups/ownership.service", () => ({
  ownershipService: {
    cancel: jest.fn(),
    close: jest.fn(),
    listOwnedGroups: jest.fn(),
    moveToPendingResolution: jest.fn(),
    nominate: jest.fn(),
    respond: jest.fn(),
  },
}));

describe("OwnershipController", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("rejects a malformed nominee ID without calling the service", async () => {
    const request = {
      userId: "owner-1",
      params: { id: "group-1" },
      body: { nomineeId: "not-a-uuid" },
    } as unknown as Request;
    const response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;

    await ownershipController.nominate(request, response);

    expect(response.status).toHaveBeenCalledWith(400);
    expect(ownershipService.nominate).not.toHaveBeenCalled();
  });

  it("maps a conflicting ownership state to HTTP 409", async () => {
    const request = {
      userId: "owner-1",
      params: { transferId: "transfer-1" },
      body: { accept: true },
    } as unknown as Request;
    const response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;
    jest
      .mocked(ownershipService.respond)
      .mockRejectedValue(
        new Error("This ownership transfer request is no longer pending"),
      );

    await ownershipController.respond(request, response);

    expect(response.status).toHaveBeenCalledWith(409);
    expect(response.json).toHaveBeenCalledWith({
      message: "This ownership transfer request is no longer pending",
    });
  });

  it("returns an error when the ownership-resolution list cannot be loaded", async () => {
    const request = { userId: "owner-1" } as Request;
    const response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;
    jest
      .mocked(ownershipService.listOwnedGroups)
      .mockRejectedValue(new Error("Database unavailable"));

    await ownershipController.listOwnedGroups(request, response);

    expect(response.status).toHaveBeenCalledWith(500);
    expect(response.json).toHaveBeenCalledWith({
      message: "Unable to load group ownership resolutions",
    });
  });

  it("rejects malformed nominee responses before calling the service", async () => {
    const request = {
      userId: "nominee-1",
      params: { transferId: "transfer-1" },
      body: { accept: "yes" },
    } as unknown as Request;
    const response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;

    await ownershipController.respond(request, response);

    expect(response.status).toHaveBeenCalledWith(400);
    expect(ownershipService.respond).not.toHaveBeenCalled();
  });

  it.each([
    ["missing group or transfer", "Ownership transfer request not found", 404],
    ["non-owner request", "Only the group owner can close this group", 403],
    ["invalid transition", "Only groups pending resolution can be closed", 409],
  ])("maps %s errors (%s) to HTTP %i", async (_condition, message, status) => {
    const request = {
      userId: "owner-1",
      params: { id: "group-1" },
      body: { confirmsNoDisputes: true },
    } as unknown as Request;
    const response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;
    jest.mocked(ownershipService.close).mockRejectedValue(new Error(message));

    await ownershipController.close(request, response);

    expect(response.status).toHaveBeenCalledWith(status);
    expect(response.json).toHaveBeenCalledWith({ message });
  });

  it("forwards valid ownership requests and returns successful responses", async () => {
    const nomineeId = "09f7c433-d684-49bc-8ab3-65cdd4ce5f42";
    const listResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;
    const listResult = [{ id: "group-1" }];
    jest
      .mocked(ownershipService.listOwnedGroups)
      .mockResolvedValue(listResult as never);
    await ownershipController.listOwnedGroups(
      { userId: "owner-1" } as Request,
      listResponse,
    );
    expect(ownershipService.listOwnedGroups).toHaveBeenCalledWith("owner-1");
    expect(listResponse.status).toHaveBeenCalledWith(200);
    expect(listResponse.json).toHaveBeenCalledWith(listResult);

    const nominateResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;
    const nomination = { transferId: "transfer-1", nomineeName: "Nominee" };
    jest.mocked(ownershipService.nominate).mockResolvedValue(nomination);
    await ownershipController.nominate(
      {
        userId: "owner-1",
        params: { id: "group-1" },
        body: { nomineeId },
      } as unknown as Request,
      nominateResponse,
    );
    expect(ownershipService.nominate).toHaveBeenCalledWith(
      "group-1",
      "owner-1",
      nomineeId,
    );
    expect(nominateResponse.status).toHaveBeenCalledWith(201);
    expect(nominateResponse.json).toHaveBeenCalledWith(nomination);

    const respondResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;
    jest.mocked(ownershipService.respond).mockResolvedValue();
    await ownershipController.respond(
      {
        userId: "nominee-1",
        params: { transferId: "transfer-1" },
        body: { accept: true },
      } as unknown as Request,
      respondResponse,
    );
    expect(ownershipService.respond).toHaveBeenCalledWith(
      "transfer-1",
      "nominee-1",
      true,
    );
    expect(respondResponse.status).toHaveBeenCalledWith(200);

    const cancelResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;
    jest.mocked(ownershipService.cancel).mockResolvedValue();
    await ownershipController.cancel(
      {
        userId: "owner-1",
        params: { id: "group-1", transferId: "transfer-1" },
      } as unknown as Request,
      cancelResponse,
    );
    expect(ownershipService.cancel).toHaveBeenCalledWith(
      "group-1",
      "transfer-1",
      "owner-1",
    );
    expect(cancelResponse.status).toHaveBeenCalledWith(200);

    const resolutionResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;
    jest.mocked(ownershipService.moveToPendingResolution).mockResolvedValue();
    await ownershipController.moveToPendingResolution(
      {
        userId: "owner-1",
        params: { id: "group-1" },
      } as unknown as Request,
      resolutionResponse,
    );
    expect(ownershipService.moveToPendingResolution).toHaveBeenCalledWith(
      "group-1",
      "owner-1",
    );
    expect(resolutionResponse.status).toHaveBeenCalledWith(200);

    const closeResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;
    jest.mocked(ownershipService.close).mockResolvedValue();
    await ownershipController.close(
      {
        userId: "owner-1",
        params: { id: "group-1" },
        body: { confirmsNoDisputes: true },
      } as unknown as Request,
      closeResponse,
    );
    expect(ownershipService.close).toHaveBeenCalledWith(
      "group-1",
      "owner-1",
      true,
    );
    expect(closeResponse.status).toHaveBeenCalledWith(200);
  });

  it("uses explicit fallback messages for non-Error failures", async () => {
    const response = () =>
      ({
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      }) as unknown as Response;

    const nominateResponse = response();
    jest.mocked(ownershipService.nominate).mockRejectedValueOnce("failed");
    await ownershipController.nominate(
      {
        userId: "owner-1",
        params: { id: "group-1" },
        body: { nomineeId: "09f7c433-d684-49bc-8ab3-65cdd4ce5f42" },
      } as unknown as Request,
      nominateResponse,
    );
    expect(nominateResponse.status).toHaveBeenCalledWith(400);
    expect(nominateResponse.json).toHaveBeenCalledWith({
      message: "Unable to request transfer",
    });

    const respondResponse = response();
    jest.mocked(ownershipService.respond).mockRejectedValueOnce("failed");
    await ownershipController.respond(
      {
        userId: "nominee-1",
        params: { transferId: "transfer-1" },
        body: { accept: false },
      } as unknown as Request,
      respondResponse,
    );
    expect(respondResponse.status).toHaveBeenCalledWith(400);
    expect(respondResponse.json).toHaveBeenCalledWith({
      message: "Unable to respond to transfer",
    });

    const cancelResponse = response();
    jest.mocked(ownershipService.cancel).mockRejectedValueOnce("failed");
    await ownershipController.cancel(
      {
        userId: "owner-1",
        params: { id: "group-1", transferId: "transfer-1" },
      } as unknown as Request,
      cancelResponse,
    );
    expect(cancelResponse.status).toHaveBeenCalledWith(400);
    expect(cancelResponse.json).toHaveBeenCalledWith({
      message: "Unable to cancel transfer",
    });

    const resolutionResponse = response();
    jest
      .mocked(ownershipService.moveToPendingResolution)
      .mockRejectedValueOnce("failed");
    await ownershipController.moveToPendingResolution(
      {
        userId: "owner-1",
        params: { id: "group-1" },
      } as unknown as Request,
      resolutionResponse,
    );
    expect(resolutionResponse.status).toHaveBeenCalledWith(400);
    expect(resolutionResponse.json).toHaveBeenCalledWith({
      message: "Unable to update group status",
    });

    const closeResponse = response();
    jest.mocked(ownershipService.close).mockRejectedValueOnce("failed");
    await ownershipController.close(
      {
        userId: "owner-1",
        params: { id: "group-1" },
        body: { confirmsNoDisputes: true },
      } as unknown as Request,
      closeResponse,
    );
    expect(closeResponse.status).toHaveBeenCalledWith(400);
    expect(closeResponse.json).toHaveBeenCalledWith({
      message: "Unable to close group",
    });
  });

  it("requires explicit no-disputes confirmation before closing a group", async () => {
    const request = {
      userId: "owner-1",
      params: { id: "group-1" },
      body: { confirmsNoDisputes: false },
    } as unknown as Request;
    const response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;

    await ownershipController.close(request, response);

    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({
      message:
        "Confirm that there are no unresolved disputes before closing this group",
    });
    expect(ownershipService.close).not.toHaveBeenCalled();
  });
});
