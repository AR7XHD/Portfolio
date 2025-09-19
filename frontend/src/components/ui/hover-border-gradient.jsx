"use client";;
import React, { useState, useEffect } from "react";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState("TOP");

  const rotateDirection = currentDirection => {
    const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap = {
    TOP: "radial-gradient(40% 80% at 50% 0%, rgba(59, 130, 246, 1) 0%, rgba(147, 51, 234, 0.7) 40%, rgba(255, 255, 255, 0.2) 80%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(35% 70% at 0% 50%, rgba(236, 72, 153, 1) 0%, rgba(59, 130, 246, 0.7) 40%, rgba(255, 255, 255, 0.2) 80%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM:
      "radial-gradient(40% 80% at 50% 100%, rgba(147, 51, 234, 1) 0%, rgba(236, 72, 153, 0.7) 40%, rgba(255, 255, 255, 0.2) 80%, rgba(255, 255, 255, 0) 100%)",
    RIGHT:
      "radial-gradient(35% 70% at 100% 50%, rgba(34, 197, 94, 1) 0%, rgba(59, 130, 246, 0.7) 40%, rgba(255, 255, 255, 0.2) 80%, rgba(255, 255, 255, 0) 100%)",
  };

  const highlight =
    "radial-gradient(120% 250% at 50% 50%, rgba(59, 130, 246, 1) 0%, rgba(147, 51, 234, 1) 20%, rgba(236, 72, 153, 0.9) 40%, rgba(34, 197, 94, 0.8) 60%, rgba(255, 255, 255, 0.3) 80%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);
  return (
    <Tag
      onMouseEnter={(event) => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border-2 content-center bg-black/40 hover:bg-black/20 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-2 decoration-clone w-fit shadow-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.8)]",
        containerClassName
      )}
      {...props}>
      <div
        className={cn("w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]", className)}>
        {children}
      </div>
      <motion.div
        className={cn("flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]")}
        style={{
          filter: "blur(0.5px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }} />
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  );
}
