const { createClient } = require('@supabase/supabase-js');

let supabase;

function getSupabase() {
  if (!supabase) {
    const url = process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_KEY;
    
    if (!url || !serviceKey) {
      throw new Error('Supabase configuration missing: SUPABASE_URL and SUPABASE_SERVICE_KEY are required');
    }
    
    // Create Supabase client with minimal configuration
    supabase = createClient(url, serviceKey, {
      auth: { 
        persistSession: false,
        detectSessionInUrl: false
      }
    });
  }
  return supabase;
}

// Function to reset the Supabase client (useful for testing or reconnecting)
function resetSupabase() {
  supabase = null;
}

module.exports = { getSupabase, resetSupabase };