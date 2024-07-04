const { readBody } = require("./utils")
const { parse } = require('es-module-lexer')
const MagicString = require('magic-string')

function rewriteImports(source) {  // 重写import
  const imports = parse(source)[0]

  if (imports.length) {
    const magicString = new MagicString(source)
    for (let i = 0; i < imports.length; ++i) {
      const { s, e } = imports[i];
      const id = source.substring(s, e);
      if (/^[^\.\/]/.test(id)) { // 将第三方模块的前缀添加@modules，后续浏览器请求该文件时进行拦截
        magicString.overwrite(s, e, `/@modules/${id}`)
      }
    }

    return magicString.toString()
  }
}

function moduleRewritePlugin({ app, root }) {
  app.use(async (ctx, next) => {
    await next()
    if (ctx.body && ctx.response.is('js')) {
      const content = await readBody(ctx.body)
      ctx.body = rewriteImports(content)
    }
  })
}

exports.moduleRewritePlugin = moduleRewritePlugin