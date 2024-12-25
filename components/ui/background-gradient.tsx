import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
  bm,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  bm?: string;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn(`relative p-[4px] w-fit mb-[50px] bottom-[${bm}] group`, containerClassName)}>
  <motion.div
    variants={animate ? variants : undefined}
    initial={animate ? "initial" : undefined}
    animate={animate ? "animate" : undefined}
    transition={
      animate
        ? {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }
        : undefined
    }
    style={{
      backgroundSize: animate ? "400% 400%" : undefined,
    }}
    className={cn(
      "absolute inset-0 rounded-3xl z-[1]  opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform",
      "bg-[radial-gradient(circle_farthest-side_at_0_100%,rgb(255,182,121),transparent),radial-gradient(circle_farthest-side_at_100%_0,rgba(255,150,60,0.49),transparent),radial-gradient(circle_farthest-side_at_100%_100%,rgba(255,119,0,0),transparent),radial-gradient(circle_farthest-side_at_0_0,rgba(255,182,121),rgba(255,150,60,0.49))]"
    )}
  />
  <motion.div
    variants={animate ? variants : undefined}
    initial={animate ? "initial" : undefined}
    animate={animate ? "animate" : undefined}
    transition={
      animate
        ? {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }
        : undefined
    }
    style={{
      backgroundSize: animate ? "400% 400%" : undefined,
    }}
    className={cn(
      "absolute inset-0 rounded-3xl z-[1] will-change-transform",
      "bg-[radial-gradient(circle_farthest-side_at_0_100%,rgb(255,182,121),transparent),radial-gradient(circle_farthest-side_at_100%_0,rgba(255,150,60,0.49),transparent),radial-gradient(circle_farthest-side_at_100%_100%,rgba(255,119,0,0),transparent),radial-gradient(circle_farthest-side_at_0_0,rgba(255,182,121),rgba(255,150,60,0.49))]"
    )}
  />

  <div className={cn("relative z-10", className)}>{children}</div>
</div>

  );
};
