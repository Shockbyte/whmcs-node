export interface StartTaskTimerRequest {
  timerid: number;
  projectid: number;
  adminid?: number;
  start_time?: number;
  end_time?: number;
}

export interface StartTaskTimerResponse {
  result: string;
  message: string;
}
