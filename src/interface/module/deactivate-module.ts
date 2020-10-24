export interface DeactivateModuleRequest {
    moduleType: string;
    moduleName: string;
    newGateway?: string;
}

export interface DeactivateModuleResponse {
    result: string;
}
