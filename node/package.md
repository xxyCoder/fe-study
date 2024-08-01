# package.json
1. version: x.x.x
  - 主版本号：有重大更新
  - 次版本号：有功能更新，^允许次版本号不定
  - 修订号：有bug修复，~允许修订号不定
2. main：指定入口文件
  - 如果代码中使用了require('my-module')，npm会找到main字段的指定文件来执行相关操作
3. type：指定模块的代码类型
  - 默认是"commonJS"，可设置为"module"
4. module：提供使用ESM语法的入口文件
5. browser：指定在浏览器环境中使用的特定文件或模块映射
  - 服务端可能依赖一些特定库，但是浏览器需要使用不同的实现，可以通过该字段来指定浏览器端的代替文件
6. script：脚本，使用npm run 运行
7. devDependencies：开发环境需要的依赖，使用npm i -D安装在此处
8. dependencies：生产环境需要的依赖，
9. peerDependencies：前置依赖
  - 给开发插件或者包的人员使用，指定dependencies某项依赖的所需要包的版本

# package-lock.json
- 解决依赖不幂等的问题，其精确描述了node_modules树下所有包的树状依赖结构，确保不同机器npm i得到的依赖树一致