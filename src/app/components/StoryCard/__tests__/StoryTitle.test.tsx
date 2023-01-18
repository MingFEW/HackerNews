import { createRenderer } from 'react-test-renderer/shallow'

import { StoryTitle } from '../StoryTitle'

const shallowRenderer = createRenderer()

// Need time to write react-i18next jest
// ...

describe('<StoryTitle />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<StoryTitle url="https://localhost.com" title="story name" />)
    const renderedOutput = shallowRenderer.getRenderOutput()
    expect(renderedOutput).toMatchSnapshot()
  })
})
