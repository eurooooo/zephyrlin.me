"use client";

import {
  KitchenSinkToolbar,
  MDXEditor,
  codeBlockPlugin,
  codeMirrorPlugin,
  frontmatterPlugin,
  headingsPlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";
import React from "react";

import "@mdxeditor/editor/style.css";

const Editor = ({ markdown, editorRef }) => {
  const [editor, setEditor] = React.useState(markdown);
  return (
    <div className="px-40 ">
      <MDXEditor
        // setMarkdown={setEditor}
        ref={editorRef}
        markdown={markdown}
        className="prose max-w-none bg-white"
        plugins={[
          // Example Plugin Usage
          toolbarPlugin({ toolbarContents: () => <KitchenSinkToolbar /> }),
          listsPlugin(),
          quotePlugin(),
          headingsPlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          tablePlugin(),
          thematicBreakPlugin(),
          frontmatterPlugin(),
          codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
          codeMirrorPlugin({
            codeBlockLanguages: { js: "JavaScript", css: "CSS" },
          }),
          markdownShortcutPlugin(),
        ]}
      />
    </div>
  );
};

export default Editor;
