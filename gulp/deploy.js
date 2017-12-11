'use strict';

var path = require('path');

module.exports = function (gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var entries = config.entries;

  gulp.task('deploy', function() {
    return gulp.start('ftp');
  })

  gulp.task('ftp', function () {
    return gulp.src([path.join(taskTarget,'/**'),  '!'+path.join(taskTarget, '\.DS_Store')], {dot: true})
      .pipe(plugins.changed('.'+taskTarget, {hasChanged: plugins.changed.compareSha1Digest}))
      .pipe(plugins.ftp({
        host: '193.70.115.135',
        user: 'ftpactweb_prep',
        pass: 'a).BGfAObIZC',
        remotePath: 'new/'
      }));
  });

};
