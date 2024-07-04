const path = require('path')

const fs = require('fs').promises
const moduleReg = /^\/@modules\//

function resolveVue(root) {}

function moduleResolvePlugin({ app, root }) {
  const vueResolved = resolveVue(root)
  app.use(async (ctx, next) => {
    if (!moduleReg.test(ctx.path)) {
      return next()
    }

    // 替换@modules
    const id = ctx.path.replace(moduleReg, '')
    ctx.type = 'js'
    const content = await fs.readFile(vueResolved[id], 'utf8')
    ctx.body = content
  })
}

exports.moduleResolvePlugin = moduleResolvePlugin