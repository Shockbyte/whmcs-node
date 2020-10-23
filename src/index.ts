import { WhmcsSetupOptions } from "./interface/whmcs.setup.options";
import { WhmcsAddonsService } from "./module/addons";
import { WhmcsAffiliatesService } from "./module/affiliates";
import { WhmcsAuthenticationService } from "./module/authentication";
import { WhmcsBillingService } from "./module/billing";
import { WhmcsOrdersService } from "./module/orders";

export default class WhmcsApi {

  public static options: WhmcsSetupOptions;

  constructor(options: WhmcsSetupOptions) {
    WhmcsApi.options = options
  }

  public addons: WhmcsAddonsService = new WhmcsAddonsService;
  public affiliates: WhmcsAffiliatesService = new WhmcsAffiliatesService;
  public authentication: WhmcsAuthenticationService = new WhmcsAuthenticationService;
  public billing: WhmcsBillingService = new WhmcsBillingService;
  
  public orders: WhmcsOrdersService = new WhmcsOrdersService;
}