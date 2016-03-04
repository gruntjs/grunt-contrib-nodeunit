/*
 * grunt-contrib-nodeunit
 * http://gruntjs.com/
 *
 * Copyright (c) 2016 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var path = require('path');

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    },

    // clean tmp dir
    clean: {
      tests: ['tmp']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-internal');

  // Whenever the "test" task is run, run some basic tests.
  grunt.registerTask('test', function(which) {
    var test = path.join(__dirname, 'test', 'fixtures', which + '.js');
    if (grunt.file.exists(test)) {
      grunt.config('nodeunit.tests', test);
    }
    grunt.task.run('nodeunit');
  });

  // Tests nodeunit with tap reporter
  grunt.registerTask('test-tap', function(which) {
    var test = path.join('test', 'fixtures', which + '.js');

    if (grunt.file.exists(test)) {
      grunt.config('nodeunit.tests', test);
    }

    grunt.config('nodeunit.options.reporter', 'tap');

    grunt.task.run('clean');
    grunt.task.run('nodeunit');
  });

  // Tests nodeunit with tap reporter and output saved to a file
  grunt.registerTask('test-tap-out', function(which) {
    var test = path.join('test', 'fixtures', which + '.js');
    var tap = path.join('tmp', which + '.js.tap');

    if (grunt.file.exists(test)) {
      grunt.config('nodeunit.tests', test);
    }

    grunt.config('nodeunit.options.reporter', 'tap');
    grunt.config('nodeunit.options.reporterOutput', tap);

    grunt.task.run('clean');
    grunt.task.run('nodeunit');
  });

  // Tests nodeunit with junit reporter
  grunt.registerTask('test-junit', function(which) {
    var test = path.join('test', 'fixtures', which + '.js');
    var outDir = path.join('tmp', which + '.junit');

    if (grunt.file.exists(test)) {
      grunt.config('nodeunit.tests', test);
    }

    grunt.config('nodeunit.options.reporter', 'junit');
    grunt.config('nodeunit.options.reporterOptions', { output: outDir });

    grunt.task.run('clean');
    grunt.task.run('nodeunit');
  });

  // Tests nodeunit with minimal reporter
  grunt.registerTask('test-minimal', function(which) {
    var test = path.join('test', 'fixtures', which + '.js');
    var out = path.join('tmp', which + '.js.out');

    if (grunt.file.exists(test)) {
      grunt.config('nodeunit.tests', test);
    }

    grunt.config('nodeunit.options.reporter', 'minimal');
    grunt.config('nodeunit.options.reporterOutput', out);

    grunt.task.run('clean');
    grunt.task.run('nodeunit');
  });

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'nodeunit', 'build-contrib']);
};
