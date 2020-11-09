const { validateVersion } = require('./version')

const deprecatedRegExp = new RegExp('@deprecated')

/**
 * @param {String} comment
 * @return {Boolean}
 */
exports.validateComment = function (comment) {
  const isDeprecated = deprecatedRegExp.test(comment)

  return isDeprecated && validateVersion(comment)
}
