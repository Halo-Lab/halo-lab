const { createProxyMiddleware } = require('http-proxy-middleware');

const options = {
  target: 'https://www.halo-lab.com/',
  changeOrigin: true,
};

module.exports = function(app) {
  app.use('/api', createProxyMiddleware(options));
};
