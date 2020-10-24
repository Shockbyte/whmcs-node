export interface UpdateTicketReplyRequest {
  replyid: number;
  message: string;
  markdown?: boolean;
  created?: string;
}

export interface UpdateTicketReplyResponse {
  result: string;
  replyid: number;
}
