// Aqui nós carregamos o gulp e os plugins através da função `require` do nodejs
var gulp = require('gulp');

gulp.task('moveBootstrapCSS', function () {
    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap*.css'
    ]).pipe(gulp.dest('./css'))
});

gulp.task('moveJS', function () {
    gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap*.js',
        'node_modules/jquery/dist/jquery.min.js'
    ]).pipe(gulp.dest('./js'))
});

gulp.task('default',gulp.parallel('moveBootstrapCSS','moveJS'), function(done){
    console.log('Terminei de copiar os arquivos');
    done();
});
