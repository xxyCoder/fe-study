const static = require('koa-static')
const path = require('path')

function serveStaticPlugin({ app, root }) {
  // 根目录和public目录作为静态服务
  app.use(static(root))
  app.use(static(path.join(root, 'public')))
}

exports.serveStaticPlugin = serveStaticPlugin;