require('./angular');
module.exports = angular;
var install = require("gulp-install");
 
gulp.src(['./bower.json', './package.json'])
  .pipe(install());
