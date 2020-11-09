const path = require('path')
const compareVersions = require('compare-versions')
const loaderUtils = require('loader-utils')
const schemaUtils = require('schema-utils')
const commentParser = require('comment-parser')
const { getErrorText } = require('./error')
const { validateComment } = require('./comment')

const schema = require('./schema.json')

const DEFAULT_OPTIONS = {
  notify: 'warning'
}

/**
 * @param {String} sourceCode
 * @returns {String} sourceCode
 */
module.exports = function (sourceCode) {
  // FIXME use this.getOptions(schema) in webpack 5
  const userOptions = loaderUtils.getOptions(this)
  const options = { ...DEFAULT_OPTIONS, ...userOptions }

  const errorHandler =
    options.notify === 'warning' ? this.emitWarning : this.emitError

  schemaUtils.validate(schema, options, {
    name: 'Deprecation Loader',
    baseDataPath: 'options'
  })

  const commentList = commentParser(sourceCode)
  const pkg = require(path.join(this.rootContext, 'package'))
  const appVersion = compareVersions.validate(pkg.version) ? pkg.version : null

  for (const { tags } of commentList) {
    for (const comment of tags) {
      const isDeprecated = validateComment(comment, appVersion)

      if (isDeprecated) {
        const errorText = getErrorText(comment)
        errorHandler(new Error(errorText))
      }
    }
  }

  return sourceCode
}
