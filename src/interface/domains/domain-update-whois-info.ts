export interface DomainUpdateWhoisInfoRequest {
    domainid: number;
    xml: string;
}

export interface DomainUpdateWhoisInfoResponse {
    result: string;
}
