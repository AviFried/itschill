# 🛠 Developer Guide

Welcome to the technical side of "It's Chill". This site is a static site generated using **Astro 5**.

## Project Architecture

### Media Discovery
The media gallery (`/media`) uses a hybrid discovery approach:
1.  **Content Collections**: Defined in `src/content/config.ts`. These are Markdown files in `src/content/posts/` used for curated posts with metadata.
2.  **Raw FS Discovery**: The gallery logic in `src/pages/media/index.astro` and `src/pages/media/[...slug].astro` uses `node:fs` to scan the `public/uploads` directory. This allows for the simple "Drag & Drop" workflow used by Content Managers.

### Styling
- **Location**: `src/styles/global.css`
- **Design System**: Uses CSS variables at the `:root` for colors and spacing.
- **Effects**: Heavy use of `backdrop-filter` (glassmorphism) and scroll-reveal observers (`intersection-observer` in scripts).

---

## Local Development

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:4321`.

3.  **Build for Production**:
    ```bash
    npm run build
    ```
    The output will be in the `dist/` folder.

---

## Core Logic & Routing
- **`src/pages/index.astro`**: The flagship landing page.
- **`src/pages/media/index.astro`**: The masonry-style gallery.
- **`src/pages/media/[...slug].astro`**: Dynamic route for individual media items.
- **`src/utils/slugify.ts`**: Handles generating consistent URLs for raw file uploads based on filenames and timestamps.

---

## Maintenance
- **Astro Transitions**: The site uses `ClientRouter` for smooth navigation. Ensure any global script logic is re-initialized on `astro:page-load`.
- **Image Optimization**: Astro handles standard images, but large videos in `public/` are served direct. Keep an eye on the `dist` size as the library grows.
