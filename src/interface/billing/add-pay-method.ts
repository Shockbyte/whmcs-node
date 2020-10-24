export interface AddPayMethodRequest {
  clientid: number;
  type?: string;
  description?: string;
  gateway_module_name?: string;
  card_number?: string;
  card_expiry?: string;
  card_start?: string;
  card_issue_number?: number;
  bank_name?: string;
  bank_account_type?: string;
  bank_account?: string;
  set_as_default?: boolean;
}

export interface AddPayMethodResponse {
  result: string;
  clientid: number;
  paymethodid: number;
}
