export interface GetPaymentMethodsRequest {

}

export interface GetPaymentMethodsResponse {
  result: string;
  totalresults: number;
  paymentmethods: PaymentMethod[];
}

export interface PaymentMethod {
  module: string;
  displayname: string;
}
