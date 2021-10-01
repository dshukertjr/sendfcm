import axios from 'axios'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { CLIENT_ID, SITE_NAME, SITE_URL, supabase } from '../utils/constans'
import { TokenRequest } from '../utils/types'

const AuthCallbackPage: NextPage<{
  installed?: boolean
  errorMessage?: string
}> = ({ installed, errorMessage }) => {
  return (
    <div>
      <Head>
        <title>Auth Callback | {SITE_NAME}</title>
        <meta name="description" content="Send FCM from your HubSpot portal. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>{installed ? 'installed' : 'not installed'}</div>
        <div>{errorMessage}</div>
      </main>
    </div>
  )
}

export default AuthCallbackPage

export const getServerSideProps: GetServerSideProps<{
  installed?: boolean
  errorMessage?: string
}> = async ({ query }) => {
  const code = query.code as string

  if (!code) {
    // If this was not a redirect from OAuth, do nothing
    return {
      props: {},
    }
  }

  try {
    const values: TokenRequest = {
      grant_type: 'authorization_code',
      client_id: CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET || '',
      redirect_uri: `${SITE_URL}/auth-callback`,
      code: code,
    }
    const params = new URLSearchParams()
    Object.keys(values).forEach((key) => {
      params.append(key, values[key as keyof TokenRequest])
    })
    const { data: tokenData } = await axios.post<{
      refresh_token: string
      access_token: string
      expires_in: number
    }>('https://api.hubapi.com/oauth/v1/token', params, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        charset: 'utf-8',
      },
    })
    console.log('data', tokenData)
    console.log('\n')

    const { data: portalData } = await axios.get<{ hub_id: string }>(
      `https://api.hubapi.com/oauth/v1/access-tokens/${tokenData.access_token}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )

    const { error } = await supabase.from('portals').upsert({
      hub_id: portalData.hub_id,
      refresh_token: tokenData.refresh_token,
      access_token: tokenData.access_token,
      expires_in: tokenData.expires_in,
    })
    if (error) {
      return {
        props: {
          errorMessage: error.message,
        },
      }
    }
    return {
      props: {
        installed: true,
      },
    }
  } catch (err) {
    console.log(err)
    let errorMessage = 'Unknown Error Occured'
    if (err instanceof Error) {
      errorMessage = err.message
    }
    return {
      props: {
        errorMessage: errorMessage || 'Unknown Error Occured',
      },
    }
  }
}
