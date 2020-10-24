export interface ActivateModuleRequest {
    moduleType: string;
    moduleName: string;
    parameters?: [];
}

export interface ActivateModuleResponse {
    result: string;
}
