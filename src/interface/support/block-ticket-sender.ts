export interface BlockTicketSenderRequest {
  ticketid: number;
  delete?: boolean;
}

export interface BlockTicketSenderResponse {
  result: string;
}
