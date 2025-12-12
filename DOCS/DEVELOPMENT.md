# Development & Maintenance Guide

This guide is for you (or any future developer) to maintain the site, make design changes, or add new features locally.

## Project Structure
- **`src/pages`**: Contains the main pages (`index.astro`) and the blog templates.
- **`src/content/posts`**: Where the raw blog post Markdown files live.
- **`src/styles`**: Contains `global.css` where all the site's styling is defined.
- **`public/admin`**: Contains the configuration for the Decap CMS (`config.yml`).

## Running Locally
To preview changes on your own computer:

1. **Open Terminal** (in VS Code or Command Prompt).
2. Navigate to the folder:
   ```bash
   cd path/to/itschill
   ```
3. **Start the server**:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:4321`.

## Common Tasks

### Changing the Design
- Open `src/styles/global.css`.
- Variables for colors (`--color-primary`, etc.) are at the top. Changing these updates the whole site.

### Adding a New Fields to the CMS
If you want to add a new option for blog posts (e.g., "Mood" or "Author"):
1. Open `public/admin/config.yml`.
2. Find the `fields` section under `posts`.
3. Add a new field:
   ```yaml
   - {label: "Mood", name: "mood", widget: "string"}
   ```
4. Update the Content Schema in `src/content/config.ts` to include the new field so Astro knows about it.
5. Update `src/pages/blog/[...slug].astro` to actually display the new field.

### Updating Astro
Run `npm install` occasionally to keep dependencies up to date.
