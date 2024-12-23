import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Microsoft",
      icon: (
        <Image
          src="/microsoft-svgrepo-com.svg"
          width={100}
          height={100}
          alt="Microsoft Logo"
        />
      ),
      href: "#",
    },

    {
      title: "Google",
      icon: (
        <Image
          src="/google-icon-logo-svgrepo-com.svg"
          width={50}
          height={50}
          alt="Google Logo"
        />
      ),
      href: "#",
    },
    {
      title: "Facebook",
      icon: (
        <Image
          src="/facebook-color-svgrepo-com.svg"
          width={100}
          height={100}
          alt="Facebook Logo"
        />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full bg-none">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
