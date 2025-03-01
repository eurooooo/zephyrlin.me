"use client";

import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/EditorComponent"), {
  ssr: false,
});

const markdown = `
Hello **world**!
`;

export default function Page() {
  return <Editor markdown={markdown} />;
}
