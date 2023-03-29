## Experimentation

- [x] Turborepo with Vercel
- [x] NextJS Server Components / Streaming Updates
- [x] Turbopack dev
- [x] Tailwind server components next text
- [x] Remix streaming test
- [x] Edge configurations
- [x] Upstash severless test
- [x] Planetscale serverless test
- [x] Edge config + middleware test
- [ ] Parse vercel edge / home headers

NOTES:

- https://beta.nextjs.org/docs

BUGS:

- turbopack, server components dont revalidate, dont show suspense boundaries ... works without turbo opt in
- still get get multiple suspense boundaries to flush independently on vercel edge/node runtime . seems to work on first request for a deploy ... rsc / app router bug
