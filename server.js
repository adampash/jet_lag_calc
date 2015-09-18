var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://0.0.0.0:3000');
});


// var webpack = require('webpack')
// var WebpackDevServer = require('webpack-dev-server')
// var config = require('./webpack.dev.config')
// 
// new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
//   hot: true,
//   historyApiFallback: true,
//   // It suppress error shown in console, so it has to be set to false.
//   quiet: false,
//   // It suppress everything except error, so it has to be set to false as well
//   // to see success build.
//   noInfo: false,
//   stats: {
//     // Config for minimal console.log mess.
//     assets: false,
//     colors: true,
//     version: false,
//     hash: false,
//     timings: false,
//     chunks: false,
//     chunkModules: false
//   }
// }).listen(3000, 'localhost', function (err, result) {
//   if (err) {
//     console.log(err)
//   }
// 
//   console.log('Listening at localhost:3000')
// })
