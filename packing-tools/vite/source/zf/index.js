const Koa = require('koa');
const { serveStaticPlugin } = require('./plugins/serverPluginServeStatic.js')

function createServer() {
  const app = new Koa();

  const context = {
    app,
    root: process.cwd()
  }

  const resolvedPlugins = [
    // 2) 实现解析 import 语法，进行重写
    
    // 1) 实现静态服务功能
    serveStaticPlugin
  ];
  resolvedPlugins.forEach(plugin => plugin(context));

  return app;
}


module.exports = createServer;