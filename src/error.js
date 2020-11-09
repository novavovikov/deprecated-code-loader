/**
 * @param {Tag} comment
 */
exports.getErrorText = function ({ line, source }) {
  return `
----------------
line: ${line};
text: ${source}
----------------`
}
