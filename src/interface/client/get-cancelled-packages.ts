export interface GetCancelledPackagesRequest {
    limitstart?: number;
    limitnum?: number
}

export interface GetCancelledPackagesResponse {
    result: string;
    totalresults: number;
    startnumber: number;
    numreturned: number;
    packages: Package[];
}

export interface Package {
    id: number;
    date: string;
    relid: number;
    reason: string;
    type: string;
    created_at: string;
    updated_at: string;
}
