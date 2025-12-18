# Development & Maintenance Guide

This guide is for you (or any future developer) to maintain the site, make design changes, or add new features locally.

## Project Structure
- **`src/pages`**: Contains the main pages (`index.astro`) and the media gallery templates.
- **`src/content/posts`**: Where the raw curated post Markdown files live.
- **`src/styles`**: Contains `global.css` where all the site's styling is defined.
- **`public/uploads`**: Where automatically detected media files are stored.

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

### Adding New Content
- **Curated Posts**: Create a new `.md` file in `src/content/posts/`.
- **Quick Uploads**: Simply drop an image or video into `public/uploads/`.

### Updating Astro
Run `npm install` occasionally to keep dependencies up to date.
