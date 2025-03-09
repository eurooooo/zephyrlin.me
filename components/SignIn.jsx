import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import GoogleIcon from "@/public/icons/GoogleIcon";
import { UserPlus } from "lucide-react";
import SignInOption from "./SignInOption";
import GithubIcon from "@/public/icons/GithubIcon";

export default async function SignIn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-xl">
          <UserPlus />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-sm sm:max-w-sm border-none pt-10">
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>Sign in to leave a message</DialogDescription>
        </DialogHeader>
        <div className="mt-8 flex flex-col items-center gap-5 content-center text-sm">
          <SignInOption provider={"github"}>
            <GithubIcon />
          </SignInOption>
          <SignInOption provider={"google"}>
            <GoogleIcon />
          </SignInOption>
        </div>
        <DialogFooter className="sm:justify-start"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
