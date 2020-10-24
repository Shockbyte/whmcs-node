export interface DomainRegisterRequest {
    domainid?: number;
    domain?: string;
    idnlanguage?: string;

}

export interface DomainRegisterResponse {
    result: string;
}
