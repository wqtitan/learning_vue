/*
  index.js  webpack入口起点文件
  1. 运行指令
    开发环境  webpack ./src/index.js -o ./build/built.js --mode=development
    生产环境  webpack ./src/index.js -o ./build/built.js --mode=production
  2. webpack可以处理js/json资源，不能处理其他资源。
     可以将ES6模块化编译成浏览器能够识别的模块化。
     生产环境比开发环境多一步压缩js代码。
  3. webpack.config.js 文件
*/
import "./index.css";
import "./index.less";
import data from "./data.json";
console.log(data);

function add(x, y) {
  return x + y;
}

console.log(add(1, 2));
