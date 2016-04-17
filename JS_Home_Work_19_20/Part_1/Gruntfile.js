module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		
		concat: {
					
			dist1: {
				options: {
				  separator: ' ',
				},
				src: [
					'css/styleAccordion.css',
					'css/style.css'
				],
				dest: 'css/style.sum.css',
			},
					
			dist2: {
				options: {
				  separator: ';',
				},
				src: [
					'js/jcarousel.jquery.js',
					'js/jquery.jcarousel.min.js',
					'js/jcarousel.basic.js',
					'js/modernizr.custom.29473.js',
					'js/scripts.js'
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
					'css/style.css': 'css/style.scss'
				}
			}
			
		},
		

		watch: {
			
			css: {
				files: ['css/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			}
			
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

