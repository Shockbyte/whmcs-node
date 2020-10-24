export interface SendAdminEmailRequest {
  messagename: string;
  custommessage: string;
  customsubject: string;
  type: string;
  deptid: number;
  mergefields: any[];
}

export interface SendAdminEmailResponse {
  result: string;
}
