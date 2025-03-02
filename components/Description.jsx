"use client";

import { motion } from "framer-motion";
export default function Description({ page, description }) {
  return (
    <section className="w-full">
      <h1 className="text-4xl font-semibold ">{page}</h1>
      {/* <p
        className={`${page === "Blog" ? "lg:w-1/2" : "xl:w-2/3"} font-normal  w-full text-transparent bg-linear-to-b to-muted-foreground to-70% from-foreground bg-clip-text`}
      >
        {description}
      </p> */}
    </section>
  );
}
