export interface WhmcsDetailsRequest {

}

export interface WhmcsDetailsResponse {
  result: string;
  whmcs: { version: string, canonicalversion: string }
}
