"use client";

import heroImg from "@/assets/dummy.jpg";
import Image from "next/image";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MotionH1 } from "./motionH1";
import { MotionH2 } from "./motionH2";
import { MotionButton } from "./motionButton";
import { MotionSpan } from "./motionSpan";
import { MotionDiv } from "./motionDiv";
import { MotionP } from "./motionP";
import Navigation from "./navigation";

export default function Header() {
  const scrollToProjects = () => {
    document.querySelector(".projects")?.scrollIntoView();
  };

  return (
    <header className="flex flex-col px-8">
      <Navigation />
      <div className="min-h-[calc(100vh-104px)] flex">
        <div className="flex-1 mx-auto text-white max-w-[1300px] gap-y-12 gap-x-[50px] py-14 flex flex-col-reverse lg:flex-row items-center">
          <div className="flex items-center justify-center gap-x-12 lg:flex-1">
            <div className="flex flex-col relative isolate">
              <MotionSpan
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 2.3 }}
                className="shadow-[0_0_300px_70px_#03C988] animate-pulse absolute top-[50%] left-[45%] -translate-x-[50%] -translate-y-[50%]"
              ></MotionSpan>
              <MotionH1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.7 }}
                className="text-4xl sm:text-5xl font-bold"
              >
                Hi I&#39;m <span className="text-cs-green">Cyrel Villanueva</span>
              </MotionH1>
              <MotionH2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 2.7 }}
                className="text-xl sm:text-2xl mb-4"
              >
                Aspiring Full-Stack Web Developer
              </MotionH2>
              <MotionP
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.7 }}
                className="text-sm sm:text-base md:text-lg"
              >
                A budding full-stack web developer. Here, you'll find a showcase of my
                projects, where I've poured my passion for web development into creating
                functional and visually appealing websites and applications. Let's build
                and work together.
              </MotionP>
              <MotionButton
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.7 }}
                className="py-2 text-cs-green border border-cs-green px-8 self-start mt-4 flex justify-center items-center gap-x-1 group"
                onClick={scrollToProjects}
              >
                <span>My Projects</span>
                <IoIosArrowRoundForward
                  size={25}
                  className="duration-150 group-hover:translate-x-1"
                />
              </MotionButton>
            </div>
          </div>
          <div className="flex items-center justify-center md:gap-x-8 lg:pr-10 gap-x-16 relative w-full lg:flex-1">
            <MotionDiv
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
              className="border rounded-full border-cs-green"
            >
              <Image
                alt="hello world"
                src={heroImg}
                width={400}
                height={400}
                className="m-auto rounded-full w-full aspect-square object-cover object-center max-w-[340px] lg:max-w-[450px]"
              />
            </MotionDiv>
            <MotionDiv
              initial={{ height: 0 }}
              animate={{ height: "var(--height-to)" }}
              transition={{ duration: 1, delay: 2.4 }}
              className="sm:flex items-center static sm:right-0 sm:top-[50%] sm:absolute sm:-translate-y-[50%] w-min gap-y-8 gap-x-5 overflow-hidden flex-col hidden [--height-to:0px] sm:[--height-to:auto]"
            >
              <div className="flex items-center text-cs-green gap-y-4 flex-col">
                <a
                  href="https://www.facebook.com/cyrelvillanueva.30/"
                  target="__blank"
                  className="group"
                >
                  <FaFacebook size={18} className="group-hover:scale-110 duration-150" />
                </a>
                <a href="https://github.com/cyyonara" target="__blank" className="group">
                  <FaGithub size={18} className="group-hover:scale-110 duration-150" />
                </a>
                <a
                  href="https://www.instagram.com/_cyyonara/"
                  target="__blank"
                  className="group"
                >
                  <FaInstagram size={18} className="group-hover:scale-110 duration-150" />
                </a>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </header>
  );
}
