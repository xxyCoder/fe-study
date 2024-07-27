# 作用
- 提供了用于处理文件和目录的路径的工具

# 方法
1. basename(path[, suffix])
  - path为文件路径，suffix表示要删除的可选后缀，返回path的最后一部分（忽略末尾的斜杠，截取到最后一个斜杠）
2. dirname(path)
  - 返回目录名
3. extname(path)
  - 返回basename的扩展名
4. isAbsolute(path)
  - 判断是否为绝对路径
5. join([...paths])
  - 用特定于平台的分隔符作为定界符将所有给定的path连接在一起，生成规范路径（path可以使用相对路径和..、.）,开头不带/则补充盘符
6. relative(from, to)
  - 根据当前工作目录，返回from到to的相对路径
7. resolve([...paths])
  - 将路径或路径片段的序列解析为绝对路径，处理完所有的path还没生成绝对路径则使用当前工作目录
  - 遇到一个绝对路径则抛弃前面所构建的，使用当前path作为开始继续构建