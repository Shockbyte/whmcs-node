export interface UpdateAnnouncementRequest {
  announcementid: string;
  title?: string;
  announcement?: string;
  date?: string;
  published?: boolean;
}

export interface UpdateAnnouncementResponse {
  result: string;
  announcementid: number;
}
