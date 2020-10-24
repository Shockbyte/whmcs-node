import { AddAnnouncementRequest, AddAnnouncementResponse } from "../interface/support/add-announcement";
import { AddCancelRequestRequest, AddCancelRequestResponse } from "../interface/support/add-cancel-request";
import { AddClientNoteRequest, AddClientNoteResponse } from "../interface/support/add-client-note";
import { AddTicketNoteRequest, AddTicketNoteResponse } from "../interface/support/add-ticket-note";
import { AddTicketReplyRequest, AddTicketReplyResponse } from "../interface/support/add-ticket-reply";
import { BlockTicketSenderRequest, BlockTicketSenderResponse } from "../interface/support/block-ticket-sender";
import { DeleteAnnouncementRequest, DeleteAnnouncementResponse } from "../interface/support/delete-announcement";
import { DeleteTicketRequest, DeleteTicketResponse } from "../interface/support/delete-ticket";
import { DeleteTicketNoteRequest, DeleteTicketNoteResponse } from "../interface/support/delete-ticket-note";
import { DeleteTicketReplyRequest, DeleteTicketReplyResponse } from "../interface/support/delete-ticket-reply";
import { GetAnnouncementsRequest, GetAnnouncementsResponse } from "../interface/support/get-announcements";
import { MergeTicketRequest, MergeTicketResponse } from "../interface/support/merge-ticket";
import { OpenTicketRequest, OpenTicketResponse } from "../interface/support/open-ticket";
import { UpdateTicketRequest, UpdateTicketResponse } from "../interface/support/update-ticket";
import { UpdateTicketReplyRequest, UpdateTicketReplyResponse } from "../interface/support/update-ticket-reply";
import { BaseModule } from "./base";

export class WhmcsSupportService extends BaseModule {
  
  public async addAnnouncement(options: AddAnnouncementRequest): Promise<AddAnnouncementResponse> {
    return this.request('AddAnnouncement', options);
  }

  public async addCancelRequest(options: AddCancelRequestRequest): Promise<AddCancelRequestResponse> {
    return this.request('AddCancelRequest', options);
  }

  public async addClientNote(options: AddClientNoteRequest): Promise<AddClientNoteResponse> {
    return this.request('AddClientNote', options);
  }

  public async addTicketNote(options: AddTicketNoteRequest): Promise<AddTicketNoteResponse> {
    return this.request('AddTicketNote', options);
  }

  public async addTicketReply(options: AddTicketReplyRequest): Promise<AddTicketReplyResponse> {
    return this.request('AddTicketReply', options);
  }

  public async blockTicketSender(options: BlockTicketSenderRequest): Promise<BlockTicketSenderResponse> {
    return this.request('BlockTicketSender', options);
  }

  public async deleteAnnouncement(options: DeleteAnnouncementRequest): Promise<DeleteAnnouncementResponse> {
    return this.request('DeleteAnnouncement', options);
  }

  public async deleteTicket(options: DeleteTicketRequest): Promise<DeleteTicketResponse> {
    return this.request('DeleteTicket', options);
  }

  public async deleteTicketNote(options: DeleteTicketNoteRequest): Promise<DeleteTicketNoteResponse> {
    return this.request('DeleteTicketNote', options);
  }

  public async deleteTicketReply(options: DeleteTicketReplyRequest): Promise<DeleteTicketReplyResponse> {
    return this.request('DeleteTicketReply', options);
  }

  public async getAnnouncements(options: GetAnnouncementsRequest): Promise<GetAnnouncementsResponse> {
    return this.request('GetAnnouncements', options);
  }

  public async mergeTicket(options: MergeTicketRequest): Promise<MergeTicketResponse> {
    return this.request('MergeTicket', options);
  }

  public async openTicket(options: OpenTicketRequest): Promise<OpenTicketResponse> {
    return this.request('OpenTicket', options);
  }

  public async updateTicket(options: UpdateTicketRequest): Promise<UpdateTicketResponse> {
    return this.request('UpdateTicket', options);
  }

  public async updateTicketReply(options: UpdateTicketReplyRequest): Promise<UpdateTicketReplyResponse> {
    return this.request('UpdateTicketReply', options);
  }

}