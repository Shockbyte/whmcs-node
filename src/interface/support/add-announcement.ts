export interface AddAnnouncementRequest {
  date: string;
  title: string;
  announcement: SVGAnimatedString;
  published?: boolean;
}

export interface AddAnnouncementResponse {
  result: string;
  announcementid: number;
}
