export interface AddContactRequest {
    clientid?: number;
    firstname?: string
    lastname?: string
    companyname?: string
    email?: string
    address1?: string
    address2?: string
    city?: string
    state?: string
    postcode?: string
    country?: string
    phonenumber?: string
    tax_id?: string
    email_preferences: {
        general?: boolean;
        product?: boolean;
        domain?: boolean;
        invoice?: boolean;
        support?: boolean;
        affiliate?: boolean;
    }[];
}

export interface AddContactResponse {
    result: string;
    contactid: number;
}
