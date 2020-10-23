export interface CapturePaymentRequest {
  invoiceid: number;
  cvv?: string;
}

export interface CapturePaymentResponse {
  result: string;
}
