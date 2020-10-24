export interface GetAutomationLogRequest {
  startdate?: string;
  enddate?: string;
  namespace?: string;
}

export interface GetAutomationLogResponse {
  result: string;
  currentDatetime: string;
  lastDailyCronInvocationTime: string;
  startdate: string;
  enddate: string;
  statistics: any[];
}
