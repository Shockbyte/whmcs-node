export interface CancelOrderRequest {
    orderid: number;
    cancelsub?: string;
    noemail?: boolean;
}

export interface CancelOrderResponse {
    result: string;
}
