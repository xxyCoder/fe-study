# notFound
- 该函数调用抛出NEXT_NOT_FOUND错误，终止路由段的渲染

# useParams
- 客户端的hook，读取当前url的动态参数

# usePathname
- 客户端hook，用于读取当前url的pathname

# useSearchParams
- 客户端hook，读取当前url的只读查询字符串

# fetch
- 扩展了原生fetch
1. cache配置数据缓存
2. next.revalidate设置资源缓存时间，对于一个路由下相同url的fetch，使用revalidate值较低的
  - 无需配置cache，否则有冲突并报错
3. next.tags设置资源缓存的标签

# cookies
1. 在服务端读取传入请求的cookie，在server action或者路由处理程序中写入返回请求的cookie
2. 使用该函数会将页面或布局改为动态渲染

# headers
1. 从服务端组件读取传入的http请求，其拓展了原生headers api，只读无法修改
2. 使用该函数会将页面或布局改为动态渲染

# NextRequest
- 扩展了原生request api
1. cookies用于获取和修改请求cookie
2. nextUrl拓展了原生url，可拿到pathname和searchParams

# NextResponse
- 扩展了原生response api
1. cookies用于获取和修改响应cookie
2. json生成响应
3. redirect()重定向到新url
4. rewrite()保留原始url，重写到指定url的响应
5. next()用在中间件，提前返回并继续路由