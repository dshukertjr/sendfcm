import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import InstallButton from '../components/install-button'
import Section from '../components/lp/section'
import { SITE_NAME } from '../utils/constans'
import Footer from '../components/footer'
import Pricing from '../components/lp/pricing'

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Send FCM from your HubSpot portal. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-yellow px-4 text-center relative overflow-hidden">
        <img
          className="absolute bottom-0 right-0 left-0 z-0"
          src="/images/sm-header-ellipse.svg"
          alt=""
        />

        <div className="logo flex items-center py-4">
          <img className="w-9 h-9" src="/images/icon.svg" alt="FCM Hub logo" />
          <span className="text-2xl block pl-2 font-bold">FCM Hub</span>
        </div>

        <h1 className="text-5xl py-14 relative">Send FCM from your HubSpot portal</h1>

        <div className="relative">
          <InstallButton></InstallButton>
        </div>

        <img className="relative py-14" src="/images/notification.svg" alt="" />
      </header>

      <main>
        <Section
          title="Send personalized push notifications from your workflow"
          imageUrl="/images/workflow.png"
          isTextLeft={false}
        ></Section>
        <Section
          title="Send 1 on 1 notificationn to a conntact"
          imageUrl="/images/workflow.png"
          isTextLeft={true}
        ></Section>
        <Section
          title="See the history of notificationns on contact timelinen"
          imageUrl="/images/workflow.png"
          isTextLeft={false}
        ></Section>

        <Pricing></Pricing>
      </main>

      <Footer></Footer>
    </div>
  )
}

export default HomePage
