export interface GetEmailsRequest {
    clientid: number;
    limitstart?: number;
    limitnum?: number;
    date?: string;
    subject?: string;
}

export interface GetEmailsResponse {
    result: string;
    totalresults: number;
    startnumber: number;
    numreturned: number;
    emails: Email[];
}

export interface Email {
    id: number;
    userid: number;
    subject: string;
    message: string;
    date: string;
    to: string;
    cc: string;
    bcc: string;
    attachments: any;
    pending: number;
    message_data: any;
    failed: number;
    failure_reason: string;
    retry_count: number;
    created_at: string;
    updated_at: string;
    campaign_id: number;    
}
