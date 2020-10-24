export interface CreateQuoteRequest {
  subject: string;
  stage: string;
  validuntil: string;
  datecreated?: string;
  lineitems?: LineItem[];
  userid?: number;
  firstname?: string;
  lastname?: string;
  companyname?: string;
  email?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  postcode?: string;
  country?: string;
  phonenumber?: string;
  tax_id?: string;
  currency?: number;
  proposal?: string;
  customernotes?: string;
  adminnotes?: string;
}

export interface CreateQuoteResponse {
  result: string;
  quoteid: number;
}

export interface LineItem {
  desc: string;
  qty: number;
  up: number;
  discount: number;
  taxable: boolean;
}
