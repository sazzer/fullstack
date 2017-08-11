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
    },
    mochaTest: {
      options: {
        reporter: 'spec',
        quiet: false,
        growl: true,
        clearRequireCache: true
      },
      client: {
        options: {
          require: [
            './build/client/javascript/testSupport'
          ]
        },
        src: [
          'build/client/javascript/**/__test__/*.spec.js'
        ],
      },
      server: {
        options: {
          require: [
            './build/server/testSupport'
          ]
        },
        src: [
          'build/server/**/__test__/*.spec.js'
        ],
      }
    }
  });
  
  grunt.registerTask('build:server', [
    'babel:server'
  ]);
  grunt.registerTask('test:server', [
    'run-once:build:server',
    'mochaTest:server'
  ]);

  grunt.registerTask('build:client', [
    'babel:client'
  ]);
  grunt.registerTask('test:client', [
    'run-once:build:client',
    'mochaTest:client'
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

