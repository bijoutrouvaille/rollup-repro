var browserify = require("browserify");
var rollupify = require("rollupify")

var rootPath = process.cwd()

var b = browserify(rootPath+"/src/index.js")
  .transform(rollupify)
  .bundle()
  .pipe(process.stdout);




