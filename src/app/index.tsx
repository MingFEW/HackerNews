/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { AppConfig } from '@/constants/AppConfig'

import { HomePage } from './pages/Home/Loadable'
import { NotFoundPage } from './pages/NotFound/Loadable'
import { PageWrapper } from './components/Layout'
import { useStoriesSlice } from '@/state/stories/reducer'
import { useApiSlice } from '@/services/api'

export const App: React.FC = () => {
  const { i18n } = useTranslation()

  /**
   * Inject reducers
   */
  useStoriesSlice()
  useApiSlice()

  return (
    <BrowserRouter>
      <Helmet titleTemplate={AppConfig.title} defaultTitle={AppConfig.title} htmlAttributes={{ lang: i18n.language }}>
        <meta name="description" content={AppConfig.description} />
      </Helmet>

      <PageWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  )
}
