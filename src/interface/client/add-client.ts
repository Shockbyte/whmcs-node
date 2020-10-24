export interface AddClientRequest {
    owner_user_id: number;
    firstname: string;
    lastname: string;
    companyname?: string;
    email: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    phonenumber: string;
    tax_id?: string;
    password2?: string;
    securityqid?: number;
    securityqans?: string;
    currency?: number;
    groupid?: number;
    customfields?: string;
    language?: string;
    clientip?: string;
    notes?: string;
    marketingoptin?: boolean;
    noemail?: boolean;
    skipvalidation?: boolean;
}

export interface AddClientResponse {
    result: string;
    clientid: string;
}
