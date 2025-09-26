const { createClient } = require('@supabase/supabase-js');

let supabase;
function getSupabase() {
  if (!supabase) {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE || process.env.SUPABASE_ANON_KEY;
    if (!url || !key) {
      const err = new Error('Supabase env not configured');
      err.code = 'SUPABASE_CONFIG_MISSING';
      err.status = 500;
      throw err;
    }
    supabase = createClient(url, key, { auth: { persistSession: false } });
  }
  return supabase;
}

module.exports = { getSupabase };


