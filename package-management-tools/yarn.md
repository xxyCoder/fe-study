# 产生原因和作用
- 出现是为了解决npm的问题
  1. 性能提升，安装依赖时通过并行安装和离线缓存（下载之后缓存，离线也可以加载）加速
  2. 引入了yarn.lock文件，确保了依赖一致性问题
  3. yarn安装时会检查每个包的许可证，增强项目安全性

# 用法
1. yarn init 初始化项目
2. yarn install 或 yarn 安装所有依赖
3. yarn add [package]@[version]
  - --dev 安装到 dependencies
  - --peer 安装到 peer dependencies
4. yarn upgrade [package]@[version] 更新依赖
5. yarn remove [package] 删除依赖
6. yarn set version [new_version] 更新yarn本体
7. yarn publish 发布包
8. yarn run <script> 运行脚本
9. yarn workspace <workspace_name> <command>

# 特性

## pnp
1. 产生原因
  - 递归查找包效率低下
  - 生成node_modules是IO密集，读写开销大
2. 原理
  - 生成一个单独的.pnp.cjs文件，将包名和版本与它们在磁盘上的位置链接起来，由yarn告知node在哪里查找包
3. 用法
  - yarn --pnp

### 宽松模式
1. 产生原因
  - 严格模式下，pnp会阻止包依赖访问哪些未在其依赖列表中明确列出的依赖项，而宽松模式则允许
2. 原理
  - pnp链接器与node_modules提升器协同工作，首先会生成一个在node_modules安装中会被提升到顶级的包列表，该列表称为回退池
3. 缺点
  - 没有yarn.lock文件，回退池的依赖项不确定

## workspaces
1. 产生原因
  - 为了解决使用monorepo管理多个项目时的依赖管理问题，多个项目共享同一个代码库，并且可能相互依赖，传统的依赖管理方式可能会导致依赖重复安装、版本冲突等问题
2. 用法
  - package.json中添加workspaces字段

## 离线缓存
1. 原理
  - 下载后，都会在缓存中保留一份副本，下次安装相同的软件包时，Yarn直接使用缓存中存储的版本