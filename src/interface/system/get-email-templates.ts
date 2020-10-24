export interface GetEmailTemplatesRequest {
  type?: string;
  language?: string;
}

export interface GetEmailTemplatesResponse {
  result: string;
  totalresults: number;
  emailtemplates: EmailTemplate[];
}

export interface EmailTemplate {
  id: number;
  name: string;
  subject: string;
  custom: number;
}
