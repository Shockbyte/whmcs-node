export interface UpdateProjectRequest {
  projectid: number;
  adminid?: number;
  userid?: number;
  status?: string;
  created?: string;
  duedate?: string;
  completed?: boolean;
  title?: string;
  ticketids?: string;
  invoiceids?: string;
  notes?: string;
}

export interface UpdateProjectResponse {
  result: string;
  message: string;
}
