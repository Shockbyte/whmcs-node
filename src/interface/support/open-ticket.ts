export interface OpenTicketRequest {
  deptid: number;
  subject: string;
  message: string;
  clientid?: number;
  contactid?: number;
  name?: string;
  email?: string;
  priority?: string;
  created?: string;
  serviceid?: number;
  domainid?: number;
  admin?: boolean;
  markdown?: boolean;
  customfields?: string;
  attachments: any[];
}

export interface OpenTicketResponse {
  result: string;
  id: number;
  tid: string;
  c: string;
}
