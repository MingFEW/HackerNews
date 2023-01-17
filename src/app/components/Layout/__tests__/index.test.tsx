import { createRenderer } from 'react-test-renderer/shallow'

import { PageWrapper } from '../index'

const shallowRenderer = createRenderer()

describe('<PageWrapper />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<PageWrapper>Content</PageWrapper>)
    const renderedOutput = shallowRenderer.getRenderOutput()
    expect(renderedOutput).toMatchSnapshot()
  })
})
