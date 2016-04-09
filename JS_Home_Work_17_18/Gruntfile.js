module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		concat: {
					
			dist1: {
				options: {
				  separator: ' ',
				},
				src: [
					'css/myCss/*.css'
				],
				dest: 'css/style.sum.css',
			},
					
			dist2: {
				options: {
				  separator: ';',
				},
				src: [
					'js/myJs/*.js'
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
		}	
		
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
	

    grunt.registerTask('default', ['concat:dist1', 'concat:dist2', 'uglify', 'cssmin']);

};

