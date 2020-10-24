export interface AcceptQuoteRequest {
  quoteid: number;
}

export interface AcceptQuoteResponse {
  result: string;
  invoiceid: number;
}
