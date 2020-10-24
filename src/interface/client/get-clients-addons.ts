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
    addons: Addon[]
}

export interface Addon {
    id: number;
    userid: number;
    orderid: number;
    serviceid: number;
    addonid: number;
    name: string;
    setupfee: number;
    recurring: number;
    billingcycle: string;
    tax: number;
    status: string;
    regdate: string;
    nextduedate: string;
    nextinvoicedate: string;
    paymentmethod: string;
    paymentmethodname: string;
    notes: string;
}
