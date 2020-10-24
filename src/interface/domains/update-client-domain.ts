export interface UpdateClientDomainRequest {
    action: string;
    domainid: number;
    dnsmanagement?: boolean;
    emailforwarding?: boolean;
    idprotection?: boolean;
    donotrenew?: boolean;
    type?: string;
    regdate?: string;
    nextduedate?: string;
    expirydate?: string;
    domain?: string;
    firstpaymentamount?: any;
    recurringamount?: any;
    registrar?: string;
    regperiod?: number;
    paymentmethod?: string;
    subscriptionid?: string;
    status?: string;
    notes?: string;
    promoid?: number;
    autorecalc?: boolean;
    updatens?: boolean;
    ns1?: string;
    ns2?: string;
    ns3?: string;
    ns4?: string;
    ns5?: string;
}

export interface UpdateClientDomainResponse {
    result: string;
    domainid: number;
}
