"use client";
import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconSettings,
  IconUserBolt,
  IconMessageCircle
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import axios from "axios";
import cookie from "cookiejs";

export function Navbar() {
  const links = [
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  
  const [open, setOpen] = useState(false);
  const [chats, setChats] = useState([]);

  const getUserId = async () => {
    try {
      const token = cookie.get('jwt') // Retrieve the JWT token from storage
      if (!token) {
        console.error("No JWT token found");
        return;
      }
  
      const response = await axios.get("http://localhost:3002/auth/get-user-id", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status === 200) {
        console.log("User ID retrieved successfully:", response.data.user_id);
        return response.data.user_id;
      }
    } catch (error: any) {
      if (error.response) {
        console.error("Server error:", error.response.data.msg);
      } else {
        console.error("Request error:", error.message);
      }
    }
  };

  const getChats = async () => {
    const userId = await getUserId();
    if (userId) {
      try {
        const token = cookie.get('jwt') // Retrieve the JWT token from storage
      if (!token) {
        console.error("No JWT token found");
        return;
      }
      const response = await axios.post(
        "http://localhost:3002/chat_mng/get_chats", 
        { user_id: userId }, // Request body
        { 
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
        if (response.status === 200) {
          setChats(response.data.chats); // Set chats to state
        } else {
          console.error(response.data.msg)
        }
      } catch (error) {
        console.error("Failed to fetch chats:", error);
      }
    }
  };

  useEffect(() => {
    getChats();
  }, []);

  const handleChatClick = (chatId: string) => {
    localStorage.setItem('selectedChatId', chatId);
  };
  
  
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <div className="h-2/3">
            {open ? <Logo /> : <LogoIcon />}
            <SidebarLink
              link={{
                label: "Menrva AI",
                href: "#",
                icon: (
                  <Image
                    src="/Colorful_Brain_Digital_World_Technology_Logo__3_-removebg-preview.png"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                ),
              }}
              className="mt-4"
              
            ></SidebarLink>
            <SidebarLink
              link={{
                label: "Your Chats",
                href: "#",
                icon: (
                  <IconMessageCircle className="text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
              }}
              className="mt-1"
            ></SidebarLink>
            <div className={`overflow-x-hidden ${open ? 'overflow-y-scroll' : 'overflow-hidden'} fadedScroll z-15 h-1/2`}>
              {chats.length > 0 &&
                chats.map((chat: any, index: number) => (
                  <SidebarLink
                    key={chat.chat_id}
                    link={{
                      label: chat.chat_name,
                      href: `#`,
                      icon: null,
                    }}
                    className="mt-1 ml-8"
                  />
                ))}
              {chats.length < 4 &&
                Array.from({ length: 4 - chats.length }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-6 mt-2 ml-2 ${!open ? 'hidden' : ''} bg-neutral-700 animate-pulse rounded-[5px]`}
                  />
                ))}
            </div>
          </div>
          <div className="mt-8 h-1/3 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
export const Logo = () => {
  return (
    <div className="flex justify-center items-center ">
      <Link
        href="#"
        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
      >
        <Image
          src="/Screenshot 2024-11-24 173312.png"
          alt="logo"
          width={60}
          height={60}
          className=" rounded-full "
        ></Image>
      </Link>
    </div>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-white py-1 mb-8 relative z-20"
    >
      <Image src="/Screenshot 2024-11-24 173312.png" alt="logo" width={30} height={30} className=" rounded-full "></Image>
    </Link>
  );
};
