export interface GetQuotesRequest {
  limitstart?: number;
  limitnum?: number;
  quoteid?: string;
  userid?: number;
  subject?: string;
  stage?: string;
  datecreated?: string;
  lastmodified?: string;
  validuntil?: string;
}

export interface GetQuotesResponse {
  result: string;
  totalresults: number;
  startnumber: number;
  numreturned: number;
  quotes: Quote[];
}

export interface Quote {
  id: number,
  subject: string,
  stage: string,
  validuntil: string,
  userid: string,
  firstname: string,
  lastname: string,
  companyname: string,
  email: string,
  address1: string,
  address2: string,
  city: string,
  state: string,
  postcode: string,
  country: string,
  phonenumber: string,
  currency: string,
  subtotal: number,
  tax1: number,
  tax2: number,
  total: string,
  proposal: string,
  customernotes: string,
  adminnotes: string,
  datecreated: string,
  lastmodified: string,
  datesent: string,
  dateaccepted: string,
  item: Item[];
}

export interface Item {
  id: number;
  description: string;
  quantity: number;
  unitprice: number;
  discount: number;
  taxable: number;
}
