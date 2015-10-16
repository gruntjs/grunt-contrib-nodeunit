# Settings

## options.reporter
Type: `String`  
Default: `'grunt'`

Specifies the reporter you want to use. For example, `default`, `verbose` or `tap`.

## options.reporterOutput
Type: `Boolean`  
Default: `false`

Specifies the file the `reporter`'s output should be saved to. For example, `tests.tap`.

## options.reporterOptions
Type: `Object`  
Default: `{}`

Specifies the options passed to the `reporter`. For example, the `junit` reporter requires the `output` option
to be set:

```js
grunt.initConfig({
  nodeunit: {
    all: ['test/*_test.js'],
    options: {
      reporter: 'junit',
      reporterOptions: {
        output: 'outputdir'
      }
    }
  }
});
```
