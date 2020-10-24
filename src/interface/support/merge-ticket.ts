export interface MergeTicketRequest {
  ticketid: number;
  mergeticketids: string;
  newsubject?: string;
}

export interface MergeTicketResponse {
  result: string;
  ticketid: number;
}
