import { Module } from "./module";
import { AddClientRequest, AddClientResponse } from "../interface/client/add-client";
import { AddContactRequest, AddContactResponse } from "../interface/client/add-contact";
import { CloseClientRequest, CloseClientResponse } from "../interface/client/close-client";
import { DeleteClientRequest, DeleteClientResponse } from "../interface/client/delete-client";
import { DeleteContactRequest, DeleteContactResponse } from "../interface/client/delete-contact";
import { GetCancelledPackagesRequest, GetCancelledPackagesResponse } from "../interface/client/get-cancelled-packages";
import { GetClientGroupsRequest, GetClientGroupsResponse } from "../interface/client/get-client-groups";
import { GetClientPasswordRequest, GetClientPasswordResponse } from "../interface/client/get-client-password";
import { GetClientsRequest, GetClientsResponse } from "../interface/client/get-clients";
import { GetClientsAddonsRequest, GetClientsAddonsResponse } from "../interface/client/get-clients-addons";
import { GetClientsDetailsRequest, GetClientsDetailsResponse } from "../interface/client/get-clients-details";
import { GetClientsDomainsRequest, GetClientsDomainsResponse } from "../interface/client/get-clients-domains";
import { GetClientsProductsRequest, GetClientsProductsResponse } from "../interface/client/get-clients-products";
import { GetContactsRequest, GetContactsResponse } from "../interface/client/get-contacts";
import { GetEmailsRequest, GetEmailsResponse } from "../interface/client/get-emails";
import { UpdateClientRequest, UpdateClientResponse } from "../interface/client/update-client";
import { UpdateContactRequest, UpdateContactResponse } from "../interface/client/update-contact";

export class WhmcsClientService extends Module {
  
  public async addClient(options: AddClientRequest): Promise<AddClientResponse> {
    return this.request('AddClient', options);
  }

  public async addContact(options: AddContactRequest): Promise<AddContactResponse> {
    return this.request('AddContact', options);
  }

  public async closeClient(options: CloseClientRequest): Promise<CloseClientResponse> {
    return this.request('CloseClient', options);
  }

  public async deleteClient(options: DeleteClientRequest): Promise<DeleteClientResponse> {
    return this.request('DeleteClient', options);
  }

  public async deleteContact(options: DeleteContactRequest): Promise<DeleteContactResponse> {
    return this.request('DeleteContact', options);
  }

  public async getCancelledPackages(options: GetCancelledPackagesRequest): Promise<GetCancelledPackagesResponse> {
    return this.request('GetCancelledPackages', options);
  }

  public async getClientGroups(options: GetClientGroupsRequest): Promise<GetClientGroupsResponse> {
    return this.request('GetClientGroups', options);
  }

  public async getClientPassword(options: GetClientPasswordRequest): Promise<GetClientPasswordResponse> {
    return this.request('GetClientPassword', options);
  }

  public async getClients(options: GetClientsRequest): Promise<GetClientsResponse> {
    return this.request('GetClients', options);
  }

  public async getClientsAddons(options: GetClientsAddonsRequest): Promise<GetClientsAddonsResponse> {
    return this.request('GetClientsAddons', options);
  }

  public async getClientsDetails(options: GetClientsDetailsRequest): Promise<GetClientsDetailsResponse> {
    return this.request('GetClientsDetails', options);
  }

  public async getClientsDomains(options: GetClientsDomainsRequest): Promise<GetClientsDomainsResponse> {
    return this.request('GetClientsDomains', options);
  }

  public async getClientsProducts(options: GetClientsProductsRequest): Promise<GetClientsProductsResponse> {
    return this.request('GetClientsProducts', options);
  }

  public async getContacts(options: GetContactsRequest): Promise<GetContactsResponse> {
    return this.request('GetContacts', options);
  }

  public async getEmails(options: GetEmailsRequest): Promise<GetEmailsResponse> {
    return this.request('GetEmails', options);
  }

  public async updateClient(options: UpdateClientRequest): Promise<UpdateClientResponse> {
    return this.request('UpdateClient', options);
  }
  
  public async updateContact(options: UpdateContactRequest): Promise<UpdateContactResponse> {
    return this.request('UpdateContact', options);
  }

}