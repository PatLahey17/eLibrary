// needed this file for supratest and jest testing
const app = require('./server.js')

const port = 3030;
// default port is 3000, react uses 3000 by default, backend will be 3002
/* port already in use, need to change port*/

app.listen(port, () => {
  console.log(`Now listening on port ${port}.`)
});