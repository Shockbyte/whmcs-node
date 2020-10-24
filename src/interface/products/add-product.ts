export interface AddProductRequest {
  name: string;
  gid: number;
  type?: string;
  stockcontrol?: boolean;
  qty?: number;
  paytype?: string;
  hidden?: boolean;
  showdomainoptions?: boolean;
  tax?: boolean;
  isFeatured?: boolean;
  proratabilling?: boolean;
  description?: string;
  welcomeemail?: number;
  proratadate?: number;
  proratachargenextmonth?: number;
  subdomain?: string;
  autosetup?: string;
  module?: string;
  servergroupid?: number;
  configoption1?: any;
  configoption2?: any;
  configoption3?: any;
  configoption4?: any;
  configoption5?: any;
  configoption6?: any;
  order?: number;
  pricing?: any[];
}

export interface AddProductResponse {
  result: string;
  pid: number;
}
