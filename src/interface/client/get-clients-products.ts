export interface GetClientsProductsRequest {
    limitstart?: number;
    limitnum?: number;
    clientid?: number;
    serviceid?: number;
    pid?: number;
    domain?: string;
    username2?: string;
}

export interface GetClientsProductsResponse {
    result: string;
    clientid: number;
    serviceid: number;
    pid: number;
    domain: string;
    totalresults: number;
    startnumber: number;
    numreturned: number;
    products: Product[];
}

export interface Product {
    id: number;
    clientid: number;
    orderid: number;
    pid: number;
    regdate: string;
    name: string;
    translated_name: string;
    groupname: string;
    translated_groupname: string;
    domain: string;
    dedicatedip: string;
    serverid: number;
    servername: string;
    serverip: string;
    serverhostname: string;
    suspensionreason: string;
    firstpaymentamount: number;
    recurringamount: number;
    paymentmethod: string;
    paymentmethodname: string;
    billingcycle: string;
    nextduedate: string;
    status: string;
    username: string;
    password: string;
    subscriptionid: string;
    promoid: number;
    overideautosuspend: string;
    overidesuspenduntil: string;
    ns1: string;
    ns2: string;
    assignedips: string;
    notes: string;
    diskusage: number;
    disklimit: number;
    bwusage: number;
    bwlimit: number;
    lastupdate: string;
    customfields: {
        customfield: []
    },
    configoptions: {
        configoption: ConfigOption[]
    }
}

export interface ConfigOption {
    id: number;
    option: string;
    type: string;
    value: string;
}
