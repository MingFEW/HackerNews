import { createRenderer } from 'react-test-renderer/shallow'

import Header from '../Header'

const shallowRenderer = createRenderer()

describe('<Header />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(
      <Header
        title="story"
        onClose={() => {
          // eslint-disable-next-line no-console
          console.log('click')
        }}
      />
    )
    const renderedOutput = shallowRenderer.getRenderOutput()
    expect(renderedOutput).toMatchSnapshot()
  })
})
