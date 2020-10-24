export interface GetOrdersRequest {
  limitstart?: number;
  limitnum?: number;
  id?: number;
  userid?: number;
  status?: string;
}

export interface GetOrdersResponse {
  result: string;
  totalresults: number;
  startnumber: number;
  numreturned: number;
  orders: Order[];
}

export interface Order {
  id: number;
  ordernum: number;
  userid: number;
  contactid: number;
  date: string;
  nameservers: string;
  transfersecret: string;
  renewals: string;
  promocode: string;
  promotype: string;
  promovalue: string;
  orderdata: string;
  amount: number;
  paymentmethod: string;
  invoiceid: number;
  status: string;
  ipaddress: string;
  fraudmodule: string;
  fraudoutput: string;
  notes: string;
  paymentmethodname: string;
  paymentstatus: string;
  name: string;
  currencyprefix: string;
  currencysuffix: string;
  frauddata: string;
  lineitems: LineItem[];
}

export interface LineItem {
  type: string;
  relid: number;
  producttype: string;
  product: string;
  domain: string;
  billingcycle: string;
  amount: string;
  status: string;
}
