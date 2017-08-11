module.exports = function(grunt) {
  require('jit-grunt')(grunt, {});

  // Keep the plugins in alphabetical order
  grunt.initConfig({
  });
  
  grunt.registerTask('build:common', [
  ]);

  grunt.registerTask('build:server', [
    'run-once:build:common'
  ]);
  grunt.registerTask('test:server', [
    'run-once:build:server'
  ]);

  grunt.registerTask('build:client', [
    'run-once:build:common'
  ]);
  grunt.registerTask('test:client', [
    'run-once:build:client'
  ]);
  
  grunt.registerTask('build', [
    'run-once:build:server',
    'run-once:build:client'
  ]);
  grunt.registerTask('test', [
    'run-once:test:server',
    'run-once:test:client'
  ]);
  
  grunt.registerTask('start', [
    'build'
  ]);
  
  grunt.registerTask('default', [
    'test'
  ]);
};

