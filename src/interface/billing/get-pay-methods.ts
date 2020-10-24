export interface GetPayMethodsRequest {
  clientid: number;
  paymethodid?: number;
  type?: string;
}

export interface GetPayMethodsResponse {
  result: string;
  clientid: number;
  paymethods: PayMethod[];
}

export interface PayMethod {
  id: number;
  type: string;
  description: string;
  gateway_name: string;
  contact_type: string;
  contact_id: number;
  card_last_four: number;
  expiry_date: string;
  start_date: string;
  issue_number: string;
  card_type: string;
  remote_token: string;
  last_updated: string;
}
