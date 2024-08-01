# 命令
1. npm config
  - list 查看信息
  - set registry xxxx 设置镜像源
2. npm publish  发包


## npm install原理 
- 安装的依赖默认存放在根目录node_modules下，采用扁平化方式安装，其排序规则为 .bin > @开头 > 字母排序，使用广度优先遍历遍历依赖树
  - 存在无法扁平化情况，a和b都依赖c模块，但是各自c模块版本号不一致故而无法扁平化c，只能提升其中一个版本，仍然存在冗余现象
  - 由于提升，故存在幽灵依赖问题
1. npm install -> 查找config（npm config list）
2. config -> 项目级别 .npmrc -(如果不存在则)-> 用户级别 .npmrc -(如果不存在)-> 全局级别 .npmrc -(如果不存在)-> npm内置级别.npmrc
3. .npmrc -> 检查package-lock.json
  - 有 -> 对比package.json
    - 不一致，如果是npm高版本则根据package.json进行下载并更新package-lock.json
    - 一致，则检查缓存
      - 有缓存 -> 解压到node_modules
      - 没有缓存 -> 下载资源包 -> 检查完整性 -> 添加到缓存 -> 更新package-lock.json
  - 没有，则获取包信息，构建依赖树、扁平化 -> 检查缓存
