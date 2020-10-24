export interface UpdateTransactionRequest {
  transactionid: number;
  refundid?: number;
  userid?: number;
  invoiceid?: number;
  transid?: string;
  date?: string;
  gateway?: string;
  currency?: number;
  description?: string;
  amountin?: number;
  fees?: number;
  amountout?: number;
  rate?: number;
  credit?: boolean;
}

export interface UpdateTransactionResponse {
  result: string;
  transactionid: number;
}
