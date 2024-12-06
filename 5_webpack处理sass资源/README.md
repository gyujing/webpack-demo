
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
