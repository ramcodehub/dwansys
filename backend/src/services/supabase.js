const { createClient } = require('@supabase/supabase-js');

let supabase;

function getSupabase() {
  if (!supabase) {
    const url = process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_KEY;
    const anonKey = process.env.SUPABASE_KEY;
    const key = serviceKey || anonKey;
    
    if (!url || !key) {
      const err = new Error('Supabase env not configured properly');
      err.code = 'SUPABASE_CONFIG_MISSING';
      err.status = 500;
      err.details = {
        urlMissing: !url,
        keyMissing: !key,
        serviceKeyMissing: !serviceKey,
        anonKeyMissing: !anonKey
      };
      throw err;
    }
    
    // Create Supabase client with optimized settings
    supabase = createClient(url, key, {
      auth: { 
        persistSession: false,
        detectSessionInUrl: false
      },
      db: {
        schema: 'public'
      },
      global: {
        headers: {
          'X-Client-Info': 'dwansys-backend'
        }
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