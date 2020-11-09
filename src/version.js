const compareVersions = require('compare-versions')

// used global flag for multiple versions per line
const versionRegExp = new RegExp(/\[(.*?)\]/g)

/**
 * Compares app version and code version
 * @param {String} comment
 * @param {String} appVersion
 * @return {Boolean}
 */
exports.validateVersion = function (comment, appVersion) {
  const versions = comment.match(versionRegExp) ?? []

  return versions.some((version) => {
    const codeVersion = version.replace(/[\[\]']+/g, '')
    const isValid = compareVersions.validate(codeVersion)

    return isValid && compareVersions.compare(appVersion, codeVersion, '>=')
  })
}
