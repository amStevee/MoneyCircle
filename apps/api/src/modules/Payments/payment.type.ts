export interface PaymentListItem {
  id: string;
  reference: string;
  providerReference: string | null;
  groupId: string | null;
  groupName: string;
  amount: number;
  currency: string;
  date: Date;
  status: string;
  type: string;
  cycle: number | null;
}
