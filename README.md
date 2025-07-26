# ThickerSkin

This repository contains a small static website for the **ThickerSkin** brand. The site is built entirely with HTML and Tailwind CSS. All pages live inside the `thickerskin.blog/` directory.

## Development

1. Make your changes locally and commit them to this repository.
2. Create a GitHub repository and push the contents of this directory to it:
   ```bash
   git remote add origin <your-github-url>
   git push -u origin main
   ```
3. Import the repository into [Vercel](https://vercel.com/import/git). When prompted, choose the root directory of the project (this folder) and select **Static** as the framework. Vercel will deploy the HTML files as-is.

## Structure

- `index.html` – landing page linking to the rest of the site.
- `thickerskin.blog/forge/` – landing page for products.
- `thickerskin.blog/diagnostic/` – the “Archetype Diagnostic.”
- `thickerskin.blog/blog/` – placeholder for blog posts.
- `thickerskin.blog/digital-products/` – placeholder for digital goods.
- `thickerskin.blog/physical-products/` – placeholder for physical goods.
- `thickerskin.blog/email-templates/` – placeholder for newsletter templates.

Feel free to replace the placeholder content with your own pages. Once connected to GitHub and Vercel, any changes pushed to `main` will automatically trigger a new deployment.
