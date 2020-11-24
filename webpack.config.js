const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main/main.ts',
  output: {
    path: path.join(__dirname, 'build/js'),
    publicPath: '/build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.sass'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  modules: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                fiber: require('fibers'),
                indentedSyntax: true
              }
            }
          }
        ]
      }
    ]
  }
}
