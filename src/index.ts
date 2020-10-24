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
import { WhmcsServiceService } from "./module/service";
import { WhmcsSupportService } from "./module/support";
import { WhmcsSystemService } from "./module/system";
import { WhmcsTicketsService } from "./module/tickets";
import { WhmcsUsersService } from "./module/users";

export default class WhmcsApi {

  constructor(private readonly options: WhmcsSetupOptions) { }

  public addons: WhmcsAddonsService = new WhmcsAddonsService(options);
  public affiliates: WhmcsAffiliatesService = new WhmcsAffiliatesService(options);
  public authentication: WhmcsAuthenticationService = new WhmcsAuthenticationService(options);
  public billing: WhmcsBillingService = new WhmcsBillingService(options);
  public client: WhmcsClientService = new WhmcsClientService(options);
  public domains: WhmcsDomainsService = new WhmcsDomainsService(options);
  public module: WhmcsModuleService = new WhmcsModuleService(options);
  public orders: WhmcsOrdersService = new WhmcsOrdersService(options);
  public products: WhmcsProductsService = new WhmcsProductsService(options);
  public projectmanagement: WhmcsProjectManagementService = new WhmcsProjectManagementService(options);
  public servers: WhmcsServersService = new WhmcsServersService(options);
  public service: WhmcsServiceService = new WhmcsServiceService(options);
  public support: WhmcsSupportService = new WhmcsSupportService(options);
  public system: WhmcsSystemService = new WhmcsSystemService(options);
  public tickets: WhmcsTicketsService = new WhmcsTicketsService(options);
  public users: WhmcsUsersService = new WhmcsUsersService(options);
}