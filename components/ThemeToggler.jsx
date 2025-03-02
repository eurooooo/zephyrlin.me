"use client";

import { useEffect } from "react";

export default function ThemeToggler({ children }) {
  useEffect(() => {
    document.documentElement.classList.add("light");
  }, []);
  return <>{children}</>;
}
