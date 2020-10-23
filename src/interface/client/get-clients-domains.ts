export interface GetClientsDomainsRequest {
    limitstart?: number;
    limitnum?: number;
    clientid?: number;
    domainid?: number;
    domain?: string;
}

export interface GetClientsDomainsResponse {
    result: string;
    clientid: number;
    domainid: number;
    totalresults: number;
    startnumber: number;
    numreturned: number;
    domains: [];
}
