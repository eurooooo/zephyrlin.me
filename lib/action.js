"use server";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createMessage(formData) {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  await prisma.message.create({
    data: {
      message: formData.get("message"),
      userId: user.id,
      userName: user.username || user.firstName,
      userImg: user.imageUrl,
    },
  });

  revalidatePath("/message");
}

export async function createBlogPost(formData) {
  console.log("formData: server", formData);

  await prisma.blogPost.create({
    data: {
      title: formData.get("title"),
      summary: formData.get("summary"),
      image: formData.get("image"),
      author: formData.get("author"),
      publishedAt: formData.get("publishedAt"),
      content: formData.get("content"),
    },
  });

  // revalidatePath("/admin/blog");
}
