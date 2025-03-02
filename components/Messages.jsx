import Image from "next/image";
import prisma from "@/lib/db";
import { formatDistanceToNow } from "date-fns";

export default async function Messages() {
  const messages = await getMessages();

  return (
    <ul className="flex flex-col space-y-2">
      {messages.map((message, index) => (
        <li key={message.id}>
          <div className="flex items-start gap-3 my-1">
            <div className="flex flex-col items-center shrink-0 gap-2">
              <Image
                src={message.userImg}
                width={40}
                height={40}
                alt="user profile image"
                className="mb-1 rounded-full"
              />
              {index != messages.length - 1 && (
                <div className="w-1 h-3 border-l-2 border-foreground"></div>
              )}
            </div>

            <div className="flex flex-col w-full ">
              <div className="flex items-center gap-2">
                <p>{message.userName}</p>
                <span className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(message.createdAt), {
                    addSuffix: true,
                  })}
                </span>
              </div>

              <p className="mt-1 text-xs font-light break-words">
                {message.message}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

async function getMessages() {
  const data = await prisma.message.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}
