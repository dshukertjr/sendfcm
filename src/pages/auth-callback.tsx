import { createClient } from '@supabase/supabase-js'
import axios from 'axios'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import LPFooter from '../components/lp/footer'
import LPHeader from '../components/lp/header'
import SimpleLayout from '../components/simple-layout'
import { CLIENT_ID, SITE_NAME, SITE_URL, SUPABASE_URL } from '../utils/constans'
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

      <LPHeader></LPHeader>

      <SimpleLayout>
        <div>
          {installed
            ? 'FCM has been installed on your HubSpot portal. You can contact tyler@dshukertjr.dev to procede with the setup.'
            : 'Not installed'}
        </div>
        <div>{errorMessage}</div>
      </SimpleLayout>

      <LPFooter></LPFooter>
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
    const clientSecret = process.env.CLIENT_SECRET as string
    const values: TokenRequest = {
      grant_type: 'authorization_code',
      client_id: CLIENT_ID,
      client_secret: clientSecret,
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

    const { data: portalData } = await axios.get<{ hub_id: string }>(
      `https://api.hubapi.com/oauth/v1/access-tokens/${tokenData.access_token}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )

    const supabaseAdmin = createClient(SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY as string)

    const { error } = await supabaseAdmin.from('portals').upsert({
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
