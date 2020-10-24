export interface AddOrderRequest {
    clientid: number;
    paymentmethod: string;
    pid?: number[];
    domain?: string[];
    billingcycle?: string[];
    domaintype?: string[];
    regperiod?: number[];
    idnlanguage?: string[];
    eppcode?: string[];
    nameserver1?: string;
    nameserver2?: string;
    nameserver3?: string;
    nameserver4?: string;
    nameserver5?: string;
    customfields?: string[];
    configoptions?: string[];
    priceoverride?: number[];
    promocode?: string;
    promooverride?: boolean;
    affid?: number;
    noinvoice?: boolean;
    noinvoiceemail?: boolean;
    noemail?: boolean;
    addons?: string[];
    hostname?: string[];
    ns1prefix?: string[];
    ns2prefix?: string[];
    rootpw?: string[];
    contactid?: number;
    dnsmanagement?: boolean[];
    domainfields?: string[];
    emailforwarding?: boolean[];
    idprotection?: boolean[];
    domainpriceoverride?: number[];
    domainrenewoverride?: number[];
    domainrenewals?: any[];
    clientip?: string;
    addonid?: number;
    serviceid?: number;
    addonids?: number[];
    serviceids?: number[];
}

export interface AddOrderResponse {
    result: string;
    orderid: number;
    serviceids: string;
    addonids: string;
    domainids: string;
    invoiceid: number;
}
