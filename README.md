# Sigilweaver Blog

[![CI](https://github.com/Sigilweaver/Blog/actions/workflows/ci.yml/badge.svg)](https://github.com/Sigilweaver/Blog/actions/workflows/ci.yml)

The blog at <https://sigilweaver.app/blog/\>. Standalone
[Docusaurus](https://docusaurus.io/) instance, deployed to
Cloudflare Workers.

## Develop

```sh
bun install
bun run dev          # http://localhost:25813/blog/
```

## Add a post

Drop a YYYY-MM-DD-slug.md (or .mdx) under `blog/` with front-matter:

```markdown
---
slug: my-slug
title: My Title
authors: [nathan]
tags: [lance, proteomics]
---

Short summary that shows up in the index...

<!-- truncate -->

...rest of the post.
```

Author slugs live in `blog/authors.yml`. Tag slugs live in `blog/tags.yml`.

## Deploy

CI auto-deploys `main` via Cloudflare Workers. For a manual deploy:

```sh
bun run deploy       # builds to ./build/blog/ then `wrangler deploy`
```

## License

Posts are licensed CC-BY-SA 4.0 unless otherwise noted in the
front-matter. Code samples embedded in posts are Apache-2.0 to match
the rest of the Sigilweaver suite. The site infrastructure (config,
theme tweaks) is MIT.
