# Buckeye Pro's Junk Removal — Website

A single-page site for Buckeye Pro's Junk Removal. Plain HTML/CSS/JS — no build step, no framework, deploys to Vercel as-is.

## What's in here

```
index.html      All page content and structure (images embedded inline)
styles.css      All styling (black/red/white brand system)
script.js       Footer year + the quote form's email handoff
assets/
  logo.jpeg     Your original logo file, kept here for reference/future edits
  banner.jpeg   Your original banner file, kept here for reference/future edits
```

**Note on images:** the logo and banner are embedded directly inside `index.html` as base64 data, not loaded from the `assets/` folder. This was a deliberate fix — image files can get dropped when pushing to GitHub through the web UI (folders don't always upload cleanly), and embedding them removes that failure point entirely. The `assets/` folder is kept only so the original files are available if you want to swap in a new logo later.

## Run it locally

No build tools needed. Either:
- Open `index.html` directly in a browser, or
- From this folder, run `npx serve` (or any static server) and visit the printed URL

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), click **Add New → Project**, and import the repo.
3. Framework preset: choose **Other** (it's a static site — no build command, no output directory needed).
4. Click **Deploy**. That's it.

Every time you push to the repo's main branch, Vercel will redeploy automatically.

## Things to double-check before it goes live

- **Domain**: the banner image mentions `Buckeyepro.us`. If you own that domain, add it under your Vercel project's **Settings → Domains**. If you don't own it yet, register it first or update the visible references.
- **Phone numbers**: currently set to (614) 607-2115 and (380) 249-4555, used as real `tel:` links throughout. Double check these are the numbers you want public.
- **Email**: currently `buckeyeremoval@yahoo.com`, used for `mailto:` links and as the quote form's destination.
- **Service area**: currently says "Columbus & Central Ohio" — edit in `index.html` if that's not accurate.

## About the quote form

The "Request my quote" form doesn't use a backend — it opens the visitor's email app with a pre-filled message addressed to you. This works with zero setup, but it does require the visitor to have an email client configured (which most people do on desktop; less reliably on some phones).

**If you want the form to submit silently without opening email**, two easy upgrades:
- **[Formspree](https://formspree.io)** (free tier available): sign up, get a form endpoint, and change the form's behavior in `script.js` to `fetch()` that endpoint instead of building a `mailto:` link.
- **[EmailJS](https://www.emailjs.com)**: similar idea, sends email directly from the browser via their API.

Either just needs a few lines swapped in `script.js` — the form fields and validation stay the same.

## About the reviews section

This uses general, unattributed statements about customer feedback (no names, no quotation marks, no star ratings) rather than fabricated testimonials. Attaching a quote to a specific named customer who didn't actually say it can violate FTC endorsement guidelines and risks the site getting flagged by Google/Yelp if discovered. As real, verifiable reviews come in from customers, you can swap these out for actual quotes with permission — look for `<!-- REVIEWS -->` in `index.html`.

## Customizing content

Everything is plain HTML — open `index.html` and edit text directly. Key sections are labeled with comments (`<!-- HERO -->`, `<!-- SERVICES -->`, etc.) to make them easy to find. Colors and fonts are defined once at the top of `styles.css` under `:root` if you want to adjust the palette.
