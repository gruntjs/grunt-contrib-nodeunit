## Usage examples

### Wildcards

In this example, `grunt test` will test all `.js` files in the test directory. The wildcard is expanded to match each individual file and each ran by [Nodeunit][nodeunit].

```javascript
// Project configuration.
grunt.initConfig({
  test: {
    all: ['test/*.js']
  }
});
```

With a slight modification, `grunt test` will test all `.js` files in the test directory _and all subdirectories_. See the [minimatch](https://github.com/isaacs/minimatch) module's documentation for more details on wildcard patterns.

```javascript
// Project configuration.
grunt.initConfig({
  test: {
    all: ['test/**/*.js']
  }
});
```