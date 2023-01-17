import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { NotFoundPageMeta } from '@/constants/AppConfig'
import 'twin.macro'

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{NotFoundPageMeta.title}</title>
        <meta name="description" content={NotFoundPageMeta.title} />
      </Helmet>
      <div tw="flex h-screen justify-center items-center">
        <h1 tw="h-fit text-white text-4xl">Not found page</h1>
      </div>
    </>
  )
}
