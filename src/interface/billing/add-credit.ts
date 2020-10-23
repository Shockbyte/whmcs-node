export interface AddCreditRequest {
  clientid: number;
  description: string;
  amount: number;
  date?: string;
  adminid?: number;
  type?: string;
}

export interface AddCreditResponse {
  result: string;
  newbalance: number;
}
