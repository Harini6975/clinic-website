import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// Supports both VITE_SUPABASE_ANON_KEY and the new VITE_SUPABASE_PUBLISHABLE_KEY
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase Environment Variables. Check your .env file or Vercel settings.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);