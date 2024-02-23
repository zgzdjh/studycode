const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
       test: /\.css$/,
       use: ['style-loader' , 'css-loader']
      },
      // 先执行
      {
        test: /\.imooc$/,
        use: [path.resolve(__dirname, './loader/imooc-loader.js')]
      }
    ]
  }
};