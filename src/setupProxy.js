const createProxyMiddleware = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3001/',
      changeOrigin: true,
    })
  );

  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'http://localhost:3001/',
      changeOrigin: true,
    })
  );

  app.use(
    '/admin',
    createProxyMiddleware({
      target: 'http://localhost:3001/',
      changeOrigin: true,
    })
  );
};