export interface ApplyCreditRequest {
  invoiceid: number;
  amount: number;
  noemail?: boolean;
}

export interface ApplyCreditResponse {
  result: string;
  invoiceid: number;
  amount: number;
  invoicepaid: string;
}
