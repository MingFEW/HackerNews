import { createRenderer } from 'react-test-renderer/shallow'

import { Header } from '../index'

const shallowRenderer = createRenderer()

describe('<Header />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<Header />)
    const renderedOutput = shallowRenderer.getRenderOutput()
    expect(renderedOutput).toMatchSnapshot()
  })
})
