const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: 'https://uncle9.top',
      changeOrigin: true
    })
  );
  app.use(
    proxy("/v2", {
      target: "https://api.douban.com",
      changeOrigin: true
    })
  );

};