import { BaseModule } from './base';
import { AffiliateActivateRequest, AffiliateActivateResponse } from '../interface/affiliates/affiliate-activate';
import { GetAffiliatesRequest, GetAffiliatesResponse } from '../interface/affiliates/get-affiliates';

export class WhmcsAffiliatesService extends BaseModule {

  public async affiliateActivate(options: AffiliateActivateRequest): Promise<AffiliateActivateResponse> {
    return this.request('AffiliateActivate', options);
  }

  public async getAffiliates(options: GetAffiliatesRequest): Promise<GetAffiliatesResponse> {
    return this.request('GetAffiliates', options);
  }
}

