![Glyph SDK Logo](https://glyph-storage.s3.eu-north-1.amazonaws.com/fill-image.png)

# Glyph SDK

[![npm version](https://img.shields.io/npm/v/glyph-sdk)](https://www.npmjs.com/package/glyph-sdk)

The official **Glyph SDK** for interacting with the Glyph blogging platform.  
Fetch full blog content, summaries, and metadata easily from the Glyph API.

---

## Features

- 🔥 Retrieve full blog posts for a specific user
- 📄 Fetch summaries and metadata of all blogs
- 🛠️ Easy integration in Node.js and browser projects
- 🧠 Fully typed with TypeScript for a smooth developer experience

---

## Installation

```bash
npm install glyph-sdk
# or
yarn add glyph-sdk
```

---

## Usage Example

```typescript
import { GlyphClient } from "glyph-sdk";

(async () => {
  try {
    const client = new GlyphClient("GLYPH_ACCESS_KEY");

    const { blogs } = await client.getAllBlogs();

    if (!blogs || blogs.length === 0) {
      throw new Error("No blogs found for this user.");
    }

    console.log("Fetched Blogs:", blogs);
  } catch (error) {
    console.error(
      "Error fetching blogs:",
      error instanceof Error ? error.message : error
    );
  }
})();
```

---

## 🛠️ Tech Stack

- Node.js
- TypeScript

---

## API Reference

| Method                | Description                                         |
| :-------------------- | :-------------------------------------------------- |
| `getAllBlogs()`       | Fetches all blog posts created by the user          |
| `getAllBlogDetails()` | Fetches summaries and metadata for the user's blogs |

---

## Notes

- You must have a valid `Glyph Access Key` (User ID) to use this SDK.
