const Koa = require('koa');
const fs = require('fs')
const { serveStaticPlugin } = require('./plugins/serverPluginServeStatic.js')
const { moduleRewritePlugin } = require('./plugins/serverPluginModuleRewrite.js')
const { moduleResolvePlugin } = require('./plugins/serverPluginModuleResolve.js');
const path = require('path');

function createServer() {
  const app = new Koa();

  const context = {
    app,
    root: process.cwd()
  }

  const resolvedPlugins = [
    // 2) 实现解析 import 语法，进行重写，因为浏览器只能识别以/、./、../开头的文件
    moduleRewritePlugin,
    // 3) 解析以/@modules开头的文件
    moduleResolvePlugin,
    // 1) 实现静态服务功能
    serveStaticPlugin
  ];
  resolvedPlugins.forEach(plugin => plugin(context));

  return app;
}


module.exports = createServer;