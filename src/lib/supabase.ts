
import { createClient } from '@supabase/supabase-js'

// These are safe to be in the browser because they're public credentials
const supabaseUrl = 'https://your-project-url.supabase.co'
const supabaseAnonKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
