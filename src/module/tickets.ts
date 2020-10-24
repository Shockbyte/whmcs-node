import { GetSupportDepartmentsRequest, GetSupportDepartmentsResponse } from "../interface/tickets/get-support-departments";
import { GetSupportStatusesRequest, GetSupportStatusesResponse } from "../interface/tickets/get-support-statuses";
import { GetTicketRequest, GetTicketResponse } from "../interface/tickets/get-ticket";
import { GetTicketAttachmentRequest, GetTicketAttachmentResponse } from "../interface/tickets/get-ticket-attachment";
import { GetTicketCountsRequest, GetTicketCountsResponse } from "../interface/tickets/get-ticket-counts";
import { GetTicketNotesRequest, GetTicketNotesResponse } from "../interface/tickets/get-ticket-notes";
import { GetTicketPredefinedCatsRequest, GetTicketPredefinedCatsResponse } from "../interface/tickets/get-ticket-predefined-cats";
import { GetTicketPredefinedRepliesRequest, GetTicketPredefinedRepliesResponse } from "../interface/tickets/get-ticket-predefined-replies";
import { GetTicketsRequest, GetTicketsResponse } from "../interface/tickets/get-tickets";
import { BaseModule } from "./base";

export class WhmcsTicketsService extends BaseModule {
  
  public async getSupportDepartments(options: GetSupportDepartmentsRequest): Promise<GetSupportDepartmentsResponse> {
    return this.request('GetSupportDepartments', options);
  }
  
  public async getSupportStatuses(options: GetSupportStatusesRequest): Promise<GetSupportStatusesResponse> {
    return this.request('GetSupportStatuses', options);
  }
  
  public async getTicket(options: GetTicketRequest): Promise<GetTicketResponse> {
    return this.request('GetTicket', options);
  }
  
  public async getTicketAttachment(options: GetTicketAttachmentRequest): Promise<GetTicketAttachmentResponse> {
    return this.request('GetTicketAttachment', options);
  }
  
  public async getTicketCounts(options: GetTicketCountsRequest): Promise<GetTicketCountsResponse> {
    return this.request('GetTicketCounts', options);
  }
  
  public async getTicketNotes(options: GetTicketNotesRequest): Promise<GetTicketNotesResponse> {
    return this.request('GetTicketNotes', options);
  }
  
  public async getTicketPredefinedCats(options: GetTicketPredefinedCatsRequest): Promise<GetTicketPredefinedCatsResponse> {
    return this.request('GetTicketPredefinedCats', options);
  }
  
  public async getTicketPredefinedReplies(options: GetTicketPredefinedRepliesRequest): Promise<GetTicketPredefinedRepliesResponse> {
    return this.request('GetTicketPredefinedReplies', options);
  }
  
  public async getTickets(options: GetTicketsRequest): Promise<GetTicketsResponse> {
    return this.request('GetTickets', options);
  }
  
}