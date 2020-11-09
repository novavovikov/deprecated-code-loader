const compareVersions = require('compare-versions')
const pkg = require('../package')

const isValidPackageVersion = compareVersions.validate(pkg.version)

// used global flag for multiple versions per line
const versionRegExp = new RegExp(/\[(.*?)\]/g)

/**
 * @param {String} comment
 * @return {Boolean}
 */
exports.validateVersion = function (comment) {
  if (!isValidPackageVersion) {
    return false
  }

  const versions = comment.match(versionRegExp) ?? []

  return versions.some((version) => {
    const v = version.replace(/[\[\]']+/g, '')
    const isValid = compareVersions.validate(v)

    return isValid && compareVersions.compare(pkg.version, v, '>=')
  })
}
