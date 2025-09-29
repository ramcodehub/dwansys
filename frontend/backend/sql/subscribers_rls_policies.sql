-- RLS policies for subscribers table
-- Enable RLS
alter table public.subscribers enable row level security;

-- Allow everyone to insert (suitable for public subscription form)
drop policy if exists subscribers_insert_all on public.subscribers;
create policy subscribers_insert_all on public.subscribers
for insert
with check (true);

-- Allow anonymous read (optional)
drop policy if exists subscribers_read_all on public.subscribers;
create policy subscribers_read_all on public.subscribers
for select
using (true);

-- Allow updates/deletes only for service role (handled by Supabase key)
-- You can omit explicit policies; service role bypasses RLS.
