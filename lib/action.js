"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "@/app/auth";

export async function createMessage(formData) {
  const session = await auth();

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const user = session.user;

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

export async function signInAction(providerId) {
  await signIn(providerId);
}
export async function signOutAction() {
  await signOut();
}
