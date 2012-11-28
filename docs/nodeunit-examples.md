# Usage examples

## Wildcards

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
