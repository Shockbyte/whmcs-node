export interface ModuleSuspendRequest {
  serviceid: number;
  suspendreason?: string;
}

export interface ModuleSuspendResponse {
  result: string;
}
