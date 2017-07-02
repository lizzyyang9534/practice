module.exports = {
  entry: ['./index.js'],
  output: {
    filename: 'bundle.js',
    path: './assets/',
    publicPath: '/assets/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader']
    }]
  },
  devServer: {
    contentBase: './',
    filename: 'bundle.js',
    lazy: false
  }
};
