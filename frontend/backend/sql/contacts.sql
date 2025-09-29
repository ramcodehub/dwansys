-- Contacts table for Dwansys
create extension if not exists pgcrypto;

create table if not exists public.Dwansyscontacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  company text,
  subject text not null,
  message text not null,
  ip text,
  user_agent text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists dwansyscontacts_set_updated_at on public.Dwansyscontacts;
create trigger dwansyscontacts_set_updated_at
before update on public.Dwansyscontacts
for each row execute function public.set_updated_at();

-- Optional indexes
create index if not exists dwansyscontacts_created_at_idx on public.Dwansyscontacts (created_at desc);
create index if not exists dwansyscontacts_email_idx on public.Dwansyscontacts (email);