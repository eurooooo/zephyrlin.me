"use client";

import { signInAction } from "@/lib/action";
import Form from "next/form";
import { useFormStatus } from "react-dom";
import Spinner from "./Spinner";

export default function SignInOption({ provider, children }) {
  const signIn = signInAction.bind(null, provider);
  return (
    <>
      <div className="flex w-full bg-secondary px-2 rounded-md h-9">
        <Form action={signIn} className="w-full">
          <SubmitButton provider={provider}>{children}</SubmitButton>
        </Form>
      </div>
    </>
  );
}

function SubmitButton({ provider, children }) {
  const { pending } = useFormStatus();

  return (
    <>
      <button className="w-full flex items-center">
        <div className="w-20">{pending ? <Spinner /> : children}</div>
        <div>Sign in with {provider}</div>
      </button>
    </>
  );
}
