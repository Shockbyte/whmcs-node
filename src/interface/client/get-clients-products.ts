export interface GetClientsProductsRequest {
    limitstart?: number;
    limitnum?: number;
    clientid?: number;
    domainid?: number;
    domain?: string;
}

export interface GetClientsProductsResponse {
    clientid: number;
    domainid: number;
    totalresults: number;
    startnumber: number;
    numreturned: number;
    domains: [];
}
