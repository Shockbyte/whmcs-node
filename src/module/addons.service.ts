import { WhmcsService } from '../whmcs.service';

export class WhmcsAddonsService {

    constructor(
        private readonly whmcsService: WhmcsService,
    ) { }

    updateClientAddon(options: UpdateClientAddonRequestOptions): Promise<any> {
        return this.whmcsService.request('UpdateClientAddon', options);
    }
}

export interface UpdateClientAddonRequestOptions {
    id: number;
    status?: string;
    terminationDate?: Date;
    addonid?: number;
    name?: string;
    setupfee?: number;
    recurring?: number;
    billingcycle?: string;
    nextduedate?: Date;
    nextinvoicedate?: Date;
    notes?: string;
}
