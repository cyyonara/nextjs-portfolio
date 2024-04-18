"use client";

import { HiMenuAlt3 } from "react-icons/hi";
import { MotionH1 } from "./motionH1";
import { MotionLi } from "./motionLi";
import { MotionButton } from "./motionButton";
import Link from "next/link";

export default function Navigation() {
  const scrollToAboutMe = () => {
    document.querySelector(".about")?.scrollIntoView();
  };

  const scrollToProjects = () => {
    document.querySelector(".projects")?.scrollIntoView();
  };

  return (
    <nav className="flex justify-between items-center w-full gap-x-8 max-w-[1300px] mx-auto py-8">
      <Link href="/">
        <MotionH1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-cs-green font-extrabold text-3xl"
        >
          CBV.
        </MotionH1>
      </Link>
      <div className="text-white hidden md:block">
        <ul className="flex items-center gap-x-14">
          <MotionLi
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col cursor-pointer group"
          >
            <span className=" group-hover:text-cs-green duration-150">Home</span>
            <span className="h-[1px] w-0 bg-white duration-150 group-hover:w-[70%] group-hover:bg-cs-green"></span>
          </MotionLi>
          <MotionLi
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            onClick={scrollToAboutMe}
            className="flex flex-col cursor-pointer group"
          >
            <span className=" group-hover:text-cs-green duration-150">About me</span>
            <span className="h-[1px] w-0 bg-white duration-150 group-hover:w-[70%] group-hover:bg-cs-green"></span>
          </MotionLi>
          <MotionLi
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            onClick={scrollToProjects}
            className="flex flex-col cursor-pointer group"
          >
            <span className=" group-hover:text-cs-green duration-150">Projects</span>
            <span className="h-[1px] w-0 bg-white duration-150 group-hover:w-[70%] group-hover:bg-cs-green"></span>
          </MotionLi>
        </ul>
      </div>
      <MotionButton
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="bg-cs-green text-white px-3 py-2 hidden md:block"
      >
        Resume
      </MotionButton>
      <MotionButton
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="md:hidden text-cs-green"
      >
        <HiMenuAlt3 size={28} />
      </MotionButton>
    </nav>
  );
}
