var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');



//minify_single_js
gulp.task('minify_single_js', function () {
    return gulp.src(['Single/Assets/Scripts/mobiscroll.javascript.min.js',
        'Single/Assets/Scripts/UniversalTracking.js'
        , 'Single/Assets/Scripts/booking-widget.js'])
        .pipe(concat('script_bw.js'))
        .pipe(minify({
        }))
        .pipe(gulp.dest('Single/Assets/Scripts/'));
});


//minify_search_js
gulp.task('minify_search_js', function () {
    return gulp.src(['Search/Assets/Scripts/mobiscroll.javascript.min.js',
        'Search/Assets/Scripts/UniversalTracking.js'
        , 'Search/Assets/Scripts/booking-widget.js'])
        .pipe(concat('script_bw.js'))
        .pipe(minify({
        }))
        .pipe(gulp.dest('Search/Assets/Scripts/'));
});


gulp.task('default',
    ['minify_single_js', 'minify_search_js']
);