export interface FraudOrderRequest {
    orderid: number;
    cancelsub: boolean;
}

export interface FraudOrderResponse {
result: string;
}
