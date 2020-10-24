export interface GetTicketPredefinedCatsRequest {

}

export interface GetTicketPredefinedCatsResponse {
  result: string;
  totalresults: number;
  categories: Category[];
}

export interface Category {
  id: number;
  parentid: number;
  name: string;
  replycount: number;
}
