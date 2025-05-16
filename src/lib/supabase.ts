
// Replace these with your actual Supabase credentials
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_KEY = 'your-anon-public-key';

// Create and export the Supabase client
// Note: In a real application, you would use environment variables for these values
let supabase: any;

// This ensures the supabase client is only created in the browser, not during SSR
if (typeof window !== 'undefined') {
  supabase = (window as any).supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
}

export { supabase };
