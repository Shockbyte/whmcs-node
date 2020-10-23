export interface GetTLDPricingRequest {
    currencyid?: number;
    clientid?: number;
}

export interface GetTLDPricingResponse {
    result: string;
    currency: [];
    pricing: [];
}
