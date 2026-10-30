import type { Request, Response } from "express";
import userService from "../../../src/modules/Users/user.service.js";
import { OwnedGroupsRequireResolutionError } from "../../../src/modules/Users/users.repository.js";
import {
  deleteMe,
  updateMe,
} from "../../../src/modules/Users/users.controller.js";

jest.mock("../../../src/modules/Users/user.service", () => ({
  __esModule: true,
  default: {
    deleteMe: jest.fn(),
    getme: jest.fn(),
    updateMe: jest.fn(),
  },
}));

describe("users controller", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns 404 when the account being deleted no longer exists", async () => {
    const request = { userId: "user-1" } as Request;
    const response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;
    jest
      .mocked(userService.deleteMe)
      .mockRejectedValue(
        Object.assign(new Error("Missing record"), { code: "P2025" }),
      );

    await deleteMe(request, response);

    expect(response.status).toHaveBeenCalledWith(404);
    expect(response.json).toHaveBeenCalledWith({ message: "User not found" });
  });

  it("returns the owned groups that must be resolved before deletion", async () => {
    const groups = [{ id: "group-1", name: "Savings", status: "ACTIVE" }];
    const request = { userId: "user-1" } as Request;
    const response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;
    jest
      .mocked(userService.deleteMe)
      .mockRejectedValue(new OwnedGroupsRequireResolutionError(groups));

    await deleteMe(request, response);

    expect(response.status).toHaveBeenCalledWith(409);
    expect(response.json).toHaveBeenCalledWith({
      message:
        "Resolve, transfer, or archive owned groups before deleting your account",
      groups,
    });
  });

  it("deletes the authenticated account and confirms success", async () => {
    const request = { userId: "user-1" } as Request;
    const response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;
    jest.mocked(userService.deleteMe).mockResolvedValue();

    await deleteMe(request, response);

    expect(userService.deleteMe).toHaveBeenCalledWith("user-1");
    expect(response.json).toHaveBeenCalledWith({
      message: "Account deleted successfully",
    });
  });

  it("returns HTTP 500 when account deletion fails unexpectedly", async () => {
    const request = { userId: "user-1" } as Request;
    const response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;
    jest
      .mocked(userService.deleteMe)
      .mockRejectedValue(new Error("Database unavailable"));

    await deleteMe(request, response);

    expect(response.status).toHaveBeenCalledWith(500);
    expect(response.json).toHaveBeenCalledWith({
      message: "Unable to delete account",
    });
  });

  it("rejects invalid profile data before calling the service", async () => {
    const request = {
      userId: "user-1",
      body: { first_name: " ", last_name: "User", phone: null },
    } as Request;
    const response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;

    await updateMe(request, response);

    expect(response.status).toHaveBeenCalledWith(400);
    expect(userService.updateMe).not.toHaveBeenCalled();
  });
});
