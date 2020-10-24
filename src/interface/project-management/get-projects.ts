export interface GetProjectsRequest {
  limitstart?: number;
  limitnum?: number;
  userid?: number;
  title?: string;
  ticketids?: string;
  invoiceids?: string;
  notes?: string;
  adminid?: number;
  status?: string;
  created?: string;
  duedate?: string;
  completed?: boolean;
  lastmodified?: string;
}

export interface GetProjectsResponse {
  result: string;
  totalresults: number;
  startnumber: number;
  numreturned: number;
  projects: Project[];
}

export interface Project {
  id: number;
  userid: number;
  title: string;
  ticketids: string;
  invoiceids: string;
  notes: string;
  adminid: number;
  status: string;
  created: string;
  duedate: string;
  completed: number;
  lastmodified: string;
  watchers: string;
}
