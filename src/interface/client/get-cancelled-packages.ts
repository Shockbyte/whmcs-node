export interface GetCancelledPackagesRequest {
    limitstart?: number;
    limitnum?: number
}

export interface GetCancelledPackagesResponse {
    result: string;
    totalresults: number;
    startnumber: number;
    numreturned: number;
    packages: [];
}
