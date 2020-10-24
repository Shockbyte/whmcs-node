export interface UpdateClientProductRequest {
  serviceid: number;
  pid?: number;
  serverid?: number;
  regdate?: string;
  nextduedate?: string;
  terminationDate?: string;
  completedDate?: string;
  domain?: string;
  firstpaymentamount?: number;
  recurringamount?: number;
  paymentmethod?: string;
  billingcycle?: string;
  subscriptionid?: string;
  status?: string;
  notes?: string;
  serviceusername?: string;
  servicepassword?: string;
  overideautosuspend?: string;
  overidesuspenduntil?: string;
  ns1?: string;
  ns2?: string;
  dedicatedip?: string;
  assignedips?: string;
  diskusage?: number;
  disklimit?: number;
  bwusage?: number;
  bwlimit?: number;
  suspendreason?: string;
  promoid?: number;
  unset?: any[];
  autorecalc?: boolean;
  customfields?: string;
  configoptions?: string;
}

export interface UpdateClientProductResponse {
  result: string;
  serviceid: number;
}
