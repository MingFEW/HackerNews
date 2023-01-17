import { createRenderer } from 'react-test-renderer/shallow'

import { Tag } from '../Tag'

const shallowRenderer = createRenderer()

describe('<Tag />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<Tag title="story" />)
    const renderedOutput = shallowRenderer.getRenderOutput()
    expect(renderedOutput).toMatchSnapshot()
  })
})
