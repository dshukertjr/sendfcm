import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { SITE_NAME } from '../utils/constans'
import Footer from '../components/footer'
import Header from '../components/header'
import SimpleLayout from '../components/simple-layout'

const Page: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Send FCM from your HubSpot portal. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <SimpleLayout>Terms of service goes here.</SimpleLayout>

      <Footer></Footer>
    </div>
  )
}

export default Page
