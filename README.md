# 基本使用
  ## 安装依赖
  ```
  npm init 
  npm i webpack@5 webpack-cli@4 -D 
  ```
  ## 命令

  1. 转化main.js,生成dist/main.js，生成模式没有压缩
  ```
  npx webpack ./src/main.js --mode=development 
  ```
  2. 压缩了js
  ```
  npx webpack ./src/main.js --mode=production
  ```

# 配置文件 webpack.config.js
  有了配置，直接命令
  ```
  npx webpack
  ```
# 解析css文件
 ```
 npm install --save-dev css-loader style-loader
 ```

```js
  // 加载器
  module:{
    rules: [
      // loader的配置
      {
        test: /\.css$/i, //只检测.css文件
        use: [
          // 执行顺序，从右到左(从下到上)
          'style-loader', //将js中css通过创建style标签添加html文件中生效
          'css-loader' //将css资源编译成commonjs的模块到js中
        ],
      },
    ],
  },
```
## 实现
入口mian.js中必须引入css文件


# 解析less文件
```
npm install --save-dev less-loader css-loader style-loader
```

```js
  module:{
    rules: [
      // loader的配置
      {
        test: /\.less$/i, //只检测.less文件
        use: [
          // 执行顺序，从右到左(从下到上)
          'style-loader', //将js中css通过创建style标签添加html文件中生效
          'css-loader', //将css资源编译成commonjs的模块到js中
          'less-loader' //将less编译成为css
        ],
      },
    ],
  },
```

# 解析scss和sass资源
```
npm install sass-loader sass webpack --save-dev
```
```js
  // 加载器
  module:{
    rules: [
      // loader的配置
      {
        test: /\.s[ac]ss$/i, //只检测.less文件
        use: [
          // 执行顺序，从右到左(从下到上)
          'style-loader', // 将 JS 字符串生成为 style 节点，添加html文件中生效
          'css-loader', // 将 CSS 转化成 CommonJS 模块
          'sass-loader' // 将 Sass 编译成 CSS
        ],
      },
    ],
  },
```
