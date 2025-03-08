import { signOut } from "@/app/auth";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { Button } from "./ui/button";

export default function SignOut({ image }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Image
          src={image}
          width={30}
          height={30}
          alt="user profile image"
          className="mb-1 rounded-full hover:cursor-pointer"
        />
      </PopoverTrigger>
      <PopoverContent className="border-none text-xs w-32">
        <Button
          onClick={async () => {
            "use server";
            await signOut();
          }}
          className="font-medium border-none py-1"
        >
          Sign Out
        </Button>
      </PopoverContent>
    </Popover>
  );
}
