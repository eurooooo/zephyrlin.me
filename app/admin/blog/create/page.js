"use client";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { createBlogPost } from "@/lib/action";
import { Button } from "@/components/ui/button";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

function HomePage() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedAt, setPublishedAt] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("image", image);
    formData.append("author", author);
    formData.append("publishedAt", new Date(publishedAt).toISOString());
    formData.append("content", content);
    console.log("formData: client", formData);

    try {
      await createBlogPost(formData);
      alert("Blog post created successfully!");
    } catch (error) {
      console.error("Error creating blog post:", error);
      alert("Failed to create blog post.");
    }
  };

  return (
    <div className="px-24 flex flex-col gap-4">
      <h1 className="text-2xl">Create a New Blog Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2"
        />
        <textarea
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border p-2"
        />
        <input
          type="date"
          value={publishedAt}
          onChange={(e) => setPublishedAt(e.target.value)}
          className="border p-2"
        />
        <div>
          <MDEditor
            value={content}
            onChange={setContent}
            height={600}
            className=""
          />
        </div>
        <Button type="submit" className="">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default HomePage;
