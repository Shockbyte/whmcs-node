import { ModuleChangePackageRequest, ModuleChangePackageResponse } from "../interface/service/module-change-package";
import { ModuleChangePwRequest, ModuleChangePwResponse } from "../interface/service/module-change-pw";
import { ModuleCreateRequest, ModuleCreateResponse } from "../interface/service/module-create";
import { ModuleCustomRequest, ModuleCustomResponse } from "../interface/service/module-custom";
import { ModuleSuspendRequest, ModuleSuspendResponse } from "../interface/service/module-suspend";
import { ModuleTerminateRequest, ModuleTerminateResponse } from "../interface/service/module-terminate";
import { ModuleUnsuspendRequest, ModuleUnsuspendResponse } from "../interface/service/module-unsuspend";
import { UpdateClientProductRequest, UpdateClientProductResponse } from "../interface/service/update-client-product";
import { UpgradeProductRequest, UpgradeProductResponse } from "../interface/service/upgrade-product";
import { BaseModule } from "./base";

export class WhmcsServiceService extends BaseModule {
  
  public async moduleChangePackage(options: ModuleChangePackageRequest): Promise<ModuleChangePackageResponse> {
    return this.request('ModuleChangePackage', options);
  }

  public async moduleChangePw(options: ModuleChangePwRequest): Promise<ModuleChangePwResponse> {
    return this.request('ModuleChangePw', options);
  }

  public async moduleCreate(options: ModuleCreateRequest): Promise<ModuleCreateResponse> {
    return this.request('ModuleCreate', options);
  }

  public async moduleCustom(options: ModuleCustomRequest): Promise<ModuleCustomResponse> {
    return this.request('ModuleCustom', options);
  }

  public async moduleSuspend(options: ModuleSuspendRequest): Promise<ModuleSuspendResponse> {
    return this.request('ModuleSuspend', options);
  }

  public async moduleTerminate(options: ModuleTerminateRequest): Promise<ModuleTerminateResponse> {
    return this.request('ModuleTerminate', options);
  }

  public async moduleUnsuspend(options: ModuleUnsuspendRequest): Promise<ModuleUnsuspendResponse> {
    return this.request('ModuleUnsuspend', options);
  }

  public async updateClientProduct(options: UpdateClientProductRequest): Promise<UpdateClientProductResponse> {
    return this.request('UpdateClientProduct', options);
  }

  public async upgradeProduct(options: UpgradeProductRequest): Promise<UpgradeProductResponse> {
    return this.request('UpgradeProduct', options);
  }

}