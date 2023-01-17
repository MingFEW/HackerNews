import { formatTime } from '../formatTime'

describe('formatTime', () => {
  it('should return relative time (time ago)', () => {
    expect(formatTime(1673919481)).toContain('ago')
  })
})
