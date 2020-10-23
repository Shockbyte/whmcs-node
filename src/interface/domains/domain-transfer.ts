export interface DomainTransferRequest {
    domainid?: string;
    domain?: string;
    eppcode?: number;
}

export interface DomainTransferResponse {
    result: string;
}
