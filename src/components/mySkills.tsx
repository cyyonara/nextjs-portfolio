import { MotionH1 } from "./motionH1";
import Image, { StaticImageData } from "next/image";
import htmlIcon from "@/assets/html.png";
import cssIcon from "@/assets/css-3.png";
import jsIcon from "@/assets/js.png";
import reactIcon from "@/assets/physics.png";
import tailwind from "@/assets/tailwind.png";
import mysql from "@/assets/mysql.png";
import php from "@/assets/php.png";
import node from "@/assets/node.png";
import express from "@/assets/express.png";
import mongo from "@/assets/mongo.png";
import mongoose from "@/assets/mongoose.png";
import github from "@/assets/github.png";
import git from "@/assets/git.png";
import typescript from "@/assets/typescript.png";
import java from "@/assets/java.png";
import vb from "@/assets/visual-basic.png";
import { MotionDiv } from "./motionDiv";
import { MotionSpan } from "./motionSpan";

export default function MySkills() {
  const frontEndTools: Array<StaticImageData> = [
    htmlIcon,
    cssIcon,
    jsIcon,
    typescript,
    reactIcon,
    tailwind,
  ];
  const backEndTools: Array<StaticImageData> = [
    node,
    express,
    php,
    mysql,
    mongo,
    mongoose,
  ];
  const tools: Array<StaticImageData> = [github, git];
  const others: Array<StaticImageData> = [java, vb];

  return (
    <section className="flex min-h-[30vh] relative py-11">
      <div className="flex-1 m-auto max-w-[1300px] items-center flex flex-col gap-y-14">
        <MotionH1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-4xl sm:text-5xl font-bold text-cs-green"
        >
          My <span className="text-white">Skills</span>
        </MotionH1>
        <div className="grid grid-cols-[repeat(1,auto)] md:grid-cols-[repeat(2,auto)] lg:grid-cols-[repeat(4,auto)] gap-y-10 gap-x-24">
          <MotionDiv
            initial={{ opacity: 0, translateY: "30%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col gap-y-6 flex-1"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-medium isolate w-min whitespace-nowrap">
                Front-End Development
              </h3>
              <MotionSpan
                initial={{ width: "0%" }}
                whileInView={{ width: 40 }}
                transition={{ delay: 1.6, duration: 1 }}
                className="w-[70%] h-[2px] bg-cs-green"
              ></MotionSpan>
            </div>
            <div className="flex flex-wrap gap-4">
              {frontEndTools.map((tool, i) => (
                <span key={i} className="flex gap-x-2 items-center">
                  <Image
                    src={tool}
                    alt="html"
                    width={30}
                    height={30}
                    className="min-w-[30px] min-h-[30px] object-contain"
                  />
                </span>
              ))}
            </div>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, translateY: "30%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex-col flex gap-y-6 flex-1"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-medium isolate w-min whitespace-nowrap">
                Back-End Development
              </h3>
              <MotionSpan
                initial={{ width: "0%" }}
                whileInView={{ width: 40 }}
                transition={{ delay: 1.6, duration: 1 }}
                className="w-[70%] h-[2px] bg-cs-green"
              ></MotionSpan>
            </div>
            <div className="flex flex-wrap gap-4">
              {backEndTools.map((tool, i) => (
                <span key={i} className="flex gap-x-2 items-center">
                  <Image
                    src={tool}
                    alt="html"
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px] object-contain"
                  />
                </span>
              ))}
            </div>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, translateY: "30%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex-col flex gap-y-6 flex-1"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-medium isolate w-min whitespace-nowrap">
                Tools
              </h3>
              <MotionSpan
                initial={{ width: "0%" }}
                whileInView={{ width: 40 }}
                transition={{ delay: 1.6, duration: 1 }}
                className="w-[12%] h-[2px] bg-cs-green"
              ></MotionSpan>
            </div>
            <div className="flex flex-wrap gap-4">
              {tools.map((tool, i) => (
                <span key={i} className="flex gap-x-2 items-center">
                  <Image
                    src={tool}
                    alt="html"
                    width={30}
                    height={30}
                    className="min-w-[30px] min-h-[30px] object-contain"
                  />
                </span>
              ))}
            </div>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, translateY: "30%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex-col flex gap-y-6 flex-1"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-medium isolate w-min whitespace-nowrap">
                Others
              </h3>
              <MotionSpan
                initial={{ width: "0%" }}
                whileInView={{ width: 40 }}
                transition={{ delay: 1.6, duration: 1 }}
                className="w-[16%] h-[2px] bg-cs-green"
              ></MotionSpan>
            </div>
            <div className="flex flex-wrap gap-4">
              {others.map((tool, i) => (
                <span key={i} className="flex gap-x-2 items-center">
                  <Image
                    src={tool}
                    alt="html"
                    width={30}
                    height={30}
                    className="min-w-[30px] min-h-[30px] object-contain"
                  />
                </span>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
