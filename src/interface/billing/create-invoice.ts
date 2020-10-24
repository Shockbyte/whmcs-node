export interface CreateInvoiceRequest {
  userid: number;
  status?: string;
  draft?: boolean;
  sendinvoice?: boolean;
  paymentmethod?: string;
  taxrate?: number;
  taxrate2?: number;
  date?: string;
  duedate?: string;
  notes?: string;
  itemdescriptionx?: string;
  itemamountx?: number;
  itemtaxedx?: boolean;
  autoapplycredit?: boolean;
}

export interface CreateInvoiceResponse {
  result: string;
  invoiceid: number;
  status: string;
}
