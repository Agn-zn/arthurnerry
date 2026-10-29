# ARTIST ID — Arthur Nery Concept

> **Independent concept demonstration.** This is not Arthur Nery's official website.  
> It demonstrates the ARTIST ID NFC digital artist experience product using Arthur Nery as a musical and visual reference. Not affiliated with or endorsed by Arthur Nery or his management.

---

## Overview

A production-quality, mobile-first digital artist website designed to be the destination for a premium NFC digital business card.

When a fan taps the physical card, this page opens instantly — no app, no login, no friction. They can:

- Discover the artist's identity
- Listen to featured music on Spotify
- Explore a visual gallery
- Follow on all platforms
- Find upcoming shows
- Save professional contact details

**Tagline:** Your music. Your world. One tap away.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 6 | Dev server + build tool |
| Tailwind CSS 3 | Styling |
| Motion for React | Animations |
| Lucide React | Icons |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Customizing for a Different Artist

All artist-specific content lives in `src/data/`. You do not need to touch any component files.

### 1. `src/data/artist.js`

Central configuration. Replace:
- `name`, `firstName`, `lastName`
- `descriptor`, `tagline`, `heroTagline`
- `shortBio`, `longBio`
- `heroImage` — full-bleed portrait URL
- `portraitImage` — editorial portrait URL
- `social` — verified platform URLs
- `contact` — public professional contact info

### 2. `src/data/releases.js`

- `featuredRelease` — the main release shown in the music section
- `releases` — the additional releases grid

Replace `artworkUrl`, `spotifyUrl`, `appleMusicUrl`, `youtubeUrl`, and `spotifyEmbedUrl`.

To disable the Spotify embed: set `spotifyEmbedUrl: null`.

### 3. `src/data/gallery.js`

- Replace `src` and `thumb` with actual licensed photography
- Categories: `portrait | studio | live | backstage | editorial`
- `span` values: `tall | wide | normal`

### 4. `src/data/events.js`

Replace with verified upcoming events. Empty array shows a clean empty state.

---

## Replacing Placeholder Images

The demo uses Unsplash images as **visual placeholders** — they show the intended atmosphere but must be replaced with actual licensed artist photography before any real commercial use.

For each image:
1. Upload to `/public/images/` or your CDN
2. Update the `src` and `thumb` URLs in the data files

---

## vCard / Save Contact

The Save Contact feature (`src/utils/generateVCard.js`) generates a valid vCard 3.0 file and triggers a browser download. No backend needed.

Fields included when provided:
- Full name
- Professional email
- Business phone
- Organization / management company
- Website
- Instagram and Spotify

---

## NFC Card Configuration

To link a physical NFC card to this website:

1. Deploy to any static host (Vercel, Netlify, Cloudflare Pages)
2. Program the NFC chip with your deployed URL using NFC Tools (iOS/Android)
3. Test with multiple devices

The root URL loads directly — no routing, no redirect layers.

---

## Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag the dist/ folder to netlify.com/drop
```

### Cloudflare Pages
Connect your repo via the Cloudflare dashboard. Set build command to `npm run build` and output directory to `dist`.

---

## Open Graph Preview

Update `index.html` for proper social sharing:
- `og:title`
- `og:description`
- `og:image` — upload an actual image to `/public/images/og-image.jpg`
- `og:url` — your final deployed domain

---

## Notes

- No autoplay audio
- No backend, database, or authentication
- No intrusive popups
- Fully keyboard navigable
- Respects `prefers-reduced-motion`
- Lazy-loads all below-the-fold images
- Tested mobile-first at 375px, 390px, 768px, 1280px

---

## License & Disclaimer

This project is an independent concept demonstration for product design and development purposes.

Arthur Nery's name and publicly available biographical information are referenced under fair use for demonstration purposes only. All music platform links point to verified official artist destinations. Gallery images are Unsplash stock photography — they do not represent actual images of Arthur Nery.

**ARTIST ID** is the product concept. Replace all artist-specific content before deploying for a real artist.
