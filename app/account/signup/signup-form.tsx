"use client";
import React from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FloatingDockDemo } from "@/app/ui/FloatingDock";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { BsMicrosoft, BsApple } from "react-icons/bs";

import { useState } from "react";

export default function SignupForm() {
  const [active, setActive] = useState("hidden");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-[500px] flex flex-col justify-center w-full h-[100vh] md:h-full mx-auto rounded-none md:rounded-[10px] backdrop-blur-lg p-4 z-20 md:p-8 bg-white md:bg-[rgba(255,255,255,0.6)] shadow-input dark:bg-black">
      <h1 className="font-[600] text-center md:text-left text-[36px] text-neutral-800">
        Create an account
      </h1>
      <p className="text-neutral-800 text-center md:text-left">
        Already have an account?{" "}
        <span>
          <Link href={"/account/login"} className=" text-[#0000EE] hover:underline ">
            Sign in
          </Link>
        </span>
      </p>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 dark:via-neutral-300 to-transparent mt-8 h-[1px] w-full" />

      <form className="my-8 text-neutral-800" onSubmit={handleSubmit}>
        <p className="text-neutral-800 font-semibold ">Sign up with email</p>{" "}
        <br />
        <LabelInputContainer className="mb-4">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="taylor123" type="text" required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            required
          />
        </LabelInputContainer>{" "}
        <br />
        <div className=" w-full flex justify-center items-center ">
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-[75%] text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>
        </div>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 dark:via-neutral-300 to-transparent mt-8 h-[1px] w-full" />
       <FloatingDockDemo />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
