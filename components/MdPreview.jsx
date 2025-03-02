"use client";

import React, { useEffect } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

export default function MdPreview({ source }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-color-mode", "dark");
  }, []);
  return (
    <MarkdownPreview
      source={source}
      style={{ background: "none" }}
      rehypeRewrite={(node, index, parent) => {
        if (
          node.tagName === "a" &&
          parent &&
          /^h(1|2|3|4|5|6)/.test(parent.tagName)
        ) {
          parent.children = parent.children.slice(1);
        }
      }}
    />
  );
}
