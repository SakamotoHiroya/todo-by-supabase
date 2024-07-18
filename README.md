# Todo by supabase

## usage

1. Define variables in the .env file

Create a .env file in the root of the repository by referring to .env.example

.env.example
```
# Update these with your Supabase details from your project settings > API
# https://app.supabase.com/project/_/settings/api
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

DB_PASSWORD=your-db-password
```

```shell
$ npm run dev # npm
$ yarn dev # yarn
```

