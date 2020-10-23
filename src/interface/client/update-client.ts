export interface UpdateClientRequest {
    clientid?: string;
    clientemail?: string;
    firstname?: string;
    lastname?: string;
    companyname?: string;
    email?: string;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    postcode?: string;
    country?: string;
    phonenumber?: string;
    tax_id?: string;
    currency?: number;
    groupid?: number;
    customfields?: string;
    language?: string;
    clientip?: string;
    notes?: string;
    status?: string;
    paymentmethod?: string;
    email_preferences: {
        general?: boolean;
        product?: boolean;
        domain?: boolean;
        invoice?: boolean;
        support?: boolean;
        affiliate?: boolean
    }[];
    marketingoptin?: boolean;
    clearcreditcard?: boolean;
    skipvalidation?: boolean;
    latefeeoveride?: boolean;
    overideduenotices?: boolean;
    taxexempt?: boolean;
    separateinvoices?: boolean;
    disableautocc?: boolean;
    overrideautoclose?: boolean;
}

export interface UpdateClientResponse {
    result: string;
    clientid: number;
}
