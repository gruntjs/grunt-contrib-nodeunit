'use strict';

var grunt = require('grunt');
var path = require('path');

exports.nodeunit = {
  please_work: function(test) {
    test.expect(1);
    test.ok(true, 'this had better work.');
    test.done();
  },
  fail: function(test) {
    test.expect(3);
    grunt.util.spawn({
      grunt: true,
      args: ['test:fail', '--no-color'],
    }, function(err, result) {
      test.ok(result.stdout.indexOf("Operator:") !== -1, 'Operator should display for multiline.');
      test.ok(result.stdout.indexOf('Message: this value should be truthy') !== -1, 'Message should have been displayed.');
      test.ok(result.stdout.indexOf('Error: undefined == true') !== -1, 'Error should have been displayed.');
      test.done();
    });
  },
  tap_fail: function(test) {
    test.expect(6);
    grunt.util.spawn({
      grunt: true,
      args: ['test-tap:fail', '--no-color'],
    }, function(err, result, code) {
      // stdout message
      test.ok(result.stdout.indexOf('# fail - fail') !== -1, 'First test should fail');
      test.ok(result.stdout.indexOf('not ok 1 this value should be truthy') !== -1, 'First test failure notice');
      test.ok(result.stdout.indexOf('# fail - failSupertestError') !== -1, 'Second test should fail');
      test.ok(result.stdout.indexOf('not ok 2 Something arbitrary') !== -1, 'Second test failure message');
      test.ok(result.stdout.indexOf('# tests 2') !== -1, 'Total test count');
      test.ok(result.stdout.indexOf('# fail  2') !== -1, 'Total failure count');

      test.done();
    });
  },
  tap_out_fail: function(test) {
    test.expect(7);
    grunt.util.spawn({
      grunt: true,
      args: ['test-tap-out:fail', '--no-color'],
    }, function(err, result, code) {
      // stdout message  
      test.ok(result.stdout.indexOf('fail.js.tap" created') !== -1, 'File creation notice should be displayed.');

      // verify parts of the fail.js.tap contents against ours
      var tapFile = path.join('tmp', 'fail.js.tap');
      var tapContents = grunt.util.normalizelf(grunt.file.read(tapFile));

      test.ok(tapContents.indexOf('# fail - fail') !== -1, 'First test should fail');
      test.ok(tapContents.indexOf('not ok 1 this value should be truthy') !== -1, 'First test failure notice');
      test.ok(tapContents.indexOf('# fail - failSupertestError') !== -1, 'Second test should fail');
      test.ok(tapContents.indexOf('not ok 2 Something arbitrary') !== -1, 'Second test failure message');
      test.ok(tapContents.indexOf('# tests 2') !== -1, 'Total test count');
      test.ok(tapContents.indexOf('# fail  2') !== -1, 'Total failure count');

      test.done();
    });
  },
  junit: function(test) {
    test.expect(4);
    grunt.util.spawn({
      grunt: true,
      args: ['test-junit:fail', '--no-color'],
    }, function(err, result,code) {
      // verify the junit directory exists
      var junitDir = path.join('tmp', 'fail.junit');
      var junitFile = path.join(junitDir, 'fail.js.xml');
      var junitContents = grunt.util.normalizelf(grunt.file.read(junitFile));

      test.ok(junitContents.indexOf('<testsuite name="fail.js"') !== -1, 'testsuite element');
      test.ok(junitContents.indexOf('errors="2"') !== -1, 'Two errors detected');
      test.ok(junitContents.indexOf('AssertionError: this value should be truthy') !== -1, 'Assertion');
      test.ok(junitContents.indexOf('fail - failSupertestError') !== -1, 'Failure message');

      test.done();
    });
  }
};
