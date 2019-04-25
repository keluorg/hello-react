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

> tips: export
>
> 使用引用文件内部变量只能使用 export 关键字输出，通过 export 方式导出，在导入时要加{ }，export default则不需要。

> tips: url带有#/
>
> 这样的 url 浏览器不会刷新当前页面，这种样式的url叫做`HashRouter`。另一种路由就是我们普通路由，叫`BrowserRouter`。
>
> HashRouter最简单，不需要服务器端渲染，服务器端无论对任何URL请求都返回一模一样的HTML就好，靠浏览器的`#` 来区分path就好；BrowseRouter稍微复杂一点，因为要求服务器端对不同URL返回不同的HTML。
>
> 相关区别看这里: <https://stackoverflow.com/questions/51974369/hashrouter-vs-browserrouter>

## Webpack Loader

[Babel](https://babeljs.io/)是一个广泛使用的转码器，可以将ES6代码转为ES5代码。要使用 webpack 编译 JSX，先安装对应的 loader。

目前为止不用使用这么多loader，不过我接下来会使用sass和eslint，所以在这一步统一安装了。

```
npm i babel-core babel-loader babel-preset-env babel-preset-react css-loader sass-loader style-loader url-loader eslint-loader -D
```

## webpack

webpack提取原始的React组件，用于生成（几乎）每个浏览器都能理解的JavaScript代码。

官方参考看这里，<https://www.webpackjs.com/guides/>

```bash
npm install webpack -g
npm install webpack-cli -g
npm install webpack-dev-server -g

webpack
webpack-dev-server
# 访问 http://localhost:8080/build/index.html
```



webpack.config.js:

```js
var path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/webpack-hello.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'images/', // 图片输出的路径
                        limit: 10 * 1024 // <10kb 使用base64
                    }
                }
            }
        ]
    }
}
```



