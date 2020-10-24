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

  public addons: WhmcsAddonsService = new WhmcsAddonsService(this.options);
  public affiliates: WhmcsAffiliatesService = new WhmcsAffiliatesService(this.options);
  public authentication: WhmcsAuthenticationService = new WhmcsAuthenticationService(this.options);
  public billing: WhmcsBillingService = new WhmcsBillingService(this.options);
  public client: WhmcsClientService = new WhmcsClientService(this.options);
  public domains: WhmcsDomainsService = new WhmcsDomainsService(this.options);
  public module: WhmcsModuleService = new WhmcsModuleService(this.options);
  public orders: WhmcsOrdersService = new WhmcsOrdersService(this.options);
  public products: WhmcsProductsService = new WhmcsProductsService(this.options);
  public projectmanagement: WhmcsProjectManagementService = new WhmcsProjectManagementService(this.options);
  public servers: WhmcsServersService = new WhmcsServersService(this.options);
  public service: WhmcsServiceService = new WhmcsServiceService(this.options);
  public support: WhmcsSupportService = new WhmcsSupportService(this.options);
  public system: WhmcsSystemService = new WhmcsSystemService(this.options);
  public tickets: WhmcsTicketsService = new WhmcsTicketsService(this.options);
  public users: WhmcsUsersService = new WhmcsUsersService(this.options);
}