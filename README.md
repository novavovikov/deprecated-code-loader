[![npm][npm]][npm-url]
[![node][node]][node-url]
[![size][size]][size-url]
[![tests][tests]][tests-url]

# deprecated-loader

The `deprecated-loader` notifies deprecated code.

## Getting Started

To begin, you'll need to install `deprecated-loader`:

```console
$ npm install deprecated-loader --save-dev
```

Then add the loader to your `webpack` config. For example:

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        use: [
          {
            loader: 'deprecated-loader'
          }
        ]
      }
    ]
  }
}
```

Use comment `@deprecated [2.0.0]` in your code.
In square brackets, indicate the version after which the code should be removed:

**file.js**

```js
/**
 * @deprecated [2.0.0]
 */
console.log('Some code')
```

And run `webpack` via your preferred method.
If the version of the app in package.json is greater than or equal to the version of the code,
you will see comments in the terminal:

```shell script
WARNING in ./file.js
Module Warning (from ./file.js):

----------------
line: 13
text: @deprecated [2.0.0]
----------------

```

## Options

### `notification`

Enum: `warning|error|none` - default: `'warning'`

Deprecated code notification type

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        use: [
          {
            loader: 'deprecated-loader',
            options: {
              notification: 'error'
            }
          }
        ]
      }
    ]
  }
}
```

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/file-loader.svg
[npm-url]: https://npmjs.com/package/deprecated-loader
[node]: https://img.shields.io/node/v/file-loader.svg
[node-url]: https://nodejs.org
[size]: https://img.shields.io/github/languages/code-size/novavovikov/deprecated-loader
[size-url]: https://github.com/novavovikov/deprecated-loader/tree/master/lib
[tests]: https://img.shields.io/github/workflow/status/novavovikov/deprecated-loader/test?label=tests
[tests-url]: https://github.com/novavovikov/deprecated-loader/actions?query=workflow%3Atest
