import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import InstallButton from '../components/install-button'
import Section from '../components/lp/section'
import { SITE_NAME } from '../utils/constans'
import Footer from '../components/lp/footer'
import Pricing from '../components/lp/pricing'

const Page: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Send FCM from your HubSpot portal. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-yellow px-4 text-center relative overflow-hidden md:text-left">
        <img
          className="absolute bottom-0 right-0 left-0 z-0 md:hidden"
          src="/images/sm-header-ellipse.svg"
          alt=""
        />
        <img
          className="hidden absolute bottom-0 right-0 z-0 md:block"
          src="/images/header-ellipse.svg"
          alt=""
        />
        <img
          className="absolute right-28 top-3 hidden md:block"
          src="/images/patterns/triangles.svg"
          alt=""
        />
        <img
          className="absolute -left-4 bottom-0 hidden md:block"
          src="/images/patterns/lines.svg"
          alt=""
        />

        <div className="relative md:max-w-5xl md:m-auto">
          <div className="logo flex items-center py-4">
            <img className="w-9 h-9" src="/images/logo.svg" alt="FCM Hub logo" />
            <span className="text-2xl block pl-2 font-bold">FCM Hub</span>
          </div>

          <div className="md:flex md:py-10">
            <div className="w-1/2">
              <h1 className="text-5xl py-14">Send FCM from your HubSpot portal</h1>

              <InstallButton></InstallButton>
            </div>
            <img className="w-1/2 py-14" src="/images/notification.svg" alt="" />
          </div>
        </div>
      </header>

      <main className="relative">
        <img className="absolute top-96 hidden md:block" src="/images/lp/main-ellipse.svg" alt="" />
        <img
          className="absolute top-1/2 right-0 transform -rotate-180 hidden md:block"
          src="/images/lp/main-ellipse.svg"
          alt=""
        />
        <div className="relative">
          <Section
            title="Send personalized push notifications from your workflow"
            imageUrl="/images/lp/workflow.png"
            isTextLeft={false}
            patternUrl="/images/patterns/waves.svg"
          ></Section>
          <Section
            title="Send 1 on 1 notifications to your contacts"
            imageUrl="/images/lp/workflow.png"
            isTextLeft={true}
            patternUrl="/images/patterns/arrow.svg"
          ></Section>
          <Section
            title="See the history of notifications on contact's activity timeline"
            imageUrl="/images/lp/workflow.png"
            isTextLeft={false}
            patternUrl="/images/patterns/squares.svg"
          ></Section>

          <Pricing></Pricing>
        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}

export default Page
