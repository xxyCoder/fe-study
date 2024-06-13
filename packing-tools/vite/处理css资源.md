# CSS
- vite天生支持对css文件的解析
1. 发现import xxx.css文件，使用fs模块读取文件内容
2. 直接创建style标签，将xxx.css文件内容直接插入到style标签中
3. 将style插入index.html的head标签
4. 将css文件内容直接替换为js脚本（方便css热更新或者css模块化），同时设置Content-Type为JS，从而让浏览器以JS形式解析该文件

# 模块化
- module也是一个开箱即用的功能
1. 将类名根据规则进行替换
2. 创建一个映射对象 { 原始类名: 替换后类名 }
3. 将替换后的内容插入style标签中，然后将style标签插入head标签
4. 将xxx.module.css文件替换为JS脚本

# 预处理器
- vite本身对CSS的各种预处理器做了内置支持，但是为了实现按需加载，并没有内置这些工具库，需要手动安装