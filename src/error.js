/**
 * @param {ESTree.Comment} comment
 */
exports.getErrorText = function ({ loc, value }) {
  const { line, column } = loc.start

  return `
------- position --------

line ${line}; column: ${column};

-------- comment --------

${value}
`
}
