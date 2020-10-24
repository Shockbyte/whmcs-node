export interface GetTicketNotesRequest {
  ticketid: number;
}

export interface GetTicketNotesResponse {
  result: string;
  totalresults: number;
  notes: Note[];
}

export interface Note {
  id: number;
  admin: string;
  date: string;
  message: string;
  attachment: string;
  attachments_removed: boolean;
}
