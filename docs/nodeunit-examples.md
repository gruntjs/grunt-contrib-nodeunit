# Usage examples

## Wildcards

In this example, `grunt nodeunit:all` or `grunt nodeunit` will test all files ending with `_test.js` in the `test` directory.

```js
grunt.initConfig({
  nodeunit: {
    all: ['test/*_test.js']
  }
});
```

With a slight modification, `grunt nodeunit:all` will test files matching the same pattern in the `test` directory _and all subdirectories_.

```js
grunt.initConfig({
  nodeunit: {
    all: ['test/**/*_test.js']
  }
});
```

## Using Other Reporters

To use a reporter other than the default one, you can specify the `reporter` and `reporterOutput` parameters.

```js
grunt.initConfig({
  nodeunit: {
    all: ['test/*_test.js'],
    options: {
      reporter: 'tap',
      reporterOutput: 'tests.tap',
      reporterOptions: {
        output: 'outputdir'
      }
    }
  }
});
```
