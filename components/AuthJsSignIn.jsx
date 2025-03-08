import { signInAction, signOutAction } from "@/lib/action";
import { auth } from "@/app/auth";
import { Button } from "./ui/button";
import SignIn from "./SignIn";

export default async function AuthjsSignIn() {
  const session = await auth();

  if (!session?.user) return <SignIn />;

  // console.log(session);

  return (
    <form action={signOutAction}>
      <Button type="submit">Sign Out</Button>
    </form>
  );
}
