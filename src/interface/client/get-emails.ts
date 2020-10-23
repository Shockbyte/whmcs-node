export interface GetEmailsRequest {
    clientid: number;
    limitstart?: number;
    limitnum?: number;
    date?: string;
    subject?: string;
}

export interface GetEmailsResponse {
    totalresults: number;
    startnumber: number;
    numreturned: number;
    emails: [];
}
