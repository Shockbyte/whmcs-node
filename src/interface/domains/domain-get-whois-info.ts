export interface DomainGetWhoisInfoRequest {
    domainid: number;
}

export interface DomainGetWhoisInfoResponse {
    result: string;
    Registrant: [];
    Admin: [];
    Tech: [];
}
