import prisma from "@/lib/db";

export async function getBlogBySlug(slug) {
  const blogPost = await prisma.blogPost.findUnique({
    where: { id: slug },
  });

  if (!blogPost) {
    throw new Error(`Blog post with slug "${slug}" not found`);
  }

  return {
    metadata: {
      title: blogPost.title,
      summary: blogPost.summary,
      image: blogPost.image,
      author: blogPost.author,
      publishedAt: new Date(blogPost.publishedAt).toLocaleDateString("en-US"),
      slug: slug,
    },
    content: blogPost.content,
  };
}

export async function getBlogs() {
  const blogPosts = await prisma.blogPost.findMany({
    orderBy: { publishedAt: "desc" },
  });

  return blogPosts.map((post) => ({
    title: post.title,
    summary: post.summary,
    image: post.image,
    author: post.author,
    publishedAt: new Date(post.publishedAt).toLocaleDateString("en-US"),
    slug: post.id,
  }));
}
