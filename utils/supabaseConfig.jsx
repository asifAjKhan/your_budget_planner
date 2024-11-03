import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://bkpywesqgnhsjkafezqy.supabase.co',
                                     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrcHl3ZXNxZ25oc2prYWZlenF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NDM2NzksImV4cCI6MjA0NjIxOTY3OX0.13i1YhAP4ici8C-DycEK9j0yhUTriUOmCyeNwGu-NO0')
