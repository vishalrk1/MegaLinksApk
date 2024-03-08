import 'react-native-url-polyfill/auto'

import {createClient} from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://fbcvaqziriyvocuskspy.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZiY3ZhcXppcml5dm9jdXNrc3B5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk1NzA3NjUsImV4cCI6MjAwNTE0Njc2NX0.UcO47bPkv6aoS6P-oBvmDpPvkUX9UNr6tiYeD6dwFAw',
);
