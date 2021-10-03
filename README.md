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
create policy "Public profiles are viewable by everyone." on public.users for select using (auth.uid() = id);
create policy "Can insert user" on public.users for insert with check (auth.uid() = id);
create policy "Can update user" on public.users for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "Can delete user" on public.users for delete using (auth.uid() = id);

create type mood as enum ('firebase_auth', 'firestore');

create table if not exists public.portals (
  hub_id int4 not null primary key,
  refresh_token text not null,
  access_token text not null,
  expires_in int4 not null,

);
comment on table public.portals is 'Holds information about each portals';
create policy "Users can view their own portals" on public.portals for select using (auth.uid() in (select user_id from public.user_portal where hub_id = hub_id));
create policy "Users can update their own portals" on public.portals for select using (auth.uid() in (select user_id from public.user_portal where hub_id = hub_id)) with check(refresh_token = refresh_token and access_token = access_token and expires_in = expires_in );

alter table public.portals enable row level security;

create table if not exists public.user_portal (
  user_id uuid references public.users not null,
  hub_id int4 references public.portals not null,
  primary key(user_id, hub_id)
);
comment on table public.user_portal is 'Relational table between users and portals';

alter table public.user_portal enable row level security;
create policy "Can view your own portals" on public.user_portal for select using (auth.uid() = user_id);
```