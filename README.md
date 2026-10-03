# Renaud Martin — Portfolio

A single home for five independent web tools and the thinking behind them.

**[Open the portfolio](https://rjamartin.github.io/)**

## Projects

| Project   | What it does                              | Live app                                                    | Source                                                          |
| --------- | ----------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------- |
| Stockroom | Prepare supplier CSVs for Shopify imports | [Try it](https://rjamartin.github.io/product-import-fixer/) | [Repository](https://github.com/RJAMartin/product-import-fixer) |
| Forma     | Resize, compress and convert images       | [Try it](https://rjamartin.github.io/image-studio/)         | [Repository](https://github.com/RJAMartin/image-studio)         |
| Folio     | Arrange, merge, rotate and split PDFs     | [Try it](https://rjamartin.github.io/pdf-workbench/)        | [Repository](https://github.com/RJAMartin/pdf-workbench)        |
| Tidy      | Clean CSV and TSV data                    | [Try it](https://rjamartin.github.io/csv-cleaner/)          | [Repository](https://github.com/RJAMartin/csv-cleaner)          |
| Goodwork  | Build quotes and invoices with PDF export | [Try it](https://rjamartin.github.io/quote-builder/)        | [Repository](https://github.com/RJAMartin/quote-builder)        |

These are independent portfolio projects, not client commissions. Screenshots come from the working applications; no adoption or business-impact metrics are claimed.

## Run

Requires Node.js 22 or newer. There are no dependencies to install.

```sh
npm run dev
```

Open the printed local URL. Refresh after editing; the minimal server has no live reload.

```sh
npm run build
npm run preview
```

The build copies the public files into `dist/`. Both development and preview use port 5180; stop one before starting the other.

## Structure

- `index.html`: introduction, project cards, native expandable build notes, approach and contact links.
- `styles.css`: responsive layout, keyboard focus states and reduced-motion support.
- `assets/`: local copies of the projects’ real screenshots and the social preview.
- `404.html`: recovery page linking to the portfolio.
- `scripts/`: dependency-free build and local preview utilities.

The page uses semantic HTML and CSS, with no client-side JavaScript. Navigation and expandable project details work without a framework. All assets are local; there are no analytics, remote fonts or trackers.

## Publishing

The GitHub repository is `RJAMartin/rjamartin.github.io`, giving the site the root address `https://rjamartin.github.io/`. Each app keeps its own repository and project URL.

Set **Settings → Pages → Source** to **GitHub Actions**. Run **Actions → Deploy to GitHub Pages → Run workflow** on `main` to publish. Pushes and pull requests run the build without deploying.

## Updating the portfolio

Edit project descriptions and destinations in `index.html`. Keep the live app, source and case-study links together. Add an actual screenshot under `assets/`, with accurate image dimensions and descriptive alt text. Update the visible project count when adding or removing projects.

The contact section currently links to the public GitHub profile. Replace that link and its label when a preferred public email or professional profile is supplied. Keep the heading metadata and social preview aligned with any changes to the site’s identity.

Screenshots and descriptions document each app's current scope; consult its repository for limitations.
