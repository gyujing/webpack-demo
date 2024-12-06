const path = require("path");//nodejs核心模块，专门用来处理路径问题
module.exports = {
  // 入口
  entry: "./src/main.js",
  // 输出
  output: {
    // 文件的输出路径
    path: path.resolve(__dirname, "dist"),
    // 文件名
    filename: "main.js"
  },
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
      {
        test: /\.less$/i, //只检测.less文件
        use: [
          // 执行顺序，从右到左(从下到上)
          'style-loader', //将js中css通过创建style标签添加html文件中生效
          'css-loader', //将css资源编译成commonjs的模块到js中
          'less-loader' //将less编译成为css
        ],
      },
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
  // 插件
  plugins:[
    // plugin的配置
  ],
  // 模式
  mode:"development"
}
