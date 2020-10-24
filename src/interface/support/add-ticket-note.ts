export interface AddTicketNoteRequest {
  message: string;
  ticketnum?: string;
  ticketid?: number;
  markdown?: boolean;
  attachments?: any[];
  created?: string;
}

export interface AddTicketNoteResponse {
  result: string;
}
