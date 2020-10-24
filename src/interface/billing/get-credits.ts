export interface GetCreditsRequest {
  clientid: number;
}

export interface GetCreditsResponse {
  result: string;
  totalresults: number;
  clientid: number;
  credits: Credit[];
}

export interface Credit {
  id: number;
  date: Date;
  description: string;
  amount: number;
  relid: number;
}
