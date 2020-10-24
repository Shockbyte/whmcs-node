export interface GetSupportStatusesRequest {
  deptid?: number;
}

export interface GetSupportStatusesResponse {
  result: string;
  totalresults: number;
  statuses: Status[];
}

export interface Status {
  title: string;
  count: number;
  color: string;
}
