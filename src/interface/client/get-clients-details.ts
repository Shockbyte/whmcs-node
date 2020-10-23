export interface GetClientsDetailsRequest {
    clientid?: number;
    email?: string;
    stats?: boolean;
}

export interface GetClientsDetailsResponse {
    result: string;
    client: [];
    stats: [];
}
