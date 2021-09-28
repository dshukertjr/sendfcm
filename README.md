# Send FCM

Send FCM is a tool to send Firebase Cloud Messaging push notifications from HubSpot. 

## Scheme

```sql
create table if not exists public.users (
  id uuid references auth.users on delete cascade not null primary key,
  name varchar(18) not null unique,
  description varchar(320) not null,
  image_url text,

  constraint username_validation check (char_length(name) >= 1)
);
comment on table public.users is 'Holds all of users profile information';

alter table public.users enable row level security;
create policy "Public profiles are viewable by everyone." on public.users for select using (true);
create policy "Can insert user" on public.users for insert with check (auth.uid() = id);
create policy "Can update user" on public.users for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "Can delete user" on public.users for delete using (auth.uid() = id);

create table if not exists public.portals (
  hub_id int4 not null primary key,
  refresh_token text not null,
  access_token text not null,
  expires_in int4 not null
);
comment on table public.portals is 'Holds information about each portals';

-- alter table public.users enable row level security;
-- create policy "Public profiles are viewable by everyone." on public.users for select using (true);
-- create policy "Can insert user" on public.users for insert with check (auth.uid() = id);
-- create policy "Can update user" on public.users for update using (auth.uid() = id) with check (auth.uid() = id);
-- create policy "Can delete user" on public.users for delete using (auth.uid() = id);
```