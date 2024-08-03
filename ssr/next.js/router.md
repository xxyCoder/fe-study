# 路由
- next的路由基于文件系统，一个文件就可以是一个路由

## page router
1. 在pages目录下创建的文件（js、ts、jsx、tsx）都被视为目录

## app router
1. v13开始的新路由模式，可与pages router共存，但app router优先级更高
2. 文件夹用来定义路由，其文件夹下的page.{js,ts,jsx,tsx}展示路由界面

### app layout
1. 路由文件夹下创建layout.{js,ts,jsx,tsx}文件，该文件默认导出一个React组件，接受children prop（为子布局、页面或者模板）
  - 布局支持嵌套，其children即可说明
2. 根布局（最顶层，即app/layout.{js,ts,jsx,tsx}），必需，且需要包含html和body标签（其他布局不能包含），不能设置为客户端组件

### app template
1. 路由文件夹下创建template.{js,ts,jsx,tsx}，类似layout，接受children prop（子布局或者页面），区别在于不会保持状态
  - 不保持状态是指在共享同一个template的路由下，切换路由，template的数据状态不保持，切换则变为初始数据

### app error
1. 路由文件夹下创建error.{js,ts,jsx,tsx}，用来展示发生错误时的UI，其借助了React的Error Boundary功能，将page文件或者<Suspense>使用<ErrorBoundary>包裹，fallback指定为error文件
2. 同级的page和template无法捕获，需要父级的error处理，而根布局和根页面则需要global-error文件处理，该文件也需要定义html和body标签

### app loading
1. 路由文件夹下创建loading.{js,ts,jsx,tsx}，借助React的Suspense实现，将page文件用<Suspense>包裹，fallback指定为loading文件

### app not-found
1. 路由文件夹下创建not-found.{js,ts,jsx,tsx}，当该路由不存在的时展示内容
2. app目录下的not-found文件可替换默认not-found的UI，其由路由路径不匹配或者组件抛出notFound函数触发
  - notFound函数由最近的not-found文件捕获处理
3. app目录下的其他子目录的not-found只能由notFound函数触发