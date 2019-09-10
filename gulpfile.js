const { task, series, parallel, src, dest, watch } = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    notify = require('gulp-notify'),
    cssnano = require('cssnano'),
    rename = require('gulp-rename'),
    postcss = require('gulp-postcss'),
    csscomb = require('gulp-csscomb'),
    autoprefixer = require('autoprefixer'),
    mqpacker = require('css-mqpacker'),
    sortCSSmq = require('sort-css-media-queries');

const plugins = [
    autoprefixer({ overrideBrowserslist: ['last 5 versions', '> 1%'], cascade: true }),
    mqpacker({ sort: sortCSSmq })
];


function scss() {
    return src('./assets/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' })
            .on("error", sass.logError))
        .pipe(postcss(plugins))
        .pipe(dest('assets/css'))
        .pipe(notify({ message: 'Compiled!', sound: false }))
        .pipe(browserSync.reload({ stream: true }));
}

function scssMin() {
    const pluginsExtended = plugins.concat([cssnano({
        preset: 'default'
    })]);
    return src('./assets/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' })
            .on('error', sass.logError))
        .pipe(postcss(pluginsExtended))
        .pipe(rename({ suffix: '.min' }))
        .pipe(notify({ message: 'Compiled!', sound: false }))
        .pipe(dest('assets/css'))
        .pipe(browserSync.reload({ stream: true }));
}

function comb() {
    return src('./assets/scss/**/*.scss')
        .pipe(csscomb('./.csscomb.json'))
        .on('error', notify.onError(function (error) {
            return 'File: ' + error.message;
        }))
        .pipe(dest('assets/scss'))
}

async function sync() {
    browserSync.reload();
}

function syncInit() {
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false
    });
}

function watchFiles() {
    syncInit();
    comb();
    scssMin();
    watch('./assets/scss/**/*.scss', scss);
    watch('./*.html', sync);
    watch('./assets/js/**/*.js', sync);
}

task('scss', scss);
task('min', scssMin);
task('comb', comb);
task('watch', watchFiles);