export interface GetTicketAttachmentRequest {
  relatedid: number;
  type: string;
  index: number;
}

export interface GetTicketAttachmentResponse {
  result: string;
  filename: string;
  data: string;
}
