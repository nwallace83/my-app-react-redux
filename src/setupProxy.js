const createProxyMiddleware = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://xkcd.com/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    })
  );
};