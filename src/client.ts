// export class GlyphClient {
//   // private baseURL = "https://glyph-cms.vercel.app";
//   private baseURL = "http://localhost:3000"; // For test

import { Blog } from "./types";

//   constructor(private userId: string) {}

//   private async request(endpoint: string) {
//     const res = await fetch(`${this.baseURL}${endpoint}`, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ userId: this.userId }),
//       method: "POST",
//     });

//     if (!res.ok) {
//       const errorText = await res.text();
//       throw new Error(`API Error: ${errorText}`);
//     }

//     return res.json();
//   }

//   async getAllBlogs() {
//     return this.request("/api/blog/get-all-blog");
//   }

//   async getAllBlogDetails() {
//     return this.request("/api/blogs/summary");
//   }
// }

export class GlyphClient {
  constructor(
    private userId: string,
    private baseURL = "https://glyph-cms.vercel.app"
  ) {}

  private async request<T>(
    endpoint: string,
    method: "POST" | "GET" = "POST",
    body?: any
  ): Promise<T> {
    const res = await fetch(`${this.baseURL}${endpoint}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body:
        method === "POST"
          ? JSON.stringify(body || { userId: this.userId })
          : undefined,
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`API Error: ${errorText}`);
    }

    return res.json() as Promise<T>;
  }

  async getAllBlogs(): Promise<{ blogs: Blog[] }> {
    return this.request("/api/blog/get-all-blog");
  }

  // async getAllBlogDetails(): Promise<{ summaries: any[] }> {
  //   return this.request("/api/blogs/summary");
  // }
}
