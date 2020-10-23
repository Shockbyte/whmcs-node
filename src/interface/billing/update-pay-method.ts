export interface UpdatePayMethodRequest {
  clientid: number;
  paymethodid: number;
  card_number?: string;
  card_expiry?: string;
  card_start?: string;
  card_issue_number?: number;
  bank_name?: string;
  bank_account_type?: string;
  bank_code?: string;
  bank_account?: string;
  set_as_default?: boolean;
}

export interface UpdatePayMethodResponse {
  result: string;
  paymethodid: number;
  clientid: number;
}
