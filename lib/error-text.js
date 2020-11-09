/**
 * @param {Tag} comment
 * @return {string} errorText
 */
exports.getErrorText = function ({ line, source }) {
  return `
----------------
line: ${line}
text: ${source}
----------------`
}
