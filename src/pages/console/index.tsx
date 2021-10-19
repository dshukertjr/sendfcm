import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { SITE_NAME } from '../../utils/constans'

const Page: NextPage = () => {
  return (
    <div>
      <Head>
        <title>コンソール | {SITE_NAME}</title>
        <meta name="description" content="Send FCM from your HubSpot portal. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-darkBlue py-2 px-6 flex items-center">
        <img className="h-8" src="/images/logo.svg" alt="logo" />
        <div className="text-white pl-3">{SITE_NAME}</div>
        <div className="flex-grow"></div>
      </header>

      <main></main>
    </div>
  )
}

export default Page
