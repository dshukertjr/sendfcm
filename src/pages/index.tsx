import type { NextPage } from 'next'
import Head from 'next/head'
import { SITE_NAME, SITE_URL } from '../utils/constans'

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Send FCM from your HubSpot portal. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <a
          className="bg-yellow-500 p-4 text-white block"
          target="blank"
          href={`https://app.hubspot.com/oauth/authorize?scope=crm.objects.contacts.read&redirect_uri=${SITE_URL}/auth-callback&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`}
        >
          Install
        </a>
      </main>
    </div>
  )
}

export default HomePage
