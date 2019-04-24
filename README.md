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











```
npm install --save-dev webpack # webpack
```