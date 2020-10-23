export interface DomainReleaseRequest {
    domainid?: number;
    domain?: string;
    newtag: string;
}

export interface DomainReleaseResponse {
    result: string;
}
