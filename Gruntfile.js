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
        cwd: 'src',
        src: ['**/*.scss'],
        dest: '',
        ext: '.css'
      }
    },

    watch: {
      sass: {
        files: ['src/**/*.scss'],
        tasks: ['sass']
      }
    }

  });

  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  grunt.registerTask( 'default', ['sass'] );

  grunt.registerTask( 'spy', ['watch'] );

};