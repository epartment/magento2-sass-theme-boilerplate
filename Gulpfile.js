var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var concat      = require('gulp-concat');
var merge       = require('merge-stream');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();

var scripts = [
    'src/js/script.js'
];

var npmDependencies = {

};

var config = {

    browserSyncProxy: 'magento2-boilerplate.test'

};

gulp.task('watch', function() {
    browserSync.init({
        proxy: {
            target: config.browserSyncProxy
        },
        "rewriteRules": [
            {
                "match": "." + config.browserSyncProxy,
                "replace": ""
            }
        ]
    });

    gulp.watch("src/scss/**/*.scss", gulp.series('sass'));
    gulp.watch(scripts, gulp.series('scripts'));
    gulp.watch("**/*.phtml").on('change', browserSync.reload);
});

gulp.task('scripts', function() {
    var stream = gulp.src(scripts)
        .pipe(concat('scripts.js'));
    return stream
        .pipe(gulp.dest('web/js'))
        .pipe(browserSync.stream());
});

gulp.task('script-deps', function() {
    return new Promise(function (resolve) {
        for (var src in npmDependencies) {
            gulp.src(src)
                .pipe(gulp.dest('web/js/deps/' + npmDependencies[src]));
        }
        resolve();
    })
});

gulp.task('reload-js', function() {
    browserSync.reload();
});

gulp.task('sass', function() {
    var sassStream,
        cssStream;
    sassStream = gulp.src("src/scss/style.scss")
        .pipe(sass({
            errLogToConsole: true
        }));
    cssStream = gulp.src('node_modules/line-awesome/dist/css/line-awesome.css');
    return merge(sassStream, cssStream)
        .pipe(plumber())
        .pipe(gulp.dest('web/css'))
        .pipe(browserSync.stream());
});

gulp.task('copy-fonts', function() {
    return gulp.src('node_modules/line-awesome/dist/fonts/*')
        .pipe(gulp.dest('web/fonts/'));
});
gulp.task('build', gulp.series('copy-fonts', 'sass', 'script-deps', 'scripts'));

gulp.task('default', gulp.series('build'));
