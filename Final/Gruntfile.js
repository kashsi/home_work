module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		
		concat: {
					
			concat_css: {
				options: {
				  separator: ' ',
				},
				src: [
					'css/src/*.css'
				],
				dest: 'css/style.sum.css',
			},
					
			concat_js: {
				options: {
				  separator: ';',
				},
				src: [
					'js/src/*.js'
				],
				dest: 'js/scripts.sum.js',
			}
		},	
		
		uglify: {
			build: {
				src: 'css/style.sum.css',
				dest: 'css/style.min.css'
			},
			build: {
				src: 'js/scripts.sum.js',
				dest: 'js/scripts.min.js'
			}
		},
		
		cssmin: {
			dist: {
				src: 'css/style.sum.css',
				dest: 'css/style.min.css'
			}
		},	
		
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'img/build/'
				}]
			}
		},
		

		sass: {
			
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/src/style.css': 'css/src/style.scss'
				}
			}
			
		},
		
		// sass: {
			
			// dist: {
				// options: {
					// style: 'compressed'
				// },
				// files: {
					// 'css/style.css': 'css/style.scss'
				// }
			// }
			
		// },

		watch: {
			
			concat: {
				files: ['css/src/*.css', 'js/src/*.js'],
				tasks: ['concat'],
				options: {
					spawn: true,
				}
			},			
			
			css: {
				files: ['css/src/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: true,
				}
			},
			
			// css: {
				// files: ['css/*.scss'],
				// tasks: ['sass'],
				// options: {
					// spawn: true,
				// }
			// },
			
		},
		
    });
	
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass']);

};

