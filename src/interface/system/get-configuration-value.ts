export interface GetConfigurationValueRequest {
  setting: string;
}

export interface GetConfigurationValueResponse {
  result: string;
  setting: string;
  value: string;
}
