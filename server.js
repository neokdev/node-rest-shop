const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

http.createServer(app.callback()).listen(port, () => console.log(`http://localhost:${port}`));