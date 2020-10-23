export interface DomainWhoisRequest {
    domain: string;
}

export interface DomainWhoisResponse {
    result: string;
    status: string;
    whois: string;
}
