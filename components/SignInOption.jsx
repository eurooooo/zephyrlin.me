"use client";

import { signInAction } from "@/lib/action";
import Form from "next/form";
import { useFormStatus } from "react-dom";
import Spinner from "./Spinner";

export default function SignInOption({ provider, children }) {
  const signIn = signInAction.bind(null, provider);
  return (
    <div className="flex w-full bg-muted-foreground px-2 rounded-md h-9">
      <Form action={signIn} className="w-full flex justify-center">
        <SubmitButton>{children}</SubmitButton>
      </Form>
    </div>
  );
}

function SubmitButton({ children }) {
  const { pending } = useFormStatus();

  return (
    <button className="w-full flex items-center gap-10">
      {pending ? <Spinner /> : children}
      Sign in with Google
    </button>
  );
}
