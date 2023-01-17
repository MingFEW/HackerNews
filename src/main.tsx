import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import ReactDOM from 'react-dom/client'
import { GlobalStyles } from 'twin.macro'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { App } from './app'

import { configureAppStore } from './store/configureStore'

import './locales/i18n'

import '@/styles/css/globals.css'
import 'react-loading-skeleton/dist/skeleton.css'

const store = configureAppStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <HelmetProvider>
      {/* <React.StrictMode> */}
      <GlobalStyles />
      <App />
      {/* </React.StrictMode> */}
    </HelmetProvider>
  </Provider>
)

// Hot reloadable translation json files
if (import.meta.hot) {
  // eslint-disable-next-line @typescript-eslint/no-extra-semi
  import.meta.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  })
}
