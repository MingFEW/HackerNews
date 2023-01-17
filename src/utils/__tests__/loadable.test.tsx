import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { lazyLoad } from '../loadable'

const LazyComponenWithDefaultExport = lazyLoad(() => import('../../../internals/testing/loadable.mock'))

describe('loadable', () => {
  it('should render LazyComponent after waiting for it to load', async () => {
    let comp: any
    await act(() => {
      comp = render(<LazyComponenWithDefaultExport />)
    })
    expect(comp.container.firstChild).toMatchSnapshot()
  })
})
