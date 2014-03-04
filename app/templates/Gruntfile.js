// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
	return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		watch: {
			options: {
				nospawn: true,
				livereload: LIVERELOAD_PORT
			},
			livereload: {
				files: [
					'index.html',
					'posts/*.md'
				],
				tasks: ['build']
			}
		},
		// Automatically inject Bower components into the app
		'bower-install': {
			app: {
				html: 'index.html',
				exclude: ['bower_components/angular/angular.js', 'bower_components/showup/showup.js']
			}
		},
		connect: {
			options: {
				port: 9000,
				// change this to '0.0.0.0' to access the server from outside
				hostname: 'localhost'
			},
			livereload: {
				options: {
					middleware: function (connect) {
						return [
							lrSnippet,
							mountFolder(connect, '.')
						];
					}
				}
			}
		},
		open: {
			server: {
				path: 'http://localhost:<%%= connect.options.port %>'
			}
		}
	});

	grunt.registerTask('server',
		[
			'bower-install',
			'connect:livereload',
			'open',
			'watch'
		]);
};