const input = `


| action | string | "UpdateClientDomain" | Required |
| domainid | int | The ID of the client domain to update. | Required |
| dnsmanagement | bool | Whether to enable or disable DNS management. | Optional |
| emailforwarding | bool | Whether to enable or disable Email forwarding. | Optional |
| idprotection | bool | Whether to enable or disable ID protection. | Optional |
| donotrenew | bool | Whether to prevent renewal. | Optional |
| type | string | The type of domain order ('Register' or 'Transfer'). | Optional |
| regdate | string | The registration date of the domain. Format: Y-m-d | Optional |
| nextduedate | string | The next due date of the domain. Format: Y-m-d | Optional |
| expirydate | string | The expiration date of the domain. Format: Y-m-d | Optional |
| domain | string | The domain name to be changed to. | Optional |
| firstpaymentamount | float | The first payment amount on the domain. | Optional |
| recurringamount | float | The recurring amount for automatic renewal invoices. | Optional |
| registrar | string | The registrar to associate with the domain. | Optional |
| regperiod | int | The registration period of the domain. | Optional |
| paymentmethod | string | The payment method to associate in system format (for example, paypal). | Optional |
| subscriptionid | string | The subscription ID to associate with the domain. | Optional |
| status | string | The status to change the domain to. | Optional |
| notes | string | The admin notes for the domain. | Optional |
| promoid | int | The promotion ID to associate. | Optional |
| autorecalc | bool | Whether to recalculate the recurring amount of the domain (this will ignore any passed $recurringamount). | Optional |
| updatens | bool | Whether to update the nameservers at the registrar. | Optional |
| ns1 | string | The first nameserver to save. | Optional |
| ns2 | string | The second nameserver to save. | Optional |
| ns3 | string | The third nameserver to save. | Optional |
| ns4 | string | The fourth nameserver to save. | Optional |
| ns5 | string | The fifth nameserver to save. | Optional |



`;

const lines = input.split(/\r?\n/);
let results = "";
lines.forEach((line) => {
  if (line == "") return;
  const splitted = line.split("|");
  const field = splitted[1].trim();
  let type = getType(splitted[2].trim());
  const optional = splitted[4].trim() === "Optional" ? true : false;

  results += `${field}${optional ? "?" : ""}: ${type};\n`;
});

function getType(keyword) {
  switch (keyword) {
    case "string":
      return keyword;
    case "array":
      return "[]";
    case "int":
      return "number";
    case "bool":
      return "boolean";
    default:
      return "any";
  }
}

console.log(results);
