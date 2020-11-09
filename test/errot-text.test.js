const { getErrorText } = require('../lib/error-text')

describe('getErrorText', () => {
  it('should contain line and source', () => {
    const errorText = getErrorText({
      line: 3,
      source: 'Some source'
    })

    expect(errorText).toContain(3)
    expect(errorText).toContain('Some source')
  })

  it('should have labels', () => {
    const errorText = getErrorText({
      line: 3,
      source: 'Some source'
    })

    expect(errorText).toContain('line: 3')
    expect(errorText).toContain('text: Some source')
  })
})
