'use strict';

var path = require('path');

module.exports = function (gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var entries = config.entries;

  gulp.task('deploy', function() {
    require('dotenv').config();
    return gulp.start('ftp');
  })

  gulp.task('ftp', function () {
    return gulp.src([path.join(taskTarget,'/**'),  '!'+path.join(taskTarget, '\.DS_Store')], {dot: true})
      .pipe(plugins.changed('.'+taskTarget, {hasChanged: plugins.changed.compareSha1Digest}))
      .pipe(plugins.ftp({
        host: process.env.FTP_HOST,
        user: process.env.FTP_USERNAME,
        pass: process.env.FTP_PASSWORD,
        remotePath: 'httpdocs/'
      }));
  });

};
