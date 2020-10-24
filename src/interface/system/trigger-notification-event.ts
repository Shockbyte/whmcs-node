export interface TriggerNotificationEventRequest {
  notifications_identifier?: string;
  title?: string;
  message?: string;
  url?: string;
  status?: string;
  statusStyle?: string;
  attributes?: any[];
}

export interface TriggerNotificationEventResponse {
  result: string;
}
