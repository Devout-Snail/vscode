/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var gutil = require("gulp-util");
var tsify = require('tsify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var paths = {pages: ['src/*.html']};
gulp.task('copyHtml', function () {
	return gulp.src(paths.pages).pipe(gulp.dest('dist'));
});
gulp.task('default', gulp.series('copyHtml', function () {
	return browserify({basedir: '.',debug: true,
	entries: ['src/main.ts'],
	cache: {},
	packageCache: {}
	}).plugin(tsify).transform('babelify', {presets: ['es2015'],extensions: ['.ts']
	}).bundle().pipe(source('bundle.js')).pipe(buffer()).pipe(sourcemaps.init({loadMaps: true})).pipe(sourcemaps.write('./')).pipe(gulp.dest('dist'));
}));
var watchedBrowserify = watchify(browserify({basedir: '.',debug: true,entries: ['src/main.ts'],cache: {},packageCache: {}
}).plugin(tsify));
function bundle() {
	return watchedBrowserify.bundle().pipe(source('bundle.js')).pipe(gulp.dest("dist"));
}
gulp.task("watch", gulp.series("copyHtml", bundle));
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);
