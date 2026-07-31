import postsData from "@/data/posts.json";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  thumbnail: string;
  date: string;
  author: string;
  content: string[];
};

export const posts = postsData as Post[];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
