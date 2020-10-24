import { BaseModule } from './base';
import { UpdateClientAddonRequest, UpdateClientAddonResponse } from '../interface/addons/update-client-addon';

export class WhmcsAddonsService extends BaseModule {

    public async updateClientAddon(options: UpdateClientAddonRequest): Promise<UpdateClientAddonResponse> {
        return this.request('UpdateClientAddon', options);
    }
}

