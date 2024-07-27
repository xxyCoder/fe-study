# 作用
- 与文件系统进行交互

# 方法
- 分为promise版本和回调版本，promise的没有cb参数和sync版本
1. readFile(path[, ops], cb)、readFileSync(path)
  - 异步/同步以ops.encoding的形式读取文件的全部内容
2. writeFile(path, data[, ops], cb)、writeFileSync(path, data)
  - 异步/同步写入数据到文件，如果文件存在则替换
3. appendFile(path, data[, ops], cb)、appendFileSync(path, data[, opts])
  - 异步/同步追加数据到文件，如果文件不存在则创建
4. mkdir(dirPath[, ops], cb)、mkdirSync(dirPath[, ops])
  - 异步/同步创建目录
  - ops.recursive表示递归创建子目录
5. readdir(dirPath[, ops], cb)
  - 读取目录的内容，ops.recursive表示递归读取
6. unlink(path, cb)
  - 删除软连接或者文件
7. copyFile(src, dest, cb)
  - 复制文件，如果dest已经存在则覆盖
8. rmdir(path[, ops], cb)
  - 删除空目录
9. rm(path[, ops], cb)
  - 异步删除目录和文件