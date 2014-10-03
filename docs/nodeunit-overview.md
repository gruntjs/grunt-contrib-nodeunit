Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

This plugin provides server-side JavaScript unit testing via [nodeunit](https://github.com/caolan/nodeunit/). If you're looking to test JavaScript that uses `window` or the DOM, please use the [grunt-contrib-qunit plugin](https://github.com/gruntjs/grunt-contrib-qunit)`qunit` task.

# Differences from Nodeunit Command Line

There may be a few differences versus running `nodeunit` on the command line:

## Undone tests will cause problems

Nodeunit's reporters (such as `default`) are in charge of tracking tests that do not complete.  They often hook
into `process.on('exit')`.  Since `grunt` is handling the runtime, it does not exit, so the reporter's clean-up code
that monitors undone tests does not fire.  Additionally, the reporters do not expose the number of "Undone" tests in their
completion callbacks.

This can cause problems.  For example, if an exception is thrown in an undone test, the exception might bubble up into the
`grunt` runtime if it's still running.  This would cause `grunt` to exit, while `nodeunit` command line would show the undone 
test.

If you're getting strange `grunt` runtime errors or seeing `grunt` exit, check for "undone" tests.