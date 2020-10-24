# whmcs-node

A Typescript/Javascript API wrapper for WHMCS.

## Example use

`npm i whmcs-node`

```js
// typescript
import 'WhmcsApi' from 'whmcs-node';

// javascript
const WhmcsApi = require('whmcs-node')

const whmcs = new WhmcsApi({
  identifier: "",
  secret: "",
  apiUrl: "https://example.com/billing/includes/api.php"
});

whmcs.tickets.getTicketCounts({})
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
```
