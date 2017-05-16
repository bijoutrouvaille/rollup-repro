var fs = require("fs");
var browserify = require("browserify");
var rollupify = require("rollupify")

var rootPath = process.cwd()
var distPath = rootPath + '/build'

var opt = { 
  extensions: ['.js'],
  paths: ['./node_modules', './src'],
  debug: true
}


var b = browserify(rootPath+"/src/index.js", opt)
  .transform(rollupify)
  .bundle()
  .pipe(process.stdout);




