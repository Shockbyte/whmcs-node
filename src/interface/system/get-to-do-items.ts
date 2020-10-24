export interface GetToDoItemsRequest {
  limitstart: number;
  limitnum: number;
  status: string;
}

export interface GetToDoItemsResponse {
  result: string;
  totalresults: number;
  startnumber: number;
  items: any[];
}
