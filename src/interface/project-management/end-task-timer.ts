export interface EndTaskTimerRequest {
  timerid: number;
  projectid?: number;
  adminid?: number;
  end_time?: number;
}

export interface EndTaskTimerResponse {
  result: string;
  mesage: string;
}
