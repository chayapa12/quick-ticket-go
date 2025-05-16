
import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase credentials
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_KEY = 'your-anon-public-key';

// Create and export the Supabase client
// Note: In a real application, you would use environment variables for these values
const supabase = typeof window !== 'undefined' 
  ? createClient(SUPABASE_URL, SUPABASE_KEY)
  : null;

export { supabase };
