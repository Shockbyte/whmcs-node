export interface AddAnnouncementRequest {
  date: string;
  title: string;
  announcement: string;
  published?: boolean;
}

export interface AddAnnouncementResponse {
  result: string;
  announcementid: number;
}
