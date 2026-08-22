# Whimsical Pond Tails — Book One (Flipbook)

A realistic page-curl flipbook of the "Whimsical Pond Tails" story, built with plain
HTML/CSS/JS (no build step) so it can be hosted straight from GitHub Pages.

## Folder structure
```
flipbook-story/
├── index.html      ← the whole book: cover, 10 story pages, back cover
├── style.css        ← dreamy storybook styling
├── script.js         ← initializes the page-curl effect (StPageFlip)
└── images/          ← the 11 story illustrations
```

## How it works
- The page-curl animation comes from **StPageFlip**, loaded from a CDN
  (`unpkg.com/page-flip`) — no npm install needed, it just works once the
  page is online.
- Every page is a plain `<div class="page">` inside `#book` in `index.html`.
  Each one holds a page number, a title, the story text, and its illustration(s).
- Navigate with the on-screen arrow buttons, the bottom Prev/Next buttons,
  left/right arrow keys, or by dragging a page corner (works on touch too).

## Editing the story
Everything is in `index.html` — no separate data file, since this is a
finished, fixed story. To fix a typo or tweak a line, just edit the text
inside the relevant `<div class="page">...</div>` block and save.

To add **Book Two** later, the cleanest approach is a second page:
copy this whole folder to `book-two/`, swap in the new images/text, and
link the two books together from a simple landing page.

## Hosting on GitHub Pages
1. Push this folder to a repo (e.g. `flipbook-story`), with `index.html`
   at the repo root (or in `/docs` — just set that in step 3).
2. On GitHub: **Settings → Pages**.
3. Under "Build and deployment", set Source = "Deploy from a branch",
   pick `main` and `/ (root)`, then Save.
4. GitHub gives you a live URL like
   `https://yourusername.github.io/flipbook-story/` — that's your flipbook.

## Notes
- Images are already sized reasonably (largest ~250KB), so the whole book
  loads fast even on a slow connection.
- The book auto-sizes to the browser window (`size: "stretch"` in
  `script.js`), so it looks good on both desktop and mobile — it always
  stays in single-page mode rather than a two-page spread, since the
  story images are landscape.
- Everything is plain HTML/CSS/JS. No build step, no npm, nothing to
  install — open `index.html` directly in a browser and it works, or
  serve it through GitHub Pages.
