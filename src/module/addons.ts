import { Module } from './module';
import { UpdateClientAddonRequest, UpdateClientAddonResponse } from '../interface/addons/update-client-addon';

export class WhmcsAddonsService extends Module {

    public async updateClientAddon(options: UpdateClientAddonRequest): Promise<UpdateClientAddonResponse> {
        return this.request('UpdateClientAddon', options);
    }
}

