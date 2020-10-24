export interface GetTicketPredefinedRepliesRequest {
  catid?: number;
}

export interface GetTicketPredefinedRepliesResponse {
  result: string;
  totalresults: number;
  predefinedreplies: PredefinedReply[];
}

export interface PredefinedReply {
  name: string;
  reply: string;
}
