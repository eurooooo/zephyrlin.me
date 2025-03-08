import { auth, signIn, signOut } from "@/app/auth";
import { Button } from "./ui/button";

export default async function AuthjsSignIn() {
  const session = await auth();

  if (!session?.user)
    return (
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <Button>Sign In</Button>
      </form>
    );

  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit">Sign Out</Button>
    </form>
  );
}
