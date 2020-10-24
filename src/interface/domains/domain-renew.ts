export interface DomainRenewRequest {
    domainid?: number;
    domain?: string;
    regperiod?: number;
}

export interface DomainRenewResponse {
    result: string;
}
