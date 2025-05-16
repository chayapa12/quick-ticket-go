
import { createClient } from '@supabase/supabase-js';

// Update with your actual Supabase project URL
const SUPABASE_URL = 'https://zkthdezdlpnotbiejqtq.supabase.co';
const SUPABASE_KEY = 'your-anon-public-key'; // You'll need to replace this with your actual anon key

// Create and export the Supabase client
// Note: In a real application, you would use environment variables for these values
const supabase = typeof window !== 'undefined' 
  ? createClient(SUPABASE_URL, SUPABASE_KEY)
  : null;

export { supabase };
