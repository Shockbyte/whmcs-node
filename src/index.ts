import { WhmcsSetupOptions } from "./interface/whmcs.setup.options";
import { WhmcsAddonsService } from "./module/addons";
import { WhmcsAffiliatesService } from "./module/affiliates";
import { WhmcsAuthenticationService } from "./module/authentication";
import { WhmcsBillingService } from "./module/billing";
import { WhmcsClientService } from "./module/client";
import { WhmcsDomainsService } from "./module/domains";
import { WhmcsModuleService } from "./module/module";
import { WhmcsOrdersService } from "./module/orders";
import { WhmcsProductsService } from "./module/products";
import { WhmcsProjectManagementService } from "./module/project-management";
import { WhmcsServersService } from "./module/servers";

export default class WhmcsApi {

  public static options: WhmcsSetupOptions;

  constructor(options: WhmcsSetupOptions) {
    WhmcsApi.options = options
  }

  public addons: WhmcsAddonsService = new WhmcsAddonsService;
  public affiliates: WhmcsAffiliatesService = new WhmcsAffiliatesService;
  public authentication: WhmcsAuthenticationService = new WhmcsAuthenticationService;
  public billing: WhmcsBillingService = new WhmcsBillingService;
  public client: WhmcsClientService = new WhmcsClientService;
  public domains: WhmcsDomainsService = new WhmcsDomainsService;
  public module: WhmcsModuleService = new WhmcsModuleService;
  public orders: WhmcsOrdersService = new WhmcsOrdersService;
  public products: WhmcsProductsService = new WhmcsProductsService;
  public projectmanagement: WhmcsProjectManagementService = new WhmcsProjectManagementService;
  public servers: WhmcsServersService = new WhmcsServersService;

}