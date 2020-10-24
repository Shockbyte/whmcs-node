export interface GetModuleQueueRequest {
    relatedId?: number;
    serviceType?: string;
    moduleName?: string;
    moduleAction?: string;
    since?: string;

}

export interface GetModuleQueueResponse {
    result: string;
    count: number;
    queue: [];
}
