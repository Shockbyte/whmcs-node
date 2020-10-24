export interface UpdateTicketRequest {
  ticketid: number;
  deptid?: number;
  status?: string;
  subject?: string;
  userid?: number;
  name?: string;
  email?: string;
  cc?: string;
  priority?: string;
  created?: string;
  flag?: number;
  removeFlag?: boolean;
  message?: string;
  markdown?: boolean;
  customfields?: string;
}

export interface UpdateTicketResponse {
  result: string;
  ticketid: number;
}
