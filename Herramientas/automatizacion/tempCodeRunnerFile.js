const gulp = require('gulp');

gulp.task('build', function(cb){
    console.log('Contruyendo el sitio');
    setTimeout(cb, 1200);
});
