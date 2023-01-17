import { createRenderer } from 'react-test-renderer/shallow'
import Content from '../Content'

import Modal from '../Modal'

const shallowRenderer = createRenderer()

describe('<Modal />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(
      <Modal isOpen>
        <Content>content</Content>
      </Modal>
    )
    const renderedOutput = shallowRenderer.getRenderOutput()
    expect(renderedOutput).toMatchSnapshot()
  })
})
