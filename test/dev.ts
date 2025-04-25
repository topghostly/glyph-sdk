import { GlyphClient } from "../src";

(async () => {
  try {
    const client = new GlyphClient("");

    const { blogs } = await client.getAllBlogs();

    if (!blogs || blogs.length === 0) {
      throw new Error("Empty Blog Data");
    }

    console.log("User Blogs:", blogs);
  } catch (error) {
    console.error(
      "Test failed:",
      error instanceof Error ? error.message : error
    );
  }
})();
