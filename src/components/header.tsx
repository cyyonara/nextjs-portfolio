import heroImg from "@/assets/profile.jpg";
import Image from "next/image";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MotionH1 } from "./motionH1";
import { MotionH2 } from "./motionH2";
import { MotionLi } from "./motionLi";
import { MotionButton } from "./motionButton";
import { MotionSpan } from "./motionSpan";
import { MotionDiv } from "./motionDiv";
import { MotionP } from "./motionP";

export default function Header() {
  return (
    <header className="flex flex-col px-[2rem]">
      <nav className="flex justify-between items-center w-full gap-x-8 max-w-[1300px] mx-auto py-8">
        <MotionH1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-cs-green font-extrabold text-3xl"
        >
          CBV.
        </MotionH1>
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
              className="flex flex-col cursor-pointer group"
            >
              <span className=" group-hover:text-cs-green duration-150">About me</span>
              <span className="h-[1px] w-0 bg-white duration-150 group-hover:w-[70%] group-hover:bg-cs-green"></span>
            </MotionLi>
            <MotionLi
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
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
        <button className="md:hidden text-cs-green">
          <HiMenuAlt3 size={28} />
        </button>
      </nav>
      <div className="min-h-[calc(100vh-104px)] flex">
        <div className="flex-1 mx-auto text-white max-w-[1300px] gap-y-12 gap-x-[50px] py-14 flex flex-col-reverse lg:flex-row items-center">
          <div className="flex items-center justify-center gap-x-12 lg:flex-1">
            <div className="flex flex-col relative isolate">
              <MotionSpan
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 2.3 }}
                className="shadow-[0_0_1000px_70px_#03C988] animate-pulse absolute top-[50%] left-[45%] -translate-x-[50%] -translate-y-[50%]"
              ></MotionSpan>
              <MotionH1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.7 }}
                className="text-4xl sm:text-5xl font-bold"
              >
                Hi I'm <span className="text-cs-green">Cyrel Villanueva</span>
              </MotionH1>
              <MotionH2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 2.7 }}
                className="text-xl sm:text-2xl mb-4"
              >
                Full-Stack Web Developer
              </MotionH2>
              <MotionP
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.7 }}
                className="text-sm sm:text-base"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat labore tempora quo blanditiis! Iste eum quod velit itaque sapiente,
                quo eveniet quidem modi cupiditate corporis inventore nihil nostrum distinctio accusamus!
              </MotionP>
              <MotionButton
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.7 }}
                className="px-8 py-2 bg-cs-green text-white self-start mt-4 flex justify-center items-center gap-x-1"
              >
                <span>My Projects</span>
                <IoIosArrowRoundForward size={25} />
              </MotionButton>
            </div>
          </div>
          <div className="flex items-center justify-center md:gap-x-8 gap-x-12 relative w-full lg:flex-1">
            <MotionDiv initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 1.7 }}>
              <Image
                alt="hello world"
                src={heroImg}
                width={400}
                height={400}
                className="m-auto rounded-full w-full aspect-square object-cover object-bottom max-w-[400px]"
              />
            </MotionDiv>
            <MotionDiv
              initial={{ height: 0 }}
              animate={{ height: "var(--height-to)" }}
              transition={{ duration: 1, delay: 2.4 }}
              className="sm:flex items-center static sm:right-0 sm:top-[50%] sm:absolute sm:-translate-y-[50%] w-min gap-y-8 gap-x-5 overflow-hidden flex-col hidden [--height-to:0px] sm:[--height-to:auto]"
            >
              <span className="min-h-[100px] w-[1px] flex-1 bg-cs-green rounded-full"></span>
              <div className="flex items-center text-cs-green gap-y-4 flex-col">
                <a href="https://www.facebook.com/cyrelvillanueva.30/" target="__blank" className="group">
                  <FaFacebook size={18} className="group-hover:scale-110 duration-150" />
                </a>
                <a href="https://github.com/cyyonara" target="__blank" className="group">
                  <FaGithub size={18} className="group-hover:scale-110 duration-150" />
                </a>
                <a href="https://www.instagram.com/_cyyonara/" target="__blank" className="group">
                  <FaInstagram size={18} className="group-hover:scale-110 duration-150" />
                </a>
              </div>
              <span className="min-h-[100px] w-[1px] flex-1 bg-cs-green rounded-full"></span>
            </MotionDiv>
          </div>
        </div>
      </div>
    </header>
  );
}
