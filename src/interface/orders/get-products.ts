export interface GetProductsRequest {
  pid?: string;
  gid: number;
  module: string;
}

export interface GetProductsResponse {
  result: string;
  totalresults: number;
  startnumber; number;
  numreturned: number;
  products: Product[];
}

export interface Product {
  pid: number;
  gid: number;
  type: string;
  name: string;
  description: string;
  module: string;
  paytype: string;
  pricing: object;
  customfields: object;
  configoptions: object;
}
