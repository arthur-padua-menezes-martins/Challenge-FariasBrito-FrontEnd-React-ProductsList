const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'build/js'),
    publicPath: '/build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          allowTsInNodeModules: true
        }
      }
    ]
  },
  devServer: {
    contentBase: './build',
    writeToDisk: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './build/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}
