<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![tests][tests]][tests-url]
[![chat][chat]][chat-url]

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
text: @deprecated [0.0.0]
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
[npm-url]: https://npmjs.com/package/deprecation-loader
[node]: https://img.shields.io/node/v/file-loader.svg
[node-url]: https://nodejs.org
[tests]: https://img.shields.io/badge/deprecated--loader-tests-green
[tests-url]: https://github.com/novavovikov/deprecation-loader/actions?query=workflow%3Atest
[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack
