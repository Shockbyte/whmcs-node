export interface GetTransactionsRequest {
  invoiceid?: number;
  clientid?: number;
  transid?: string;
}

export interface GetTransactionsResponse {
  result: string;
  totalresults: number;
  startnumber: number;
  numreturned: number;
  transactions: Transaction[];
}

export interface Transaction {
  id: number;
  userid: number;
  currency: string;
  gateway: string;
  date: string;
  description: string;
  amountin: number;
  fees: number;
  amountout: number;
  rate: number;
  transid: string;
  invoiceid: number;
  refundid: number;
}
