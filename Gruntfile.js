module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //uglify 
    uglify: {
      dist: {
        src: 'src/allowMe.js',
        dest: 'dist/allowMe.min.js'
      }
    },

    //cssmin
    cssmin: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/',
          ext: '.min.css'
        }]
      }
    }


  });


  // Default task(s).
  grunt.registerTask('default', [
    'uglify',
    'cssmin'
  ]);

};