# 📸 Content Manager Guide

This guide is for anyone responsible for updating the "It's Chill" website with new photos, videos, or text posts. **No coding knowledge is required.**

## 1. Adding Media to the Gallery
To add new photos or videos to the gallery, follow these steps:

1.  **Navigate to the Uploads Folder**:
    Go directly to the [GitHub Upload Interface](https://github.com/AviFried/itschill/upload/main/public/uploads).
    *(Note: You must be logged in to GitHub and have permissions for the repository).*

2.  **Upload Your Files**:
    - **Drag and Drop**: Simply drag your images (`.jpg`, `.png`, `.webp`) or videos (`.mp4`, `.mov`) into the browser window.
    - **Guidelines**: 
        - **Videos**: Keep videos under **30 seconds** and **50MB** for the best performance.
        - **Naming**: Use simple names like `summer-vibe.jpg` (avoid spaces if possible).

3.  **Commit Your Changes**:
    - Scroll down to the "Commit changes" box.
    - Type a short message (e.g., "Added winter surf photos").
    - Click the **green "Commit changes" button**.

4.  **Wait for the Live Update**:
    - The website will automatically detect the new files and rebuild itself.
    - This usually takes **1–2 minutes**. You can see the result at [itschill.org/media](https://itschill.org/media).

---

## 2. Advanced: Curated Posts
If you want to create a post with a specific **Title** and **Custom Date**, you can create a "Curated Post".

1.  Go to the [Posts Directory](https://github.com/AviFried/itschill/tree/main/src/content/posts).
2.  Click **Add file** -> **Create new file**.
3.  Name it something like `my-new-post.md`.
4.  Paste the following "Frontmatter" at the very top:

```markdown
---
title: "Your Awesome Title"
date: 2025-12-18
image: "/uploads/your-image-name.jpg"
---
```

5.  Commit the file as described in the steps above.

---

## 💡 Best Practices
- **Recency**: The gallery displays the newest uploads first based on the file's "Last Modified" date on GitHub.
- **Analytics**: To see who is visiting the site, log in to your **Google Analytics** dashboard (Property: `It's Chill`).
- **Issues?**: If the site doesn't update after 5 minutes, contact the lead developer.
