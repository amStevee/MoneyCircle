import {
  cancelOwnershipTransfer,
  closeResolvedGroup,
  listOwnedGroupsForResolution,
  moveGroupToPendingResolution,
  nominateGroupOwner,
  respondToOwnershipTransfer,
} from "./ownership.repository.js";

class OwnershipService {
  listOwnedGroups(ownerId: string) {
    return listOwnedGroupsForResolution(ownerId);
  }

  nominate(groupId: string, ownerId: string, nomineeId: string) {
    return nominateGroupOwner(groupId, ownerId, nomineeId);
  }

  respond(transferId: string, nomineeId: string, accept: boolean) {
    return respondToOwnershipTransfer(transferId, nomineeId, accept);
  }

  cancel(groupId: string, transferId: string, ownerId: string) {
    return cancelOwnershipTransfer(groupId, transferId, ownerId);
  }

  moveToPendingResolution(groupId: string, ownerId: string) {
    return moveGroupToPendingResolution(groupId, ownerId);
  }

  close(groupId: string, ownerId: string, confirmsNoDisputes: boolean) {
    return closeResolvedGroup(groupId, ownerId, confirmsNoDisputes);
  }
}

const ownershipService = new OwnershipService();
export { ownershipService };
