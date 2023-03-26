## Experimentation

- [ ] Turborepo with Vercel
- [ ] NextJS Server Components / Streaming Updates
- [ ] Turbopack dev
- [ ] Tailwind
- [ ] Edge configurations
- [ ] Upstash to avoid calling home

NOTES:

- https://beta.nextjs.org/docs/routing/fundamentals

BUGS:

- turbopack, server components dont revalidate, dont show suspense boundaries ... works without turbo opt in
- still get get multiple suspense boundaries to flush independently on vercel edge/node runtime . seems to work on first request for a deploy ... rsc / app router bug
