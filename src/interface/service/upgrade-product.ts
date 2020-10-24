export interface UpgradeProductRequest {
  serviceid: number;
  calconly?: boolean;
  paymentmethod: string;
  type: string;
  newproductid?: number;
  newproductbillingcycle?: string;
  promocode?: string;
  configoptions?: any[];
}

export interface UpgradeProductResponse {
  result: string;
  upgradeinprogress: boolean;
}
