# FreestyleHub

FreestyleHub is a website dedicated to showcasing information about Urban
Roosters' Freestyle Master Series (FMS). On FreestyleHub, users can explore and
access relevant data about the various FMS events taking place in different
countries.

The platform provides up-to-date information about the events, participants,
results, rankings, and more. FreestyleHub aims to provide FMS fans with a
centralized hub for detailed and updated information on freestyle competitions,
promoting the dissemination and enjoyment of this urban art form.

## Developing

Before running the development server, set up the following environment
variables in your `.env` file:

- `MONGODB_URI`
- `JWT_SECRET`

Once you've installed dependencies with `pnpm i`, start a development server:

```bash
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev --open
```

## Building

To create a production version:

```bash
pnpm build
```

You can preview the production build with `pnpm preview`.

## Built With

- [SvelteKit](https://kit.svelte.dev) - A framework for building web
  applications with Svelte.
- [MongoDB](https://www.mongodb.com) - A NoSQL database for storing data.
- [Prisma](https://www.prisma.io) - A modern database toolkit for TypeScript and
  Node.js.
- [UnoCSS](https://unocss.dev) - A utility-first CSS framework for rapid
  development.

## License

This project is licensed under the Apache License 2.0 - see the
[LICENSE](LICENSE) file for details.
