#! /usr/bin/env node
// 可以运行的脚本

const createServer = require('../index.js')

createServer().listen(5173, () => {
  console.log('server start 5173 port', "http://localhost:5173")
})