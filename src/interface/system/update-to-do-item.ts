export interface UpdateToDoItemRequest {
  itemid: number;
  adminid: number;
  status?: string;
  date?: number;
  title?: string;
  description?: string;
  duedate?: number;
}

export interface UpdateToDoItemResponse {
  result: string;
  itemid: number;
}
