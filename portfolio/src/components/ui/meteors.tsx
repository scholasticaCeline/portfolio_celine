"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

export const Meteors = ({
  number = 20,
  className,
  shouldAnimate = true,
}: {
  number?: number;
  className?: string;
  shouldAnimate?: boolean;
}) => {
  const [delays, setDelays] = useState<number[]>([]);
  const [durations, setDurations] = useState<number[]>([]);

  useEffect(() => {
    const newDelays = Array.from({ length: number }, () => Math.random() * 5);
    const newDurations = Array.from({ length: number }, () =>
      Math.floor(Math.random() * (10 - 5) + 5),
    );
    setDelays(newDelays);
    setDurations(newDurations);
  }, [number]);

  const meteors = new Array(number).fill(true);

  if (!shouldAnimate) return null;

  return (
    <>
      {delays.length > 0 &&
        meteors.map((_, idx) => {
          const position = idx * (800 / number) - 400;
          return (
            <span
              key={`meteor-${idx}`}
              className={cn(
                "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
                "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
                className
              )}
              style={{
                top: "-40px",
                left: `${position}px`,
                animationDelay: `${delays[idx]}s`,
                animationDuration: `${durations[idx]}s`,
              }}
            ></span>
          );
        })}
    </>
  );
};
