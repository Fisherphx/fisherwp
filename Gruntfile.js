'use strict';
module.exports = function(grunt) {
	// Load all tasks
	require('load-grunt-tasks')(grunt);
	// Show elapsed time
	require('time-grunt')(grunt);
	
	var jsFileList = [
		'assets/vendor/foundation/js/foundation/foundation.js',
		'assets/vendor/foundation/js/foundation/foundation.abide.js',
		'assets/vendor/foundation/js/foundation/foundation.accordion.js',
		'assets/vendor/foundation/js/foundation/foundation.alert.js',
		'assets/vendor/foundation/js/foundation/foundation.clearing.js',
		'assets/vendor/foundation/js/foundation/foundation.dropdown.js',
		'assets/vendor/foundation/js/foundation/foundation.equalizer.js',
		'assets/vendor/foundation/js/foundation/foundation.interchange.js',
		'assets/vendor/foundation/js/foundation/foundation.joyride.js',
		'assets/vendor/foundation/js/foundation/foundation.magellan.js',
		'assets/vendor/foundation/js/foundation/foundation.offcanvas.js',
		'assets/vendor/foundation/js/foundation/foundation.orbit.js',
		'assets/vendor/foundation/js/foundation/foundation.reveal.js',
		'assets/vendor/foundation/js/foundation/foundation.slider.js',
		'assets/vendor/foundation/js/foundation/foundation.tab.js',
		'assets/vendor/foundation/js/foundation/foundation.tooltip.js',
		'assets/vendor/foundation/js/foundation/foundation.topbar.js',
		'assets/js/plugins/*.js',
		'assets/js/_*.js'
	];

	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'assets/js/*.js',
				'!assets/js/scripts.js',
				'!assets/**/*.min.*'
			]
		},
		sass: {
			dev: {
				options: {
					outputStyle: 'nested'
				},
				files: {
					'assets/css/main.css': 'assets/scss/_main.scss'
				}        
			}
		},
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: [jsFileList],
				dest: 'assets/js/scripts.js',
			},
		},
		uglify: {
			dist: {
				files: {
					'assets/js/scripts.min.js': [jsFileList]
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
			},
			dev: {
				src: 'assets/css/main.css'
			},
			build: {
				src: 'assets/css/main.min.css'
			}
		},
		modernizr: {
			build: {
				devFile: 'assets/vendor/modernizr/modernizr.js',
				outputFile: 'assets/js/vendor/modernizr.min.js',
				files: {
					'src': [
						['assets/js/scripts.min.js'],
						['assets/css/main.min.css']
					]
				},
				extra: {
					shiv: false
				},
				uglify: true,
				parseFiles: true
			}
		},
		version: {
			default: {
				options: {
					format: true,
					length: 32,
					manifest: 'assets/manifest.json',
					querystring: {
						style: 'roots_css',
						script: 'roots_js'
					}
				},
				files: {
					'lib/scripts.php': 'assets/{css,js}/{main,scripts}.min.{css,js}'
				}
			}
		},
		watch: {
			grunt: { files: ['Gruntfile.js'] },
			sass: {
				files: 'assets/scss/*.scss',
				tasks: ['sass:dev']
			},
			js: {
				files: [
					jsFileList,
					'<%= jshint.all %>'
				],
				tasks: ['jshint', 'concat']
			},
			livereload: {
				// Browser live reloading
				// https://github.com/gruntjs/grunt-contrib-watch#live-reloading
				options: {
					livereload: false
				},
				files: [
					'assets/css/main.css',
					'assets/js/scripts.js',
					'templates/*.php',
					'*.php'
				]
			}
		}
	});
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	
	// Register tasks
	grunt.registerTask('default', [
		'dev'
	]);
	grunt.registerTask('dev', [
		'jshint',
		'sass:dev',
		'autoprefixer:dev',
		'concat'
	]);
	grunt.registerTask('build', [
		'jshint',
		'sass:build',
		'autoprefixer:build',
		'uglify',
		'modernizr',
		'version'
	]);
};