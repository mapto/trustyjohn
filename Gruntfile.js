module.exports = function(grunt) {

    grunt.initConfig({
      jshint: {
        files: ['Gruntfile.js', 'game/js/**/*.js'],
        options: {
          esversion: 6,  // accept function declarations with =>
          asi: true  // ignore missing ;
        }
      },
      watch: {
        files: ['game/*', 'game/**/*'],
        // files: ['<%= jshint.files %>'],
        tasks: ['jshint'],
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
            livereload: true
        }
      },
      connect: {
        server: {
          options: {
            port: 9001,
            base: 'game',
            livereload: true,
            open: {
              target: 'http://localhost:<%= connect.server.options.port %>?debug'
            }
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
  
    grunt.registerTask('default', ['jshint','connect', 'watch']);
    // grunt.registerTask('default', ['connect', 'watch']);
  
  };