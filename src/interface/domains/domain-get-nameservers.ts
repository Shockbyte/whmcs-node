export interface DomainGetNameserversRequest {
    domainid: number;
}

export interface DomainGetNameserversResponse {
    result: string;
    ns1: string;
    ns2: string;
    ns3: string;
    ns4: string;
    ns5: string;
}
