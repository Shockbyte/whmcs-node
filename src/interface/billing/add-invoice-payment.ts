export interface AddInvoicePaymentRequest {
  invoiceid: number;
  transid: string;
  gateway: string;
  date: string;
  amount?: number;
  fees?: number;
  noemail?: boolean;
}

export interface AddInvoicePaymentResponse {
  result: string;
}
