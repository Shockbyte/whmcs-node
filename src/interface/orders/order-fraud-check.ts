export interface OrderFraudCheckRequest {
  orderid: number;
  ipaddress?: string;
}

export interface OrderFraudCheckResponse {
  result: string;
  status: string;
  module: string;
  results: string;
}
