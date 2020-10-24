import { ActivateModuleRequest, ActivateModuleResponse } from "../interface/module/activate-module";
import { DeactivateModuleRequest, DeactivateModuleResponse } from "../interface/module/deactivate-module";
import { GetModuleConfigurationParametersRequest, GetModuleConfigurationParametersResponse } from "../interface/module/get-module-configuration-parameters";
import { GetModuleQueueRequest, GetModuleQueueResponse } from "../interface/module/get-module-queue";
import { UpdateModuleConfigurationRequest, UpdateModuleConfigurationResponse } from "../interface/module/update-module-configuration";
import { BaseModule } from "./base";

export class WhmcsModuleService extends BaseModule {

  public async activateModule(options: ActivateModuleRequest): Promise<ActivateModuleResponse> {
    return this.request('ActivateModule', options);
  }

  public async deactivateModule(options: DeactivateModuleRequest): Promise<DeactivateModuleResponse> {
    return this.request('DeactivateModule', options);
  }

  public async getModuleConfigurationParameters(options: GetModuleConfigurationParametersRequest): Promise<GetModuleConfigurationParametersResponse> {
    return this.request('GetModuleConfigurationParameters', options);
  }

  public async getModuleQueue(options: GetModuleQueueRequest): Promise<GetModuleQueueResponse> {
    return this.request('GetModuleQueue', options);
  }

  public async updateModuleConfiguration(options: UpdateModuleConfigurationRequest): Promise<UpdateModuleConfigurationResponse> {
    return this.request('UpdateModuleConfiguration', options);
  }
  
}