import { auth } from "@/app/auth";
import SignIn from "./SignIn";
import Image from "next/image";
import SignOut from "./SignOut";

export default async function AuthSignIn() {
  const session = await auth();

  if (!session?.user) return <SignIn />;

  return <SignOut image={session.user.image} />;
}
