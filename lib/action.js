"use server";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createMessage(formData) {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  // if (!formData.get("message")) {
  //   return { message: "Please enter something!" };
  // }

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
