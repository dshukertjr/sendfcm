import { createClient } from '@supabase/supabase-js'

const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const NEXT_PUBLIC_SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY

export const SITE_NAME = 'Send FCM'
export const SITE_URL = 'https://sendfcm.vercel.app'

export const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL ?? '', NEXT_PUBLIC_SUPABASE_KEY ?? '')
