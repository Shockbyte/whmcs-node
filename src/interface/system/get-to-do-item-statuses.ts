export interface GetToDoItemStatusesRequest {

}

export interface GetToDoItemStatusesResponse {
  result: string;
  totalresults: number;
  todoitemstatuses: Status[];
}

export interface Status {
  type: string;
  count: number;
  overdue: number;
}