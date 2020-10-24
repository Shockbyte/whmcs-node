export interface AddBillableItemRequest {
  clientid: number;
  description: string;
  amount: number;
  invoiceaction?: string;
  recur?: number;
  recurcycle?: string;
  recurfor?: number;
  duedate?: string;
  hours?: number;
}

export interface AddBillableItemResponse {
  result: string;
  billableid: number;
}
