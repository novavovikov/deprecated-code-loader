const { validateComment } = require('../lib/comment')

describe('validateComment', () => {
  it('should "true" - comment tag is "deprecated"', () => {
    const isDeprecated = validateComment(
      {
        tag: 'deprecated',
        source: 'Some source'
      },
      null
    )

    expect(isDeprecated).toBeTruthy()
  })

  it('should "false" - comment tag is not "deprecated"', () => {
    const isDeprecated = validateComment(
      {
        tag: 'Some tag',
        source: 'Some source'
      },
      null
    )

    expect(isDeprecated).toBeFalsy()
  })
})
