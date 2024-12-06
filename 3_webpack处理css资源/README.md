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
