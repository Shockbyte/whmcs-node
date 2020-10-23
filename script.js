const output = "E:/Development/Shockbyte/whmcs-node/src/interface";

const methods = [
  {
    category: "orders",
    methods: [
      "AcceptOrder",
      "AddOrder",
      "CancelOrder",
      "DeleteOrder",
      "FraudOrder",
      "GetOrders",
      "GetOrderStatuses",
      "GetProducts",
      "GetPromotions",
      "OrderFraudCheck",
      "PendingOrder",
    ],
  },
  {
    category: "billing",
    methods: [
      "AcceptQuote",
      "AddBillableItem",
      "AddCredit",
      "AddInvoicePayment",
      "AddPayMethod",
      "AddTransaction",
      "ApplyCredit",
      "CapturePayment",
      "CreateInvoice",
      "CreateQuote",
      "DeletePayMethod",
      "DeleteQuote",
      "GenInvoices",
      "GetCredits",
      "GetInvoice",
      "GetInvoices",
      "GetPayMethods",
      "GetQuotes",
      "GetTransactions",
      "SendQuote",
      "UpdateInvoice",
      "UpdatePayMethod",
      "UpdateQuote",
      "UpdateTransaction",
    ],
  },
  {
    category: "module",
    methods: [
      "ActivateModule",
      "DeactivateModule",
      "GetModuleConfigurationParameters",
      "GetModuleQueue",
      "UpdateModuleConfiguration",
    ],
  },
  {
    category: "support",
    methods: [
      "AddAnnouncement",
      "AddCancelRequest",
      "AddClientNote",
      "AddTicketNote",
      "AddTicketReply",
      "BlockTicketSender",
      "DeleteAnnouncement",
      "DeleteTicket",
      "DeleteTicketNote",
      "DeleteTicketReply",
      "GetAnnouncements",
      "MergeTicket",
      "OpenTicket",
      "UpdateTicket",
      "UpdateTicketReply",
    ],
  },
  {
    category: "system",
    methods: [
      "AddBannedIp",
      "DecryptPassword",
      "EncryptPassword",
      "GetActivityLog",
      "GetAdminDetails",
      "GetAdminUsers",
      "GetAutomationLog",
      "GetConfigurationValue",
      "GetCurrencies",
      "GetEmailTemplates",
      "GetPaymentMethods",
      "GetStaffOnline",
      "GetStats",
      "GetToDoItems",
      "GetToDoItemStatuses",
      "LogActivity",
      "SendAdminEmail",
      "SendEmail",
      "SetConfigurationValue",
      "TriggerNotificationEvent",
      "UpdateAdminNotes",
      "UpdateAnnouncement",
      "UpdateToDoItem",
      "WhmcsDetails",
    ],
  },
  {
    category: "client",
    methods: [
      "AddClient",
      "AddContact",
      "CloseClient",
      "DeleteClient",
      "DeleteContact",
      "GetCancelledPackages",
      "GetClientGroups",
      "GetClientPassword",
      "GetClients",
      "GetClientsAddons",
      "GetClientsDetails",
      "GetClientsDomains",
      "GetClientsProducts",
      "GetContacts",
      "GetEmails",
      "UpdateClient",
      "UpdateContact",
    ],
  },
  {
    category: "products",
    methods: ["AddProduct"],
  },
  {
    category: "project-management",
    methods: [
      "AddProjectMessage",
      "AddProjectTask",
      "CreateProject",
      "DeleteProjectTask",
      "EndTaskTimer",
      "GetProject",
      "GetProjects",
      "StartTaskTimer",
      "UpdateProject",
      "UpdateProjectTask",
    ],
  },
  {
    category: "users",
    methods: [
      "AddUser",
      "CreateClientInvite",
      "DeleteUserClient",
      "GetPermissionsList",
      "GetUserPermissions",
      "ResetPassword",
      "UpdateUser",
      "UpdateUserPermissions",
    ],
  },
  {
    category: "affiliates",
    methods: ["AffiliateActivate", "GetAffiliates"],
  },
  {
    category: "authentication",
    methods: [
      "CreateOAuthCredential",
      "CreateSsoToken",
      "DeleteOAuthCredential",
      "ListOAuthCredentials",
      "UpdateOAuthCredential",
      "ValidateLogin",
    ],
  },
  {
    category: "domains",
    methods: [
      "CreateOrUpdateTLD",
      "DomainGetLockingStatus",
      "DomainGetNameservers",
      "DomainGetWhoisInfo",
      "DomainRegister",
      "DomainRelease",
      "DomainRenew",
      "DomainRequestEPP",
      "DomainToggleIdProtect",
      "DomainTransfer",
      "DomainUpdateLockingStatus",
      "DomainUpdateNameservers",
      "DomainUpdateWhoisInfo",
      "DomainWhois",
      "GetTLDPricing",
      "UpdateClientDomain",
    ],
  },
  {
    category: "servers",
    methods: ["GetHealthStatus", "GetServers"],
  },
  {
    category: "tickets",
    methods: [
      "GetSupportDepartments",
      "GetSupportStatuses",
      "GetTicket",
      "GetTicketAttachment",
      "GetTicketCounts",
      "GetTicketNotes",
      "GetTicketPredefinedCats",
      "GetTicketPredefinedReplies",
      "GetTickets",
    ],
  },
  {
    category: "service",
    methods: [
      "ModuleChangePackage",
      "ModuleChangePw",
      "ModuleCreate",
      "ModuleCustom",
      "ModuleSuspend",
      "ModuleTerminate",
      "ModuleUnsuspend",
      "UpdateClientProduct",
      "UpgradeProduct",
    ],
  },
  {
    category: "addons",
    methods: ["UpdateClientAddon"],
  },
];

var fs = require("fs");

methods.forEach((value) => {
  const path = `${output}/${value.category}`;
  fs.mkdir(path, () => {
    console.log(`CREATED PATH > ${value.category}`);
  });

  value.methods.forEach((methodName) => {
    const fileName =
      methodName
        .split(/(?=[A-Z])/)
        .join("-")
        .toLowerCase() + ".ts";

    const contents = `export interface ${methodName}Request {

}

export interface ${methodName}Response {

}
`;

    fs.writeFile(`${path}/${fileName}`, contents, function (err) {
      if (err) throw err;
      console.log(`SAVED FILE > ${methodName}`);
    });
  });
});
