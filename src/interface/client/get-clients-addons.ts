export interface GetClientsAddonsRequest {
    serviceid?: number;
    clientid?: number;
    addonid?: number;
}

export interface GetClientsAddonsResponse {
    result: string;
    totalresults: number;
    serviceid: number;
    clientid: number;
    addons: []
}
