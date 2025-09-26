-- Subscribers table for Dwansys
create extension if not exists pgcrypto;

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
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

drop trigger if exists subscribers_set_updated_at on public.subscribers;
create trigger subscribers_set_updated_at
before update on public.subscribers
for each row execute function public.set_updated_at();

-- Optional indexes
create index if not exists subscribers_created_at_idx on public.subscribers (created_at desc);
create index if not exists subscribers_email_idx on public.subscribers (email);
