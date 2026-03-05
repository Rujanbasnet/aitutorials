# AI Tutorials

AI learning platform at [aitutorials.com.au](https://aitutorials.com.au). Built with Astro 5, Tailwind CSS v4, and MDX.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`    |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview build locally before deploying       |

## Deployment

Automatically deploys to GitHub Pages on push to `main` via GitHub Actions.

### Custom Domain Setup (DNS)

To point `aitutorials.com.au` to GitHub Pages:

1. **GoDaddy DNS** — Add 4 A records pointing to GitHub Pages:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

2. **GoDaddy DNS** — Add CNAME record:
   - Host: `www`
   - Points to: `rujanbasnet.github.io`

3. **GitHub repo Settings** > Pages > Custom domain: `aitutorials.com.au` > Enforce HTTPS

The live WordPress site won't be affected until DNS is switched.
