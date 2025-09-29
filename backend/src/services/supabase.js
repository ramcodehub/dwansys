const { createClient } = require('@supabase/supabase-js');

let supabase;
function getSupabase() {
  if (!supabase) {
    const url = process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_KEY;
    const anonKey = process.env.SUPABASE_KEY;
    const key = serviceKey || anonKey;
    
    // Log configuration for debugging (without exposing secrets)
    console.log('Supabase config:', {
      url: url ? `${url.substring(0, 20)}...` : 'MISSING',
      hasServiceKey: !!serviceKey,
      hasAnonKey: !!anonKey,
      usingServiceKey: !!serviceKey
    });
    
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
    supabase = createClient(url, key, { auth: { persistSession: false } });
  }
  return supabase;
}

module.exports = { getSupabase };