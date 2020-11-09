const { isDeprecatedVersion } = require('./version')

/**
 * @param {Tag} comment
 * @param {String | null} appVersion
 * @return {Boolean}
 */
exports.validateComment = function (comment, appVersion) {
  const isDeprecated = comment.tag === 'deprecated'

  if (appVersion) {
    return isDeprecated && isDeprecatedVersion(comment.source, appVersion)
  }

  return isDeprecated
}
