const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'))

function sassCompress (){
    return src('src/**/*.scss')
        .pipe(sass({
            outputStyle:"compressed"
        })).on("error", sass.logError)
        .pipe(dest('dest/css/'))
}

function watchFiles(){
    watch('src/**/*.scss', sassCompress)
}

exports.default = sassCompress;
exports.watch = watchFiles;