import React, { FC } from 'react'
import { SITE_URL } from '../utils/constans'
import CTA from './cta'

const InstallButton: FC = () => {
  return (
    <CTA
      href={`https://app.hubspot.com/oauth/authorize?scope=crm.objects.contacts.read&redirect_uri=${SITE_URL}/auth-callback&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`}
    >
      Install
    </CTA>
  )
}

export default InstallButton
