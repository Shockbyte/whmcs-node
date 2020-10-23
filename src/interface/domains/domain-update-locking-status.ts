export interface DomainUpdateLockingStatusRequest {
    domainid: number;
    lockstatus?: boolean;
}

export interface DomainUpdateLockingStatusResponse {
    result: string;
}
