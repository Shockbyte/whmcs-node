export interface GetClientsDetailsRequest {
    clientid?: number;
    email?: string;
    stats?: boolean;
}

export interface GetClientsDetailsResponse {
    result: string;
    client: Client;
    stats: Stats;
}

export interface Client {
    client_id: number;
    owner_user_id: number;
    userid: number;
    id: number;
    uuid: string;
    firstname: string;
    lastname: string;
    fullname: string;
    companyname: string;
    email: string;
    address1: string;
    address2: string;
    city: string;
    fullstate: string;
    state: string;
    postcode: string;
    countrycode: string;
    country: string;
    phonenumber: number;
    tax_id: string;
    email_preferences: {
        general: number;
        invoice: number;
        support: number;
        product: number;
        domain: number;
        affiliate: number;
    };
    statecode: string;
    countryname: string;
    phonecc: number;
    phonenumberformatted: string;
    telephoneNumber: string;
    billingcid: number;
    notes: string;
    currency: number;
    defaultgateway: string;
    groupid: number;
    status: string;
    credit: number;
    taxexempt: boolean;
    latefeeoveride: boolean;
    overideduenotices: boolean;
    separateinvoices: boolean;
    disableautocc: boolean;
    emailoptout: boolean;
    marketing_emails_opt_in: boolean;
    overrideautoclose: boolean;
    allowSingleSignOn: number;
    email_verified: boolean;
    language: string;
    isOptedInToMarketingEmails: boolean;
    lastlogin: string;
    currency_code: string;
    users: User[]
}

export interface User {
    id: number;
    name: string;
    email: string;
    is_owner: boolean;
}

export interface Stats {
    numdueinvoices: number 
    dueinvoicesbalance: string
    incredit: boolean
    creditbalance: string 
    grossRevenue: string
    expenses: string
    income: string
    numoverdueinvoices: number 
    overdueinvoicesbalance: string
    numDraftInvoices: number
    draftInvoicesBalance: string
    numunpaidinvoices: number 
    unpaidinvoicesamount: string
    numpaidinvoices: number
    paidinvoicesamount: string
    numcancelledinvoices: number
    cancelledinvoicesamount: string
    numrefundedinvoices: number
    refundedinvoicesamount: string
    numcollectionsinvoices: number
    collectionsinvoicesamount: string
    numpaymentpendinginvoices: number
    paymentpendinginvoicesamount: string
    productsnumactivehosting: number
    productsnumhosting: number
    productsnumactivereseller: number
    productsnumreseller: number
    productsnumactiveservers: number
    productsnumservers: number
    productsnumactiveother: number
    productsnumother: number
    productsnumactive: number
    productsnumtotal: number
    numactivedomains: number
    numdomains: number
    numacceptedquotes: number
    numquotes: number
    numtickets: number
    numactivetickets: number
    numaffiliatesignups: number
    isAffiliate: boolean
}
