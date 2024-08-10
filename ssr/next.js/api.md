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

# generateStaticParams
1. 和动态路由一起使用，用于构建时静态生成路由
2. 在page文件中导出具名函数
3. 在dev中，只有导航到当前页面才会被调用；在build中，会在对应的布局或者页面生成之前运行
4. 该函数接受一个options.params参数，该参数是父generateStaticParams返回的params；该函数的返回值为对象数组，其中每个对象表示单个路由的填充动态段

# revalidatePath
1. 按需清空特定路径上的缓存数据，即使调用多次也不会触发多次，只有当下次访问的时候才会重新获取数据并更新缓存
2. 接受两个参数，一个是path，一个是类型：page或者layout

# revalidateTag
1. 用于按需清空特定标签的缓存数据

# useSelectedLayoutSegment
1. 客户端Hook，用于读取比调用方法所在布局的低一级的激活路由段
2. 接受一个参数用于读取平行路由中的激活路由段

# useSelectedLayoutSegments
1. 返回的是布局下所有的激活路由段

# getStaticProps
1. 在page文件中导出，会在构建的时候调用，并将数据通过props传递给页面

# getServerSideProps
1. page中有该方法，将切换为ssr模式，否则预渲染为静态html文件
2. 在每次请求的时候被调用，返回的数据通过Props传递给组件