const { validateVersion } = require('./version')

const deprecatedRegExp = new RegExp('@deprecated')

/**
 * @param {String} comment
 * @param {String | null} appVersion
 * @return {Boolean}
 */
exports.validateComment = function (comment, appVersion) {
  const isDeprecated = deprecatedRegExp.test(comment)

  if (appVersion) {
    return isDeprecated && validateVersion(comment, appVersion)
  }

  return isDeprecated
}
