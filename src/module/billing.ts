import { BaseModule } from "./base";
import { AcceptQuoteRequest, AcceptQuoteResponse } from "../interface/billing/accept-quote";
import { AddBillableItemRequest, AddBillableItemResponse } from "../interface/billing/add-billable-item";
import { AddCreditRequest, AddCreditResponse } from "../interface/billing/add-credit";
import { AddInvoicePaymentRequest, AddInvoicePaymentResponse } from "../interface/billing/add-invoice-payment";
import { AddPayMethodRequest, AddPayMethodResponse } from "../interface/billing/add-pay-method";
import { AddTransactionRequest, AddTransactionResponse } from "../interface/billing/add-transaction";
import { ApplyCreditRequest, ApplyCreditResponse } from "../interface/billing/apply-credit";
import { CapturePaymentRequest, CapturePaymentResponse } from "../interface/billing/capture-payment";
import { CreateInvoiceRequest, CreateInvoiceResponse } from "../interface/billing/create-invoice";
import { CreateQuoteRequest, CreateQuoteResponse } from "../interface/billing/create-quote";
import { DeletePayMethodRequest, DeletePayMethodResponse } from "../interface/billing/delete-pay-method";
import { DeleteQuoteRequest, DeleteQuoteResponse } from "../interface/billing/delete-quote";
import { GenInvoicesRequest, GenInvoicesResponse } from "../interface/billing/gen-invoices";
import { GetCreditsRequest, GetCreditsResponse } from "../interface/billing/get-credits";
import { GetInvoiceRequest, GetInvoiceResponse } from "../interface/billing/get-invoice";
import { GetInvoicesRequest, GetInvoicesResponse } from "../interface/billing/get-invoices";
import { GetPayMethodsRequest, GetPayMethodsResponse } from "../interface/billing/get-pay-methods";
import { GetQuotesRequest, GetQuotesResponse } from "../interface/billing/get-quotes";
import { GetTransactionsRequest, GetTransactionsResponse } from "../interface/billing/get-transactions";
import { SendQuoteRequest, SendQuoteResponse } from "../interface/billing/send-quote";
import { UpdateInvoiceRequest, UpdateInvoiceResponse } from "../interface/billing/update-invoice";
import { UpdatePayMethodRequest, UpdatePayMethodResponse } from "../interface/billing/update-pay-method";
import { UpdateQuoteRequest, UpdateQuoteResponse } from "../interface/billing/update-quote";
import { UpdateTransactionRequest, UpdateTransactionResponse } from "../interface/billing/update-transaction";

export class WhmcsBillingService extends BaseModule {

  public async acceptQuote(options: AcceptQuoteRequest): Promise<AcceptQuoteResponse> {
    return this.request('AcceptQuote', options);
  }

  public async addBillableItem(options: AddBillableItemRequest): Promise<AddBillableItemResponse> {
    return this.request('AddBillableItem', options);
  }

  public async addCredit(options: AddCreditRequest): Promise<AddCreditResponse> {
    return this.request('AddCredit', options);
  }

  public async addInvoicePayment(options: AddInvoicePaymentRequest): Promise<AddInvoicePaymentResponse> {
    return this.request('AddInvoicePayment', options);
  }

  public async addPayMethod(options: AddPayMethodRequest): Promise<AddPayMethodResponse> {
    return this.request('AddPayMethod', options);
  }

  public async addTransaction(options: AddTransactionRequest): Promise<AddTransactionResponse> {
    return this.request('AddTransaction', options);
  }

  public async applyCredit(options: ApplyCreditRequest): Promise<ApplyCreditResponse> {
    return this.request('ApplyCredit', options);
  }

  public async capturePayment(options: CapturePaymentRequest): Promise<CapturePaymentResponse> {
    return this.request('CapturePayment', options);
  }

  public async createInvoice(options: CreateInvoiceRequest): Promise<CreateInvoiceResponse> {
    return this.request('CreateInvoice', options);
  }

  public async createQuote(options: CreateQuoteRequest): Promise<CreateQuoteResponse> {
    return this.request('CreateQuote', options);
  }

  public async deletePayMethod(options: DeletePayMethodRequest): Promise<DeletePayMethodResponse> {
    return this.request('DeletePayMethod', options);
  }

  public async deleteQuote(options: DeleteQuoteRequest): Promise<DeleteQuoteResponse> {
    return this.request('DeleteQuote', options);
  }

  public async genInvoices(options: GenInvoicesRequest): Promise<GenInvoicesResponse> {
    return this.request('GenInvoices', options);
  }

  public async getCredits(options: GetCreditsRequest): Promise<GetCreditsResponse> {
    return this.request('GetCredits', options);
  }

  public async getInvoice(options: GetInvoiceRequest): Promise<GetInvoiceResponse> {
    return this.request('GetInvoice', options);
  }

  public async getInvoices(options: GetInvoicesRequest): Promise<GetInvoicesResponse> {
    return this.request('GetInvoices', options);
  }

  public async getPayMethods(options: GetPayMethodsRequest): Promise<GetPayMethodsResponse> {
    return this.request('GetPayMethods', options);
  }

  public async getQuotes(options: GetQuotesRequest): Promise<GetQuotesResponse> {
    return this.request('GetQuotes', options);
  }

  public async getTransactions(options: GetTransactionsRequest): Promise<GetTransactionsResponse> {
    return this.request('GetTransactions', options);
  }

  public async sendQuote(options: SendQuoteRequest): Promise<SendQuoteResponse> {
    return this.request('SendQuote', options);
  }

  public async updateInvoice(options: UpdateInvoiceRequest): Promise<UpdateInvoiceResponse> {
    return this.request('UpdateInvoice', options);
  }

  public async updatePayMethod(options: UpdatePayMethodRequest): Promise<UpdatePayMethodResponse> {
    return this.request('UpdatePayMethod', options);
  }

  public async updateQuote(options: UpdateQuoteRequest): Promise<UpdateQuoteResponse> {
    return this.request('UpdateQuote', options);
  }

  public async updateTransaction(options: UpdateTransactionRequest): Promise<UpdateTransactionResponse> {
    return this.request('UpdateTransaction', options);
  }

}
