export interface AcceptOrderRequest {
    orderid: number;
    serverid?: number;
    serviceusername?: string;
    servicepassword?: string;
    registrar?: string;
    sendregistrar?: boolean;
    autosetup?: boolean;
    sendemail?: boolean;
}

export interface AcceptOrderResponse {
    result: string;
}
