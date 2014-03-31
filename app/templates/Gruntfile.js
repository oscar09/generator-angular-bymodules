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

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	grunt.initConfig({
		// Project settings
		yeoman: {
			// configurable paths
			app: require('./bower.json').appPath || 'app',
			dist: 'dist'
		},
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
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'Gruntfile.js',
				'<%= yeoman.app %>/scripts/{,*/}*.js'
			]
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
		},
		docular: {
			docular_webapp_target : 'docs',
			groups: [
				{
					groupTitle: 'Fandora Client',
					groupId: 'fandoraclient',
					groupIcon: 'icon-truck',
					sections: [
						{
							id: 'index',
							name: 'Index',
							title: 'Documentation',
							scripts: [
								'app/scripts'
							]
						}
					]
				}
			],
			showDocularDocs: false,
			showAngularDocs: false
		},
		includeSource: {
			options: {
				basePath: 'app',
				includePath: '/',
				template: {
					html: {
						js: '<script type="text/javascript" th:src="@{{filePath}}}"></script>',
						css: '<link rel="stylesheet" type="text/css" th:href="@{{filePath}}}" />'
					}
				}
			},
			myTarget: {
				files: {
					'app/index.html': 'app/index_grunt.html'
				}
			}
		}
	});

	grunt.registerTask('server',
		[
			'jshint',
			'includeSource',
			'bower-install',
			'connect:livereload',
			'open',
			'watch'
		]);
	grunt.registerTask('document',
		[
			'docular'
		]);
};