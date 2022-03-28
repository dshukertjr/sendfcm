# Send FCM

Send FCM is a tool to send Firebase Cloud Messaging push notifications from HubSpot. 

## Run locally

1. Create file named `.env.local` in the root directory to set environment variables and copy the contents of `.env.local.sample`. 
1. Update `NEXT_PUBLIC_APP_ID`, `NEXT_PUBLIC_CLIENT_ID`, `CLIENT_SECRET` with your own [HubSpot App](https://developers.hubspot.com/docs/api/creating-an-app) in `.env.local`. 
1. Update `DEVELOPER_API_KEY` with your own [Developer API Key](https://legacydocs.hubspot.com/docs/faq/developer-api-keys) in `.env.local`. 
1. Ignore all the other values as they won't be needed to run basic OAuth flow in HubSpot. 

## Supabase Scheme

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