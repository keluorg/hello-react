# 从零开始学前端

我学习前端的第一步是将中文官网的[文档和教程](https://zh-hans.reactjs.org/docs/getting-started.html)走了一遍。代码可参考master分支。

这个分支会把我所有的命令操作记录下来。

```
npm config set registry https://registry.npm.taobao.org/ # 注意最后斜杠要带上

npx create-react-app . # 当前目录创建react项目
npm start # 运行本地环境 localhost:3000
```

### react-router和react-router-dom的区别

<https://reacttraining.com/react-router/web/guides/quick-start>

`react-router`: 实现了路由的核心功能
`react-router-dom`: 基于`react-router`，加入了在浏览器运行环境下的一些功能，例如：

* `Link`组件，会渲染一个`a`标签; 
* `BrowserRouter`和`HashRouter `组件，前者使用`pushState`和`popState`事件构建路由，后者使用`window.location.hash`和`hashchange`事件构建路由。

```
npm install xxx --save # save省掉手动修改package.json文件的步骤。
npm install react-router-dom --save-dev
```

### export

使用引用文件内部变量只能使用 export 关键字输出，通过 export 方式导出，在导入时要加{ }，export default则不需要。

### url带有#/

这样的 url 浏览器不会刷新当前页面，这种样式的url叫做`HashRouter`。另一种路由就是我们普通路由，叫`BrowserRouter`。

HashRouter最简单，不需要服务器端渲染，服务器端无论对任何URL请求都返回一模一样的HTML就好，靠浏览器的`#` 来区分path就好；BrowseRouter稍微复杂一点，因为要求服务器端对不同URL返回不同的HTML。

相关区别看这里: <https://stackoverflow.com/questions/51974369/hashrouter-vs-browserrouter>

## webpack

webpack提取原始的React组件，用于生成（几乎）每个浏览器都能理解的JavaScript代码。

```
npm install --save-dev webpack # webpack
npm install --save-dev webpack-cli
```

### babel是什么

[Babel](https://babeljs.io/)是一个广泛使用的转码器，可以将ES6代码转为ES5代码。

