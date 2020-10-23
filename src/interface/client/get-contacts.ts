export interface GetContactsRequest {
    limitstart?: number;
    limitnum?: number;
    userid?: number;
    firstname?: string;
    lastname?: string;
    companyname?: string;
    email?: string;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    postcode?: string;
    country?: string;
    phonenumber?: string;
}

export interface GetContactsResponse {
    result: string;
    totalresults: number;
    startnumber: number;
    numreturned: number;
    contacts: Contact[];
}

export interface Contact {
    id: number;
    userid: number;
    firstname: string;
    lastname: string;
    email: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    phonenumber: string;
    domainemails: boolean;
    generalemails: boolean;
    invoicemeails: boolean;
    productemails: boolean;
    supportemails: boolean;
    affiliateemails: boolean;
    created_at: string;
    updated_at: string;
}
