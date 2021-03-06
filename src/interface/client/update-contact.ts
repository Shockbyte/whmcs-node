export interface UpdateContactRequest {
    contactid: number;
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
    email_preferences?: EmailPreference[];
}

export interface UpdateContactResponse {
    result: string;
    contactid: number;
}

export interface EmailPreference {
    general?: boolean;
    product?: boolean;
    domain?: boolean;
    invoice?: boolean;
    support?: boolean;
    affiliate?: boolean;
}
