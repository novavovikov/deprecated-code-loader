const { isDeprecatedVersion } = require('../lib/version')

describe('isDeprecatedVersion', () => {
  it('should "false" - empty comment', () => {
    const isDeprecated = isDeprecatedVersion('', '2.0.0')

    expect(isDeprecated).toBeFalsy()
  })

  it('should "false" - invalid version in comment', () => {
    const isDeprecated = isDeprecatedVersion('Some comment 1.0.0', '2.0.0')

    expect(isDeprecated).toBeFalsy()
  })

  it('should "false" - comment version greater than app version', () => {
    const isDeprecated = isDeprecatedVersion('Some comment [2.0.1]', '2.0.0')

    expect(isDeprecated).toBeFalsy()
  })

  it('should "true" - comment version equal than app version', () => {
    const isDeprecated = isDeprecatedVersion('Some comment [2.0.0]', '2.0.0')

    expect(isDeprecated).toBeTruthy()
  })

  it('should "true" - comment version less than app version', () => {
    const isDeprecated = isDeprecatedVersion('Some comment [1.0.0]', '2.0.0')

    expect(isDeprecated).toBeTruthy()
  })
})
