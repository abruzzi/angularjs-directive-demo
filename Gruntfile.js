module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
      'app/scripts/controllers/**/*.js', 
      'app/scripts/directives/**/*.js', 
      'app/scripts/services/**/*.js', 
      'test/e2e/**/*.js',
      'test/spec/**/*.js'
      ],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    karma: {
        unit: {
            configFile: "karma.conf.js",
            singleRun: true
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('unit', ['jshint', 'karma']);

  grunt.registerTask('default', ['unit']);
};
