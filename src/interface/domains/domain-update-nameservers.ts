export interface DomainUpdateNameserversRequest {
    domainid?: number;
    domain?: string;
    ns1: string;
    ns2: string;
    ns3?: string;
    ns4?: string;
    ns5?: string;
}

export interface DomainUpdateNameserversResponse {
    result: string;
}
