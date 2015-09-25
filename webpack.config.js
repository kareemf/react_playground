var path = require('path');

module.exports = {
  context: __dirname + '/app',
  entry: {
    ts: './app.tsx',
    html: './index.html'
  },
  output: {
    path:  __dirname + '/dist',
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['react-hot', 'ts-loader'],
        include: [
          path.resolve(__dirname, 'app'),
        ],
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
       {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      }
    ]
  }
}