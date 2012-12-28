# grunt-contrib-nodeunit [![Build Status](https://secure.travis-ci.org/gruntjs/grunt-contrib-nodeunit.png?branch=master)](http://travis-ci.org/gruntjs/grunt-contrib-nodeunit)

> Run Nodeunit unit tests.

_Note that this plugin has not yet been released, and only works with the latest bleeding-edge, in-development version of grunt. See the [When will I be able to use in-development feature 'X'?](https://github.com/gruntjs/grunt/wiki/Frequently-Asked-Questions#faq-devel) FAQ entry for more information._

## Getting Started
If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```shell
npm install grunt-contrib-nodeunit --save-dev
```

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/wiki/Getting-started


## Nodeunit task
_Run this task with the `grunt nodeunit` command._

_This task is a [multi task][] so any targets, files and options should be specified according to the [multi task][] documentation._
[multi task]: https://github.com/gruntjs/grunt/wiki/Configuring-tasks


This plugin provides server-side JavaScript unit testing via [nodeunit](https://github.com/caolan/nodeunit/). If you're looking to test JavaScript that uses `window` or the DOM, please use the [grunt-contrib-qunit plugin](https://github.com/gruntjs/grunt-contrib-qunit)`qunit` task.


### Usage examples

#### Wildcards

In this example, `grunt nodeunit:all` (or `grunt nodeunit` because `nodeunit` is a [multi task][]) will test all files ending with `_test.js` in the `test` directory.

```js
// Project configuration.
grunt.initConfig({
  nodeunit: {
    all: ['test/*_test.js']
  }
});
```

With a slight modification, `grunt nodeunit:all` will test files matching the same pattern in the `test` directory _and all subdirectories_.

```js
// Project configuration.
grunt.initConfig({
  nodeunit: {
    all: ['test/**/*_test.js']
  }
});
```

See the [file globbing] documentation for more details on wildcard patterns.

[file globbing]: https://github.com/gruntjs/grunt/wiki/Configuring-tasks


## Release History

 * 2012-11-12   v0.1.1   Switch to this.file api internally.
 * 2012-11-03   v0.1.0   Work in progress, not yet officially released.

---

Task submitted by ["Cowboy" Ben Alman](http://benalman.com)

*This file was generated on Wed Nov 28 2012 08:52:52.*
