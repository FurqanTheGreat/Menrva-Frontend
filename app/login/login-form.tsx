"use client";
import React from "react";
import Link from "next/link";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

import { useState } from "react"; 

export default function SignupFormDemo() {
  const [active, setActive] = useState('hidden')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-[500px] flex flex-col justify-center w-full h-[100vh] md:h-full mx-auto rounded-none md:rounded-[10px] backdrop-blur-lg p-4 z-20 md:p-8 bg-white md:bg-[rgba(255,255,255,0.6)] shadow-input dark:bg-black">
      <h1 className="font-[600] text-center md:text-left text-[36px] text-neutral-800">
        Sign in
      </h1>
      <p className="text-neutral-800 text-center md:text-left">New user? <span><Link href={"/signup"} className=" text-[#0000EE] hover:underline ">Create an account</Link></span></p> 
      <div className="bg-gradient-to-r from-transparent via-neutral-700 dark:via-neutral-300 to-transparent my-8 h-[1px] w-full" />

      <form className="my-8 text-neutral-800" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" required/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" required/>
        </LabelInputContainer> <br />
        <div className=" w-full flex justify-center items-center ">    
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-[75%] text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign in &rarr;
          <BottomGradient />
        </button>
        </div>  
        <div className="bg-gradient-to-r from-transparent via-neutral-700 dark:via-neutral-300 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col items-center space-y-6  ">
        <button
            className=" relative group/btn flex space-x-2 items-center justify-start justify-center w-[73%] text-center py-6 text-black rounded-full px-2 w-full text-black h-10 shadow-input border border-[#eaeaea] dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <img src="/google-icon-logo-svgrepo-com.svg" alt="Google Icon" width={24} height={24} />
            <span className="text-neutral-1000 dark:text-neutral-300 text-md">
            Continue with Google
            </span>
            <BottomGradient />
          </button>

          <button
            className=" relative group/btn flex space-x-2 items-center justify-start justify-center w-[73%] text-center py-6 text-black rounded-full px-2 w-full text-black h-10 shadow-input border border-[#eaeaea] dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <img src="/facebook-color-svgrepo-com.svg" alt="Facebook Icon" width={24} height={24} />
            <span className="text-neutral-1000 dark:text-neutral-300 text-md">
            Continue with Facebook
            </span>
            <BottomGradient />
          </button>

          <button
            className=" relative group/btn flex space-x-2 items-center justify-start justify-center w-[73%] text-center py-6 text-black rounded-full px-2 w-full text-black h-10 shadow-input border border-[#eaeaea] dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <img src="/microsoft-svgrepo-com.svg" alt="Microsoft Icon" width={24} height={24} />
            <span className="text-neutral-1000 dark:text-neutral-300 text-md">
            Continue with Microsoft
            </span>
            <BottomGradient />
          </button>

          <div className={`flex flex-col items-center space-y-6 ${active}`}>
            <button
              className="relative group/btn flex space-x-2 items-center justify-start justify-center w-[75%] text-center py-8 text-black rounded-full px-4 w-full text-black h-10 shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <img src="/github-142-svgrepo-com.svg" alt="Github Icon" width={24} height={24} />
              <span className="text-neutral-1000 dark:text-neutral-300 text-md">Continue with GitHub</span>
              <BottomGradient />
            </button>

            <button
              className="relative group/btn flex space-x-2 items-center justify-start justify-center w-[75%] text-center py-8 text-black rounded-full px-4 w-full text-black h-10 shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <img src="/apple-173-svgrepo-com.svg" alt="Apple Icon" width={24} height={24} />
              <span className="text-neutral-1000 dark:text-neutral-300 text-md">Continue with Apple</span>
              <BottomGradient />
            </button>
          </div>
        </div>
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
