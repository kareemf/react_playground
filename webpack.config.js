module.exports = {
  entry: './app/app.tsx',
  output: {
    filename: './app/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts(x)?$/, loader: 'ts-loader' }
    ]
  }
}