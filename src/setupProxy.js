const proxy = require('http-proxy-middleware');
const urlApi = require('../urlConfig');
console.log('122222222222222222222222222222',urlApi)
module.exports = function(app) {
  app.use(
    proxy("/api", {
      target:urlApi.myApi,
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