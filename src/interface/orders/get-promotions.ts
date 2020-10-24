export interface GetPromotionsRequest {
  code?: string;
}

export interface GetPromotionsResponse {
  result: string;
  totalresults: number;
  promotions: Promotion[];
}

export interface Promotion {
  id: number;
  code: string;
  type: string;
  recurring: number;
  value: number;
  cycles: string;
  appliesto: string;
  requires: string;
  requiresexisting: number;
  startdate: string;
  expirationdate: string;
  maxuses: number;
  uses: number;
  lifetimepromo: number;
  applyonce: number;
  newsignups: number;
  existingclient: number;
  onceperclient: number;
  recurfor: number;
  upgrades: number;
  upgradeconfig: string;
  notes: string;
}
