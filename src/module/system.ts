import { AddBannedIpRequest, AddBannedIpResponse } from "../interface/system/add-banned-ip";
import { DecryptPasswordRequest, DecryptPasswordResponse } from "../interface/system/decrypt-password";
import { EncryptPasswordRequest, EncryptPasswordResponse } from "../interface/system/encrypt-password";
import { GetActivityLogRequest, GetActivityLogResponse } from "../interface/system/get-activity-log";
import { GetAdminDetailsRequest, GetAdminDetailsResponse } from "../interface/system/get-admin-details";
import { GetAdminUsersRequest, GetAdminUsersResponse } from "../interface/system/get-admin-users";
import { GetAutomationLogRequest, GetAutomationLogResponse } from "../interface/system/get-automation-log";
import { GetConfigurationValueRequest, GetConfigurationValueResponse } from "../interface/system/get-configuration-value";
import { GetCurrenciesRequest, GetCurrenciesResponse } from "../interface/system/get-currencies";
import { GetEmailTemplatesRequest, GetEmailTemplatesResponse } from "../interface/system/get-email-templates";
import { GetPaymentMethodsRequest, GetPaymentMethodsResponse } from "../interface/system/get-payment-methods";
import { GetStaffOnlineRequest, GetStaffOnlineResponse } from "../interface/system/get-staff-online";
import { GetStatsRequest, GetStatsResponse } from "../interface/system/get-stats";
import { GetToDoItemStatusesRequest, GetToDoItemStatusesResponse } from "../interface/system/get-to-do-item-statuses";
import { GetToDoItemsRequest, GetToDoItemsResponse } from "../interface/system/get-to-do-items";
import { LogActivityRequest, LogActivityResponse } from "../interface/system/log-activity";
import { SendAdminEmailRequest, SendAdminEmailResponse } from "../interface/system/send-admin-email";
import { SendEmailRequest, SendEmailResponse } from "../interface/system/send-email";
import { SetConfigurationValueRequest, SetConfigurationValueResponse } from "../interface/system/set-configuration-value";
import { TriggerNotificationEventRequest, TriggerNotificationEventResponse } from "../interface/system/trigger-notification-event";
import { UpdateAdminNotesRequest, UpdateAdminNotesResponse } from "../interface/system/update-admin-notes";
import { UpdateAnnouncementRequest, UpdateAnnouncementResponse } from "../interface/system/update-announcement";
import { UpdateToDoItemRequest, UpdateToDoItemResponse } from "../interface/system/update-to-do-item";
import { WhmcsDetailsRequest, WhmcsDetailsResponse } from "../interface/system/whmcs-details";
import { BaseModule } from "./base";

export class WhmcsSystemService extends BaseModule {

  public async addBannedIp(options: AddBannedIpRequest): Promise<AddBannedIpResponse> {
    return this.request('AddBannedIp', options);
  }
  
  public async decryptPassword(options: DecryptPasswordRequest): Promise<DecryptPasswordResponse> {
    return this.request('DecryptPassword', options);
  }
  
  public async encryptPassword(options: EncryptPasswordRequest): Promise<EncryptPasswordResponse> {
    return this.request('EncryptPassword', options);
  }
  
  public async getActivityLog(options: GetActivityLogRequest): Promise<GetActivityLogResponse> {
    return this.request('GetActivityLog', options);
  }
  
  public async getAdminDetails(options: GetAdminDetailsRequest): Promise<GetAdminDetailsResponse> {
    return this.request('GetAdminDetails', options);
  }
  
  public async getAdminUsers(options: GetAdminUsersRequest): Promise<GetAdminUsersResponse> {
    return this.request('GetAdminUsers', options);
  }
  
  public async getAutomationLog(options: GetAutomationLogRequest): Promise<GetAutomationLogResponse> {
    return this.request('GetAutomationLog', options);
  }
  
  public async getConfigurationValue(options: GetConfigurationValueRequest): Promise<GetConfigurationValueResponse> {
    return this.request('GetConfigurationValue', options);
  }
  
  public async getCurrencies(options: GetCurrenciesRequest): Promise<GetCurrenciesResponse> {
    return this.request('GetCurrencies', options);
  }
  
  public async getEmailTemplates(options: GetEmailTemplatesRequest): Promise<GetEmailTemplatesResponse> {
    return this.request('GetEmailTemplates', options);
  }
  
  public async getPaymentMethods(options: GetPaymentMethodsRequest): Promise<GetPaymentMethodsResponse> {
    return this.request('GetPaymentMethods', options);
  }
  
  public async getStaffOnline(options: GetStaffOnlineRequest): Promise<GetStaffOnlineResponse> {
    return this.request('GetStaffOnline', options);
  }
  
  public async getStats(options: GetStatsRequest): Promise<GetStatsResponse> {
    return this.request('GetStats', options);
  }
  
  public async getToDoItems(options: GetToDoItemsRequest): Promise<GetToDoItemsResponse> {
    return this.request('GetToDoItems', options);
  }
  
  public async getToDoItemStatuses(options: GetToDoItemStatusesRequest): Promise<GetToDoItemStatusesResponse> {
    return this.request('GetToDoItemStatuses', options);
  }
  
  public async logActivity(options: LogActivityRequest): Promise<LogActivityResponse> {
    return this.request('LogActivity', options);
  }
  
  public async sendAdminEmail(options: SendAdminEmailRequest): Promise<SendAdminEmailResponse> {
    return this.request('SendAdminEmail', options);
  }
  
  public async sendEmail(options: SendEmailRequest): Promise<SendEmailResponse> {
    return this.request('SendEmail', options);
  }
  
  public async setConfigurationValue(options: SetConfigurationValueRequest): Promise<SetConfigurationValueResponse> {
    return this.request('SetConfigurationValue', options);
  }
  
  public async triggerNotificationEvent(options: TriggerNotificationEventRequest): Promise<TriggerNotificationEventResponse> {
    return this.request('TriggerNotificationEvent', options);
  }
  
  public async updateAdminNotes(options: UpdateAdminNotesRequest): Promise<UpdateAdminNotesResponse> {
    return this.request('UpdateAdminNotes', options);
  }
  
  public async updateAnnouncement(options: UpdateAnnouncementRequest): Promise<UpdateAnnouncementResponse> {
    return this.request('UpdateAnnouncement', options);
  }
  
  public async updateToDoItem(options: UpdateToDoItemRequest): Promise<UpdateToDoItemResponse> {
    return this.request('UpdateToDoItem', options);
  }
  
  public async whmcsDetails(options: WhmcsDetailsRequest): Promise<WhmcsDetailsResponse> {
    return this.request('WhmcsDetails', options);
  }
  
}