export interface AddOrderRequest {
    clientid: number;
    paymentmethod: string;
    pid?: [];
    domain?: [];
    billingcycle?: [];
    domaintype?: [];
    regperiod?: [];
    idnlanguage?: [];
    eppcode?: [];
    nameserver1?: string;
    nameserver2?: string;
    nameserver3?: string;
    nameserver4?: string;
    nameserver5?: string;
    customfields?: [];
    configoptions?: [];
    priceoverride?: [];
    promocode?: string;
    promooverride?: boolean;
    affid?: number;
    noinvoice?: boolean;
    noinvoiceemail?: boolean;
    noemail?: boolean;
    addons?: [];
    hostname?: [];
    ns1prefix?: [];
    ns2prefix?: [];
    rootpw?: [];
    contactid?: number;
    dnsmanagement?: [];
    domainfields?: [];
    emailforwarding?: [];
    idprotection?: [];
    domainpriceoverride?: [];
    domainrenewoverride?: [];
    domainrenewals?: [];
    clientip?: string;
    addonid?: number;
    serviceid?: number;
    addonids?: [];
    serviceids?: [];
}

export interface AddOrderResponse {
    result: string;
    orderid: number;
    serviceids: string;
    addonids: string;
    domainids: string;
    invoiceid: number;
}
