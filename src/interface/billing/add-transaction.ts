export interface AddTransactionRequest {
  paymentmethod: string;
  userid?: number;
  invoiceid?: number;
  transid?: string;
  date?: string;
  currencyid?: number;
  description?: string;
  amountin?: number;
  fees?: number;
  amountout?: number;
  rate?: number;
  credit?: boolean;
  allowduplicatetransid?: boolean;
}

export interface AddTransactionResponse {
  result: string;
}
