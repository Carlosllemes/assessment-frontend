const { src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')



function sassCompress (){
    return src('src/**/*.scss')
        .pipe(sass({
            outputStyle:"compressed"
        })).on("error", sass.logError)
        .pipe(concat('style.css'))
        .pipe(dest('public/assets/css'))
}

function watchFiles(){
    watch('src/**/*.scss', sassCompress)
}

exports.default = sassCompress;
exports.watch = watchFiles;