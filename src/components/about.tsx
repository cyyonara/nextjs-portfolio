import aboutImg from "@/assets/about.png";
import Image from "next/image";
import { MotionDiv } from "./motionDiv";
import { MotionSpan } from "./motionSpan";

export default function About() {
  return (
    <section className="flex min-h-[45vh] relative about">
      <span className="absolute bottom-0 right-0 animate-pulse shadow-[0_0_1000px_90px_#03C988]"></span>
      <div className="flex-1 gap-x-11 gap-y-4 items-center grid grid-cols-1 md:grid-cols-2 max-w-[1300px] m-auto py-24">
        <MotionDiv
          initial={{ opacity: 0, x: "-10vh" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex"
        >
          <Image src={aboutImg} alt="about" height={600} width={600} />
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col gap-y-4"
        >
          <div className="flex flex-col gap-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold">
              About <span className="text-cs-green">Me</span>
            </h1>
            <MotionSpan
              initial={{ width: 0 }}
              whileInView={{ width: "20%" }}
              transition={{ delay: 0.7, duration: 1 }}
              className="bg-cs-green h-[2px] overflow-hidden"
            ></MotionSpan>
          </div>
          <p className="text-sm sm:text-base md:text-lg">
            Hi, my name is Cyrel B. Villanueva. I am currently a third-year college
            student at Colegio De San Gabriel Arcangel, located in the City of San Jose
            Del Monte, Province of Bulacan, pursuing a Bachelor's Degree in Information
            Technology. I am 22 years old and I love building websites that others can use
            to enhance their lives and enjoy.
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}
