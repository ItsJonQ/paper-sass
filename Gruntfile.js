module.exports = function(grunt) {

  grunt.initConfig({

    sass: {
      dist: {
        options: {
          style: 'expanded',
          loadPath: [
            'bower_components/bourbon/dist'
          ]
        },
        expand: true,
        cwd: 'dist',
        src: ['**/*.scss'],
        dest: 'build',
        ext: '.css'
      }
    },

    watch: {
      sass: {
        files: ['dist/**/*.scss'],
        tasks: ['sass']
      }
    }

  });

  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  grunt.registerTask( 'default', ['sass'] );

  grunt.registerTask( 'spy', ['watch'] );

};