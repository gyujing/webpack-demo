1、导入 
```html
<script src="../src/main.js"></script>
```
index.html 报错 Uncaught SyntaxError: Cannot use import statement outside a module
改为
```html
<script src="../dist/main.js"></script>
```
# 安装依赖
  ```
  npm init 
  npm i webpack@5 webpack-cli@4 -D 
  ```

  1. 转化main.js,生成dist/main.js，生成模式没有压缩
  ```
  npx webpack ./src/main.js --mode=development 
  ```
  
  2. 压缩了js
  ```
  npx webpack ./src/main.js --mode=production
  ```
