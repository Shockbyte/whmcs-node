export interface CreateProjectRequest {
  title: string;
  adminid: number;
  userid?: number;
  status?: string;
  created?: string;
  duedate?: string;
  completed?: boolean;
  ticketids?: string;
  invoiceids?: string;
}

export interface CreateProjectResponse {
  result: string;
  message: string;
}
