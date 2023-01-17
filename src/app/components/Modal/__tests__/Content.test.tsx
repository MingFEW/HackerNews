import { createRenderer } from 'react-test-renderer/shallow'

import Content from '../Content'

const shallowRenderer = createRenderer()

describe('<Content />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<Content>content</Content>)
    const renderedOutput = shallowRenderer.getRenderOutput()
    expect(renderedOutput).toMatchSnapshot()
  })
})
