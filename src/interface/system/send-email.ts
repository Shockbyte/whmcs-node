export interface SendEmailRequest {
  messagename?: string;
  id?: number;
  customtype?: string;
  custommessage?: string;
  cstuomsubject?: string;
  customvars?: any[];
}

export interface SendEmailResponse {
  result: string;
}
