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
// 全部JS兼容性处理→ @babel/polyfill
// import "@babel/polyfill";
import "./css/index.css";
import "./iconfont/iconfont.css";
import "./css/index.less";
import data from "./data.json";
console.log(data);

function add(x, y) {
  return x + y;
}
const a = 1;
const b = 2;
console.log(add(a, b));

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log("定时器执行完毕");
    resolve();
  }, 1000);
});

console.log(promise);
