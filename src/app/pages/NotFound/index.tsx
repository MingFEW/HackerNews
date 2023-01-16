import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import 'twin.macro'

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Hacker Top Stories | Not found page</title>
        <meta name="description" content="This is not found page" />
      </Helmet>
      <div tw="flex h-screen justify-center items-center">
        <h1 tw="h-fit text-white text-4xl">Not found page</h1>
      </div>
    </>
  )
}
