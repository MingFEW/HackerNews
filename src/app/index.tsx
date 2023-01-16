import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { AppConfig } from '@/constants/AppConfig'

import { useStoriesSlice } from '@/state/stories/reducer'

import { useApiSlice } from '@/services/api'

import { PageWrapper } from './components/Layout'
import { HomePage } from './pages/Home/Loadable'
import { NotFoundPage } from './pages/NotFound/Loadable'
import { useCommentsSlice } from '@/state/comments/reducer'

export const App: React.FC = () => {
  const { i18n } = useTranslation()

  /**
   * Inject reducers
   */
  useStoriesSlice()
  useCommentsSlice()
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
