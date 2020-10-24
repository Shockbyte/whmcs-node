export interface GetCurrenciesRequest {

}

export interface GetCurrenciesResponse {
  result: string;
  totalresults: number;
  currencies: Currency[];
}

export interface Currency {
  id: string;
  code: string;
  prefix: string;
  suffix: string;
  format: string;
  rate: string;
}
