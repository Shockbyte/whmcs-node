export interface GetClientsDomainsRequest {
    limitstart?: number;
    limitnum?: number;
    clientid?: number;
    domainid?: number;
    domain?: string;
}

export interface GetClientsDomainsResponse {
    result: string;
    clientid: number;
    domainid: number;
    totalresults: number;
    startnumber: number;
    numreturned: number;
    domains: Domain[];
}

export interface Domain {
    id: number;
    userid: number;
    orderid: number;
    regtype: string;
    domainname: string;
    registrar: string;
    regperiod: number;
    firstpaymentamount: number;
    recurringamount: number;
    paymentmethod: string;
    paymentmethodname: string;
    regdate: string;
    expirydate: string;
    nextduedate: string;
    status: string;
    subscriptionid: string;
    promoid: number;
    dnsmanagement: number;
    emailforwarding: number;
    idprotection: number;
    donotrenew: number;
    notes: string;
}
