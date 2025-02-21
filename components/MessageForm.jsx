"use client";

import { useFormStatus } from "react-dom";
import { useState } from "react";
import { createMessage } from "@/app/(root)/actions";
import TextareaAutosize from "react-textarea-autosize";
import { Send } from "lucide-react";
import { toast } from "sonner";

export default function MessageForm({ children }) {
  const [text, setText] = useState("");
  const isEmpty = text === "";

  return (
    <form
      action={async (formData) => {
        try {
          await createMessage(formData);
          setText("");
          toast.success("Message sent successfully");
        } catch (error) {
          toast.error(error.message || "Failed to send message");
        }
      }}
    >
      <div className="flex gap-2 rounded-md shadow-[0_0px_1.2px_rgb(140,140,140)] p-3 min-h-20 ">
        <div className="w-12 h-12 shrink-0">{children}</div>
        <MessageInput text={text} setText={setText} isEmpty={isEmpty} />
      </div>
    </form>
  );
}

// New component to properly use useFormStatus
function MessageInput({ text, setText, isEmpty }) {
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col flex-grow gap-4 justify-between">
      <TextareaAutosize
        disabled={pending}
        className="p-0 w-full text-sm bg-transparent border-none outline-none resize-none placeholder-muted-foreground text-muted-foreground disabled:opacity-50"
        placeholder="Leave a message"
        name="message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={500}
      />

      <div
        className={`${isEmpty ? "opacity-0" : "opacity-100"} transition-opacity duration-1000 text-xs text-muted-foreground flex items-center justify-between gap-2`}
      >
        <span>{text.length}/500 </span>
        <button
          disabled={pending || isEmpty}
          type="submit"
          className="flex items-center justify-center gap-1.5"
        >
          <Send size={15} />
          <span className="font-bold">Send</span>
        </button>
      </div>
    </div>
  );
}
