# Renaud Martin — Portfolio

A single home for six independent web tools and the thinking behind them.

**[Open the portfolio](https://rjamartin.github.io/)**

## Projects

| Project   | What it does                                | Live app                                                    | Source                                                          |
| --------- | ------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------- |
| Stockroom | Prepare supplier CSVs for Shopify imports   | [Try it](https://rjamartin.github.io/product-import-fixer/) | [Repository](https://github.com/RJAMartin/product-import-fixer) |
| Forma     | Resize, compress and convert images         | [Try it](https://rjamartin.github.io/image-studio/)         | [Repository](https://github.com/RJAMartin/image-studio)         |
| Folio     | Arrange, merge, rotate and split PDFs       | [Try it](https://rjamartin.github.io/pdf-workbench/)        | [Repository](https://github.com/RJAMartin/pdf-workbench)        |
| Tidy      | Clean CSV and TSV data                      | [Try it](https://rjamartin.github.io/csv-cleaner/)          | [Repository](https://github.com/RJAMartin/csv-cleaner)          |
| Goodwork  | Build quotes and invoices with PDF export   | [Try it](https://rjamartin.github.io/quote-builder/)        | [Repository](https://github.com/RJAMartin/quote-builder)        |
| Cleartext | Extract text from images in three languages | [Try it](https://rjamartin.github.io/image-to-text/)        | [Repository](https://github.com/RJAMartin/image-to-text)        |

These are independent portfolio projects, not client commissions. Screenshots come from the working applications; the Cleartext card illustrates its sample text workflow; no adoption or business-impact metrics are claimed.

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

The page uses semantic HTML and CSS, with a small JavaScript enhancement for preparing project requests. Navigation and expandable project details work without JavaScript. The form also provides a direct email fallback when scripting is disabled. All assets are local; there are no analytics, remote fonts or trackers.

## Publishing

The GitHub repository is `RJAMartin/rjamartin.github.io`, giving the site the root address `https://rjamartin.github.io/`. Each app keeps its own repository and project URL.

Set **Settings → Pages → Source** to **GitHub Actions**. Run **Actions → Deploy to GitHub Pages → Run workflow** on `main` to publish. Pushes and pull requests run the build without deploying.

## Updating the portfolio

Edit project descriptions and destinations in `index.html`. Keep the live app, source and case-study links together. Add an actual screenshot under `assets/`, with accurate image dimensions and descriptive alt text. Update the visible project count when adding or removing projects.

The request form prepares an email to the public contact address, rmartin1995@gmail.com. Visitors must send it in their email app; the site does not submit, store or email anything itself. Copy and plain-text download options provide fallbacks. Change the recipient in `request-model.js`, the form copy and the fallback messages together when updating the address. Keep the heading metadata and social preview aligned with any changes to the site’s identity.

Screenshots and descriptions document each app's current scope; consult its repository for limitations.
