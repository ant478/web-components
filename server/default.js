const fs = require('fs');
const path = require('path');
const express = require('express');
const https = require('https');
const compression = require('compression');

const app = express();
const port = 4780;
const publicPath = path.join(__dirname, '..', 'build');

app.use(compression());

app.use(express.static(publicPath, {
  setHeaders(res, filePath) {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0');
      return;
    }

    if (filePath.includes('favicon')) {
      res.setHeader('Cache-Control', 'public, max-age=86400');
      return;
    }

    res.setHeader('Cache-Control', 'public, max-age=31536000');
  }
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const privateKey = fs.readFileSync('sslcert/key.pem', 'utf8');
const certificate = fs.readFileSync('sslcert/cert.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up on port ${port}!`);
});
