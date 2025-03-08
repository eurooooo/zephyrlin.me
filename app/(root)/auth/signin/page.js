import { redirect } from "next/navigation";
import { signIn, providerMap } from "@/app/auth";
import { AuthError } from "next-auth";
import { Button } from "@/components/ui/button";
import { signInAction } from "@/lib/action";
// import { signInAction } from "@/lib/action";

export default async function SignInPage(props) {
  return (
    <div className="flex flex-col gap-2">
      {Object.values(providerMap).map(
        (provider) => (
          console.log("provider: ", provider),
          (
            <form
              key={provider.id}
              action={async () => {
                "use server";
                await signInAction(provider.id);
              }}
            >
              <Button type="submit">
                <span>Sign in with {provider.name}</span>
              </Button>
            </form>
          )
        )
      )}
    </div>
  );
}
