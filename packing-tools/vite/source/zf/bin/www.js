#! /usr/bin/env node
// 可以运行的脚本

const createServer = require('../index.js')

createServer().listen(3750, () => {
  console.log('server start 3750 port', "http://localhost:3750")
})