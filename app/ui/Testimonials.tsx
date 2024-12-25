"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className=" rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "\"Menrva has completely changed how I study. Uploading my notes and having the AI tutor guide me step-by-step has been a game-changer. I feel more confident in my exams now!\"",
    name: "Emma R., High School Student",
    title: "★★★★☆",
  },
  {
    quote:
      "\"As a working professional, I struggled to find time for structured learning. Menrva\'s personalized approach lets me learn on my own schedule, and the AI tutor feels like a real instructor.\"",
    name: "John D., Software Engineer (Google)",
    title: "★★★★★",
  },
  {
    quote: "\"I used Menrva to prepare for my university entrance exams. The insights and detailed explanations it provided made even the hardest topics easier to understand. Highly recommended\"",
    name: "Sana A., University Applicant (MIT)",
    title: "★★★★☆",
  },
  {
    quote:
      "\"Menrva is the future of education. Its ability to adapt to my needs and focus on the areas I struggle with is unlike anything I've seen before.\"",
    name: "Carlos M., College Student",
    title: "★★★★☆",
  },
  {
    quote:
      "\"With Menrva, I finally feel like learning can be fun and interactive. The ability to upload my materials and get personalized tutoring is a blessing!\"",
    name: "Ayesha K.,  AI Engineer (Meta)",
    title: "★★★★★",
  },
  {
    quote:
      "\"I was skeptical about AI tutoring at first, but Menrva exceeded my expectations. It's like having a private tutor available 24/7!\"",
    name: "David L., Entrepreneur",
    title: "★★★★☆",
  },
];
