export interface GetClientsRequest {
    limitstart?: number;
    limitnum?: number;
    sorting?: string;
    search?: string;
}

export interface GetClientsResponse {
    totalresults: number;
    startnumber: number;
    numreturned: number;
    clients: [];
}