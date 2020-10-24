import { CreateOrUpdateTLDRequest, CreateOrUpdateTLDResponse } from "../interface/domains/create-or-update-tld";
import { DomainGetLockingStatusRequest, DomainGetLockingStatusResponse } from "../interface/domains/domain-get-locking-status";
import { DomainGetNameserversRequest, DomainGetNameserversResponse } from "../interface/domains/domain-get-nameservers";
import { DomainGetWhoisInfoRequest, DomainGetWhoisInfoResponse } from "../interface/domains/domain-get-whois-info";
import { DomainRegisterRequest, DomainRegisterResponse } from "../interface/domains/domain-register";
import { DomainReleaseRequest, DomainReleaseResponse } from "../interface/domains/domain-release";
import { DomainRenewRequest, DomainRenewResponse } from "../interface/domains/domain-renew";
import { DomainRequestEPPRequest, DomainRequestEPPResponse } from "../interface/domains/domain-request-e-p-p";
import { DomainToggleIdProtectRequest, DomainToggleIdProtectResponse } from "../interface/domains/domain-toggle-id-protect";
import { DomainTransferRequest, DomainTransferResponse } from "../interface/domains/domain-transfer";
import { DomainUpdateLockingStatusRequest, DomainUpdateLockingStatusResponse } from "../interface/domains/domain-update-locking-status";
import { DomainUpdateNameserversRequest, DomainUpdateNameserversResponse } from "../interface/domains/domain-update-nameservers";
import { DomainUpdateWhoisInfoRequest, DomainUpdateWhoisInfoResponse } from "../interface/domains/domain-update-whois-info";
import { DomainWhoisRequest, DomainWhoisResponse } from "../interface/domains/domain-whois";
import { GetTLDPricingRequest, GetTLDPricingResponse } from "../interface/domains/get-tld-pricing";
import { UpdateClientDomainRequest, UpdateClientDomainResponse } from "../interface/domains/update-client-domain";
import { BaseModule } from "./base";

export class WhmcsDomainsService extends BaseModule {

  public async createOrUpdateTLD(options: CreateOrUpdateTLDRequest): Promise<CreateOrUpdateTLDResponse> {
    return this.request('CreateOrUpdateTLD', options);
  }

  public async domainGetLockingStatus(options: DomainGetLockingStatusRequest): Promise<DomainGetLockingStatusResponse> {
    return this.request('DomainGetLockingStatus', options);
  }

  public async domainGetNameservers(options: DomainGetNameserversRequest): Promise<DomainGetNameserversResponse> {
    return this.request('DomainGetNameservers', options);
  }

  public async domainGetWhoisInfo(options: DomainGetWhoisInfoRequest): Promise<DomainGetWhoisInfoResponse> {
    return this.request('DomainGetWhoisInfo', options);
  }

  public async domainRegister(options: DomainRegisterRequest): Promise<DomainRegisterResponse> {
    return this.request('DomainRegister', options);
  }

  public async domainRelease(options: DomainReleaseRequest): Promise<DomainReleaseResponse> {
    return this.request('DomainRelease', options);
  }

  public async domainRenew(options: DomainRenewRequest): Promise<DomainRenewResponse> {
    return this.request('DomainRenew', options);
  }

  public async domainRequestEPP(options: DomainRequestEPPRequest): Promise<DomainRequestEPPResponse> {
    return this.request('DomainRequestEPP', options);
  }

  public async domainToggleIdProtect(options: DomainToggleIdProtectRequest): Promise<DomainToggleIdProtectResponse> {
    return this.request('DomainToggleIdProtect', options);
  }

  public async domainTransfer(options: DomainTransferRequest): Promise<DomainTransferResponse> {
    return this.request('DomainTransfer', options);
  }

  public async domainUpdateLockingStatus(options: DomainUpdateLockingStatusRequest): Promise<DomainUpdateLockingStatusResponse> {
    return this.request('DomainUpdateLockingStatus', options);
  }

  public async domainUpdateNameservers(options: DomainUpdateNameserversRequest): Promise<DomainUpdateNameserversResponse> {
    return this.request('DomainUpdateNameservers', options);
  }

  public async domainUpdateWhoisInfo(options: DomainUpdateWhoisInfoRequest): Promise<DomainUpdateWhoisInfoResponse> {
    return this.request('DomainUpdateWhoisInfo', options);
  }

  public async domainWhois(options: DomainWhoisRequest): Promise<DomainWhoisResponse> {
    return this.request('DomainWhois', options);
  }

  public async getTLDPricing(options: GetTLDPricingRequest): Promise<GetTLDPricingResponse> {
    return this.request('GetTLDPricing', options);
  }

  public async updateClientDomain(options: UpdateClientDomainRequest): Promise<UpdateClientDomainResponse> {
    return this.request('UpdateClientDomain', options);
  }

}