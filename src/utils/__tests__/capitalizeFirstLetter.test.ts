import { capitalizeFirstLetter } from '../capitalizeFirstLetter'

describe('capitalizeFirstLetter', () => {
  it('should return the first uppercase character', () => {
    expect(capitalizeFirstLetter('test')).toBe('Test')
    expect(capitalizeFirstLetter('abc')).toBe('Abc')
  })
})
