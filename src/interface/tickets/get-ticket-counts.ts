export interface GetTicketCountsRequest {
  ignoreDepartmentAssignments?: boolean;
  includeCountsByStatus?: boolean;
}

export interface GetTicketCountsResponse {
  result: string;
  filteredDepartments: number[];
  allActive: number;
  awaitingReply: number;
  flaggedTickets: number;
  status: any;
}
