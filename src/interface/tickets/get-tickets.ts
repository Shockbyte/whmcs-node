export interface GetTicketsRequest {
  limitstart?: number;
  limitnum?: number;
  deptid?: number;
  clientid?: number;
  email?: string;
  status?: string;
  subject?: string;
  ignore_dept_assignments?: boolean;
}

export interface GetTicketsResponse {
  result: string;
  totalresults: number;
  startnumber: number;
  numreturned: number;
  tickets: any[];
  requestor_name: string;
  requestor_type: string;
  requestor_email: string;
  owner_name: string;
}
