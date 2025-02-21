"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <h2 className="mt-40 text-xl font-semibold text-center">
      💣 404 Not Found 💣
    </h2>
  );
}
