export interface GenInvoicesRequest {
  noemails?: boolean;
  clientid?: number;
  serviceids?: number[];
  domainids?: number[];
  addonids?: number[];
}

export interface GenInvoicesResponse {
  result: string;
  numcreated: number;
  latestinvoiceid: number;
}
