"use client";

import React, { useState, useEffect } from "react";

export default function HeroAnimation({ text1, text2, speed = 100 }) {
  const [displayText, setDisplayText] = useState(text1);
  const [currentIndex, setCurrentIndex] = useState(text1.length);
  const [typeStatus, setTypeStatus] = useState("typing"); // To track typing vs deleting
  const [isText1, setIsText1] = useState(true); // Display text1 vs text2
  const [showCursor, setShowCursor] = useState(true); // For blinking cursor

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (
        typeStatus === "typing" &&
        currentIndex < (isText1 ? text1.length : text2.length)
      ) {
        // Typing forward
        setDisplayText(
          (prev) => prev + (isText1 ? text1[currentIndex] : text2[currentIndex])
        );
        setCurrentIndex((prev) => prev + 1);
      } else if (typeStatus === "deleting" && currentIndex > 0) {
        // Deleting backward
        setDisplayText((prev) => prev.slice(0, -1));
        setCurrentIndex((prev) => prev - 1);
      } else if (
        typeStatus === "typing" &&
        currentIndex === (isText1 ? text1.length : text2.length)
      ) {
        // Switch to deleting mode
        // setTypeStatus("waiting");
        setTimeout(() => {
          setTypeStatus("deleting");
        }, 2000); // Pause before deleting
      } else if (typeStatus === "deleting" && currentIndex === 0) {
        // Switch to typing mode
        // setTypeStatus("waiting");
        setTimeout(() => {
          setIsText1((isText1) => !isText1);
          setTypeStatus("typing");
        }, 500);
      }
    }, speed);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [currentIndex, typeStatus, text1, text2, speed, isText1]);

  // Cursor blinking effect
  useEffect(() => {
    // if (typeStatus !== "waiting") return;
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, [typeStatus]);

  return (
    <p className="text-3xl sm:text-[42px]">
      <span className=" text-transparent sm:bg-linear-to-r to-foreground bg-linear-to-t to-70% from-muted-foreground bg-clip-text font-semibold">
        {displayText}
      </span>

      <span className={`${showCursor ? "text-muted-foreground" : "hidden"}`}>
        |
      </span>
    </p>
  );
}
