export interface GetAffiliatesRequest {
  limitstart?: number;
  limitnum?: number;
  userid?: number;
  visitors?: number;
  paytype?: string;
  payamount?: number;
  onetime?: number;
  balance?: number;
  withdrawn?: number;
}

export interface GetAffiliatesResponse {
  result: string;
  totalresults: number;
  startnumber: number;
  numreturned: number;
  affiliates: Affiliate[]
}

export interface Affiliate {
  id: number;
  date: Date;
  clientid: number;
  visitors: number;
  paytype: string;
  payamount: number;
  onetime: number;
  balance: number;
  withdrawn: number;
  created_at: Date;
  updated_at: Date;
}
