import { createClient } from '@supabase/supabase-js'

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string
export const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY as string

export const APP_ID = parseInt(process.env.NEXT_PUBLIC_APP_ID || '0')
export const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || ''

export const SITE_NAME = 'FCM Hub'
export const SITE_URL = 'https://sendfcm.vercel.app'

export const supabase = createClient(SUPABASE_URL ?? '', SUPABASE_KEY ?? '')

export const eventTemplateIds = {
  sentNotification: '1077827',
}
