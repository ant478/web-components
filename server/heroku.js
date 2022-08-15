const path = require('path');
const express = require('express');
const sslRedirect = require('heroku-ssl-redirect').default;
const compression = require('compression');

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'build');

app.use(compression());
app.use(sslRedirect());

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

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up on port ${port}!`);
});
