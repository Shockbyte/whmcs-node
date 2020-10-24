export interface AddTicketReplyRequest {
  ticketid: number;
  message: string;
  markdown?: boolean;
  clientid?: number;
  contactid?: number;
  adminusername?: string;
  name?: string;
  email?: string;
  status?: string;
  noemail?: boolean;
  attachments?: any[];
  created?: string;
}

export interface AddTicketReplyResponse {
  result: string;
}
