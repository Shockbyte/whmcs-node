export interface SetConfigurationValueRequest {
  setting: string;
  value: string;
}

export interface SetConfigurationValueResponse {
  result: string;
  value_changed: boolean;
}
