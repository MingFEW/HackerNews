import { createRenderer } from 'react-test-renderer/shallow'

import { StoryMetadata } from '../StoryMetadata'

const shallowRenderer = createRenderer()

describe('<StoryMetadata />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<StoryMetadata author="test" time={1673919481} score={10} />)
    const renderedOutput = shallowRenderer.getRenderOutput()
    expect(renderedOutput).toMatchSnapshot()
  })
})
