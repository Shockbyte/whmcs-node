export interface DomainGetLockingStatusRequest {
    domainid: number;
}

export interface DomainGetLockingStatusResponse {
    result: string;
    lockstatus: string;
}
