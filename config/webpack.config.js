const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.module\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                mode: 'local',
                localIdentName: "[local]_[hash:base64:5]",
              },
              esModule: true,
            }
          },
          'less-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                 mode: 'icss',
              },
            }
          },
          'less-loader'
        ],
        exclude: /(node_modules|\.module\.less$)/,
      },
      // {
      //   test: /\.(png|jpg|svg|jpeg|gif)$/,
      //   loader: 'file-loader',
      //   options: {
      //      name: 'img/[name].[hash:8].[ext]'
      //   },
      //   type: 'javascript/auto'
      // },
      {
        test: /\.(png|jpg|svg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
           filename: 'img/[name].[hash:8][ext]'
        }
      }
    ]
  },
  plugins:[
    new HTMLPlugin({template: 'public/index.html'}),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias:{
      '@': path.resolve(__dirname, '../src'),
    }
  },
  devServer:{
    port: 9000,
    hot: true,
    open: true,
    historyApiFallback: true,
    // 使用到的时候在放开已经特定修改
    // proxy:{
    //   "/x":{//匹配这个标识进行替换
    //     target:'http://proxy.com',//替换成的目标
      
    //   }
    // }
  },
}