export interface GetInvoiceRequest {
  invoiceid: number;
}

export interface GetInvoiceResponse {
  result: string;
  invoiceid: number;
  invoicenum: string;
  userid: number;
  date: string;
  duedate: string;
  datepaid: string;
  subtotal: number;
  credit: number;
  tax: number;
  tax2: number;
  total: number;
  balance: number;
  taxrate: number;
  taxrate2: number;
  status: string;
  paymentmethod: string;
  notes: string;
  ccgateway: boolean;
  items: Item[];
  transactions: string[];
}

export interface Item {
  id: number;
  type: string;
  relid: number;
  description: number;
  amount: number;
  taxed: number;
}