const { createClient } = require('@supabase/supabase-js');

let supabase;

function getSupabase() {
  try {
    if (!supabase) {
      const url = process.env.SUPABASE_URL;
      const serviceKey = process.env.SUPABASE_SERVICE_KEY;
      
      if (!url) {
        throw new Error('SUPABASE_URL is not configured');
      }
      
      if (!serviceKey) {
        throw new Error('SUPABASE_SERVICE_KEY is not configured');
      }
      
      console.log('Initializing Supabase client with:', {
        url,
        hasServiceKey: !!serviceKey
      });
      
      // Create Supabase client with minimal configuration
      supabase = createClient(url, serviceKey, {
        auth: { 
          persistSession: false,
          detectSessionInUrl: false
        }
      });
    }
    return supabase;
  } catch (error) {
    console.error('Error initializing Supabase client:', error);
    throw error;
  }
}

// Function to reset the Supabase client (useful for testing or reconnecting)
function resetSupabase() {
  supabase = null;
}

module.exports = { getSupabase, resetSupabase };