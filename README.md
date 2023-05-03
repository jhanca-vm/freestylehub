# FreestyleHub

This is a web application that uses [Supabase](https://supabase.io) as a
backend for storing data related to all FMS leagues.

Before running the development server, please follow the steps below:

- Create a Supabase project
- Set up the following environment variables in your `.env.local` file:
  - `BASE_URL="http://localhost:3000"`
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_KEY`

Once you have created your Supabase project and set up the environment
variables, you will need to add the following [tables](#supabase-tables) to your
Supabase database.

To run the development server, enter the following command in your terminal:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## Supabase Tables

These are the tables that the web app uses in its Supabase database:

- `freestyler`
  - `name` (string): name of the freestyler
  - `fms` (string): name of the freestyler's affiliated FMS
  - `group` (string): name of the freestyler's affiliated group (A or B)
  - `battles` (JSON array): array of `[opponent (string), points (number)]`
- `matchday`
  - `id` (string): unique identifier for the matchday
  - `number` (number): number of the matchday in the FMS's schedule
  - `fms` (string): name of the FMS to which the matchday belongs
  - `city` (string): name of the city where the matchday is taking place
  - `date` (string): date of the matchday in ISO format (YYYY-MM-DD)
  - `image` (string): URL of an image representing the matchday
- `transfer`
  - `id` (number): unique identifier for the transfer
  - `freestyler` (string): name of the freestyler being transferred
  - `from` (string, nullable): name of the freestyler's previous FMS, or `null`
    if they were a signing
  - `to` (string): name of the freestyler's new FMS

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
your Supabase database and save them to `src/services/database.d.ts`.
