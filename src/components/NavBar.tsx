"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome } from "@tabler/icons-react";
import { IoCodeSlash } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";

export default function NavBar() {
  const navItems = [
    {
        name: "Início",
        link: "#home",
        icon: <IconHome className="w-[22px] text-neutral-500 text-2xl dark:text-white" />,
    },
    {
      name: "Projetos",
      link: "#projects",
      icon: <IoCodeSlash className="w-[22px] text-2xl text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experiência",
      link: "#experience",
      icon: <MdWorkOutline className="w-[22px] text-2xl text-neutral-500 dark:text-white" />,
    },
    {
      name: "Canal do Youtube",
      link: "#channel",
      icon: (
        <AiOutlineYoutube className="w-[22px] text-2xl text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav className="px-7 py-4" navItems={navItems} />
    </div>
  );
}
