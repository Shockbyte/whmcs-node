import { GetHealthStatusRequest, GetHealthStatusResponse } from "../interface/servers/get-health-status";
import { GetServersRequest, GetServersResponse } from "../interface/servers/get-servers";
import { BaseModule } from "./base";

export class WhmcsServersService extends BaseModule {

  public async getHealthStatus(options: GetHealthStatusRequest): Promise<GetHealthStatusResponse> {
    return this.request('GetHealthStatus', options);
  }

  public async getServers(options: GetServersRequest): Promise<GetServersResponse> {
    return this.request('GetServers', options);
  }
  
}