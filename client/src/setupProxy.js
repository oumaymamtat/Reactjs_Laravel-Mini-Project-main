const proxy = require('http-proxy-middleware');
module.exports = function(index) {
  index.use(
    '/api',
    proxy({
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
  );
};