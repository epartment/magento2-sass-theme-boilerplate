var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var concat      = require('gulp-concat');
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
    gulp.watch(scripts, gulp.series('scripts', 'reload-js'));
    gulp.watch("**/*.phtml").on('change', browserSync.reload);
});

gulp.task('scripts', function() {
    return gulp.src(scripts)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('web/js'));
});

gulp.task('script-deps', function() {

    for (var src in npmDependencies) {
        gulp.src(src)
            .pipe(gulp.dest('web/js/deps/' + npmDependencies[src]));
    }
});

gulp.task('reload-js', function() {
    browserSync.reload();
});

gulp.task('sass', function() {
    return gulp.src("src/scss/style.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest("web/css"))
        .pipe(browserSync.stream());
});

gulp.task('build', gulp.series('sass', 'script-deps', 'scripts'));

gulp.task('default', gulp.series('build'));