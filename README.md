# FreestyleHub

This is a web application that uses [Supabase](https://supabase.io) as a
backend for storing data related to all Urban Roosters' FMS.

Before running the development server, please follow the steps below:

- Create a Supabase project
- Set up the following environment variables in your `.env` file:
  - `SUPABASE_URL`
  - `SUPABASE_KEY`

Once you have created your Supabase project and set up the environment
variables, you will need to add the following
[tables](src/lib/supabase/database.d.ts) to your Supabase database.

To run the development server, enter the following command in your terminal:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## Generating Supabase Types

To generate types directly from Supabase, follow these steps:

1. Log in to Supabase and obtain your access token.
2. Run the command `pnpm supabase login` in your terminal and provide your
   access token when prompted.
3. Obtain your project ID from the "Settings" page of your Supabase project.
4. To generate TypeScript types for your Supabase database, run the following
   command in your terminal:

```
pnpm supabase:types --project-id <your_project_id>
```

This command will use `supabase` to automatically generate TypeScript types for
your Supabase database and save them to `src/lib/supabase/database.d.ts`.
