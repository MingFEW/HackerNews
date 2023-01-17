import Skeleton from 'react-loading-skeleton'
import { createRenderer } from 'react-test-renderer/shallow'

import { SkeletonTheme } from '../SkeletonTheme'

const shallowRenderer = createRenderer()

describe('<SkeletonTheme />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(
      <SkeletonTheme>
        <Skeleton count={3} />
      </SkeletonTheme>
    )
    const renderedOutput = shallowRenderer.getRenderOutput()
    expect(renderedOutput).toMatchSnapshot()
  })

  it('should match snapshot when props changed', () => {
    shallowRenderer.render(
      <SkeletonTheme baseColor="#fff" highLightColor="#333">
        <Skeleton count={3} />
      </SkeletonTheme>
    )
    const renderedOutput = shallowRenderer.getRenderOutput()
    expect(renderedOutput).toMatchSnapshot()
  })
})
