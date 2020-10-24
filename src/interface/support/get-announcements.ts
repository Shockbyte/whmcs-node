export interface GetAnnouncementsRequest {
  limitstart?: number;
  limitnum?: number;
}

export interface GetAnnouncementsResponse {
  result: string;
  totalresults: number;
  startnumber: number;
  numreturned: number;
  announcements: Announcement[];
}

export interface Announcement {
  id: number;
  date: string;
  title: string;
  announcement: string;
  published: number;
  parentid: number;
  language: string;
  created_at: string;
  updated_at: string;
}
