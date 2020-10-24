export interface GetClientsRequest {
    limitstart?: number;
    limitnum?: number;
    sorting?: string;
    search?: string;
}

export interface GetClientsResponse {
    result: string;
    totalresults: number;
    startnumber: number;
    numreturned: number;
    clients: Client[];
}

export interface Client {
    id: number;
    firstname: string;
    lastname: string;
    companyname: string;
    email: string;
    datecreated: string;
    groupid: number;
    status: string;
}