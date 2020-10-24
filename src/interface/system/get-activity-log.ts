export interface GetActivityLogRequest {
  limitstart?: number;
  limitnum?: number;
  userid?: number;
  date?: string;
  user?: string;
  description?: string;
  ipaddress?: string;
}

export interface GetActivityLogResponse {
  result: string;
  totalresults: number;
  startnumber: number;
  activity: Entry[];
}

export interface Entry {
  id: number;
  userid: number;
  date: string;
  description: string;
  username: string;
  ipadress: string;
}
