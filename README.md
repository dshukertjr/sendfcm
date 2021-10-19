# Send FCM

Send FCM is a tool to send Firebase Cloud Messaging push notifications from HubSpot. 

## Scheme

```sql
create table if not exists public.portals (
  hub_id int4 not null primary key,
  refresh_token text not null,
  access_token text not null,
  expires_in int4 not null
);
comment on table public.portals is 'Holds information about each portals';
alter table public.portals enable row level security;
```