-- Example RLS policies (adjust to your auth model)
-- Enable RLS
alter table public.Dwansyscontacts enable row level security;

-- Allow anonymous read (optional)
drop policy if exists dwansyscontacts_read_all on public.Dwansyscontacts;
create policy dwansyscontacts_read_all on public.Dwansyscontacts
for select using (true);

-- Allow inserts for everyone (or restrict based on auth)
drop policy if exists dwansyscontacts_insert_all on public.Dwansyscontacts;
create policy dwansyscontacts_insert_all on public.Dwansyscontacts
for insert with check (true);

-- Allow updates/deletes only for service role (handled by Supabase key)
-- You can omit explicit policies; service role bypasses RLS.


