export interface GetModuleConfigurationParametersRequest {
    moduleType: string;
    moduleName: string;
}

export interface GetModuleConfigurationParametersResponse {
    result: string;
    parameters: [];
}
