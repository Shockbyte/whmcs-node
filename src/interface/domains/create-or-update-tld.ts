export interface CreateOrUpdateTLDRequest {
    extension: string;
    id_protection?: boolean;
    dns_management?: boolean;
    email_forwarding?: boolean;
    epp_required?: boolean;
    auto_registrar?: string;
    group?: string;
    currency_code?: string;
    grace_period_days?: number;
    grace_period_fee?: any;
    redemption_period_days?: number;
    redemption_period_fee?: any;
    register?: [];
    renew?: [];
    transfer?: [];
    display_after?: string;
}

export interface CreateOrUpdateTLDResponse {
    result: string;
    extension: string;
    id: number;
}
