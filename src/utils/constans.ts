import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY

export const APP_ID = parseInt(process.env.NEXT_PUBLIC_APP_ID || '0')
export const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || ''

export const SITE_NAME = 'Send FCM'
export const SITE_URL = 'https://sendfcm.vercel.app'

export const supabase = createClient(SUPABASE_URL ?? '', SUPABASE_KEY ?? '')
