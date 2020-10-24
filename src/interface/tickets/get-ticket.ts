export interface GetTicketRequest {
  ticketnum?: string;
  ticketid?: number;
  repliessort?: string;
}

export interface GetTicketResponse {
  result: string;
  ticketid: number;
  tid: string;
  c: string;
  deptid: number;
  deptname: string;
  userid: number;
  contactid: number;
  name: string;
  email: string;
  requestor_name: string;
  requestor_type: string;
  requestor_email: string;
  cc: string;
  date: string;
  subject: string;
  status: string;
  priority: string;
  admin: string;
  lastreply: string;
  flag: number;
  service: string;
  replies: Reply[];
  notes: Note[];
}

export interface Reply {
  replyid: number;
  userid: number;
  contactid: number;
  name: string;
  email: string;
  requestor_name: string;
  requestor_email: string;
  requestor_type: string;
  date: string;
  message: string;
  attachment: string;
  attachments: Attachment[];
  attachments_removed: boolean;
  admin: string;
}

export interface Attachment {
  filename: string;
  index: number;
}

export interface Note {
  noteid: number;
  date: string;
  message: string;
  attachment: string;
  attachments: Attachment[];
  attachments_removed: boolean;
  admin: string;
}
