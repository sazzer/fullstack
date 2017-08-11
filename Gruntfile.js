module.exports = function(grunt) {
  require('jit-grunt')(grunt, {});

  // Keep the plugins in alphabetical order
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: [
          'env'
        ],
        plugins: [
          'transform-runtime'
        ]
      },
      client: {
        files: [{
          expand: true,
          cwd: 'src/common/javascript',
          src: ['**/*.js'],
          dest: 'build/client/javascript'
        }, {
          expand: true,
          cwd: 'src/client/javascript',
          src: ['**/*.js'],
          dest: 'build/client/javascript'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: 'src/common/javascript',
          src: ['**/*.js'],
          dest: 'build/server'
        }, {
          expand: true,
          cwd: 'src/server/javascript',
          src: ['**/*.js'],
          dest: 'build/server'
        }]
      }
    }
  });
  
  grunt.registerTask('build:server', [
    'babel:server'
  ]);
  grunt.registerTask('test:server', [
    'run-once:build:server'
  ]);

  grunt.registerTask('build:client', [
    'babel:client'
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

