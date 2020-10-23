export interface GetClientPasswordRequest {
    userid?: number;
    email?: string;
}

export interface GetClientPasswordResponse {
    result: string;
    password: string;
}
