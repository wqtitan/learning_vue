/**
 * webpack的配置文件
 * 作用: 指示webpack干哪些活  当运行webpack指令时，会加载里面的配置
 * 所有构建工具都是基于nodejs平台运行的，模块化采用commonjs，module.exports
 *
 */
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  // webpack配置 5个核心
  entry: "./src/index.js",
  output: {
    filename: "built.js",
    path: resolve(__dirname, "build"),
  },
  //loader的配置
  module: {
    rules: [
      // 详细loader配置
      // 不同文件需配置不同loader
      {
        // 匹配哪些文件
        test: /\.css$/,
        // 使用哪些loader进行处理
        use: [
          // use数组中loader执行顺序：从右到左，从下到上 依次执行
          // 创建style标签，将js中的样式资源插入进去，添加到head中生效
          "style-loader",
          // 讲css文件变成commonjs模块加载到js中，里面的内容是样式字符串
          "css-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          // 将less文件编译成css文件，需要下载less-loader和less
          "less-loader",
        ],
      },
    ],
  },
  //plugins的配置
  plugins: [
    // 详细plugins配置
    // html-webpack-plugin
    // 功能: 默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
    // 使用template复制HTML
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: "development",
  // mode: "production",
};
