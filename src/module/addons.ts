import { UpdateClientAddonRequest, UpdateClientAddonResponse } from '../interface/updateclientaddon.options';
import { Module } from './module';

export class WhmcsAddonsService extends Module {

    constructor() { 
        super();
    }

    public async updateClientAddon(options: UpdateClientAddonRequest): Promise<UpdateClientAddonResponse> {
        return this.request('UpdateClientAddon', options);
    }
}

