import { signOut } from "@/app/auth";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

export default function SignOut({ image, name, email }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src={image}
          width={30}
          height={30}
          alt="user profile image"
          className="mb-1 rounded-full hover:cursor-pointer"
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="min-w-0 border-none bg-[rgb(31,31,35)] text-muted-foreground"
        sideOffset={20}
      >
        <DropdownMenuLabel className="flex justify-around text-foreground gap-5 text-xs ">
          <div>
            <Image
              src={image}
              width={30}
              height={30}
              alt="user profile image"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div>{name}</div>
            <div>{email}</div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-0">
          <button
            onClick={async () => {
              "use server";
              await signOut();
            }}
            className="font-medium p-2 flex content-center justify-center w-full"
          >
            <div>
              <LogOut size={20} className="inline-block" />
            </div>
            <span className="ml-5 text-sm">sign out</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
