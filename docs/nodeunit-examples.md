# Usage examples

## Wildcards

In this example, `grunt nodeunit` will test all files ending with `_test.js` in the `test` directory.

```js
// Project configuration.
grunt.initConfig({
  nodeunit: {
    all: ['test/*_test.js']
  }
});
```

With a slight modification, `grunt nodeunit` will test files matching the same pattern in the `test` directory _and all subdirectories_.

```js
// Project configuration.
grunt.initConfig({
  nodeunit: {
    all: ['test/**/*_test.js']
  }
});
```

See the [minimatch](https://github.com/isaacs/minimatch) module documentation for more details on wildcard patterns.
