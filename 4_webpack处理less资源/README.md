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
