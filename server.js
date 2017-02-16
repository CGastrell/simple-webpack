var express = require('express')
var config = require('config')
var path = require('path')

var isDeveloping = process.env.NODE_ENV !== 'production'

var webpack = require('webpack')
var webpackConfig = require('./webpack.config.js')
var webpackDevMiddleware = require("webpack-dev-middleware")
var compiler = webpack(webpackConfig)

var app = express()

// app.get('*', function response (req, res) {
//   res.sendFile(path.join(__dirname, 'public/index.html'))
// })

app.use(webpackDevMiddleware(compiler, {
  stats: {colors: true},
  publicPath: '/'
}))
app.use(express.static(path.join(__dirname, 'public')))

app.listen(config.http.port, config.http.address, function onStart (err) {
  if (err) {
    console.log(err)
  }
  console.info(
    '==> 🌎 Listening on port %s. Open up http://%s:%s/ in your browser.',
    config.http.port,
    config.http.address,
    config.http.port
  )
})
