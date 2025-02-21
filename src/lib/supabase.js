import { createClient } from '@supabase/supabase-js';

// استبدل القيم التالية بـ Supabase URL و Public Key الخاصين بمشروعك
const supabaseUrl = 'https://yrdrmzwazzoylrszsvyz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyZHJtendhenpveWxyc3pzdnl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxMzU5MzksImV4cCI6MjA1NTcxMTkzOX0.8fwuSII60s2bFeUw4MtIRFk3QDY2dcWysyBsGpbpD6Q';

export const supabase = createClient(supabaseUrl, supabaseKey);