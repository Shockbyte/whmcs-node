export interface UpdateModuleConfigurationRequest {
    moduleType: string;
    moduleName: string;
    parameters?: [];
}

export interface UpdateModuleConfigurationResponse {
    result: string;
}
