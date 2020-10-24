export interface UpdateInvoiceRequest {
  invoiceid: number;
  status?: string;
  paymentmethod?: string;
  taxrate?: number;
  taxrate2?: number;
  credit?: number;
  date?: string;
  duedate?: string;
  datepaid?: string;
  notes?: StorageManager;
  itemdescription?: string[];
  itemamount?: number[];
  itemtaxed?: boolean[];
  newitemdescription?: string[];
  newitemamount?: number[];
  newitemtaxed?: boolean[];
  deletelineids?: number[];
  publish?: boolean;
  publichandsendemail?: boolean;
}

export interface UpdateInvoiceResponse {
  result: string;
  invoiceid: number;
}
