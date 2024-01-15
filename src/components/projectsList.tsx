import anisource from "@/assets/anisource.png";
import pos from "@/assets/pos.png";
import hd from "@/assets/hd.png";
import chupee from "@/assets/chupee.png";

import { StaticImageData } from "next/image";
import Project from "./project";

export interface IProject {
  projectName: string;
  description: string;
  image: StaticImageData;
  githubLink: string;
  stacks: Array<string>;
}

const dummyDescription =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorevoluptatum fuga odio quam architecto nulla cumque impedit beatae autem eos et distinctio, aliquid nesciunt nisi odit omnis. Consequuntur, deleniti architecto.";

export default function ProjectsList() {
  const projects: Array<IProject> = [
    {
      projectName: "Hacienda Davena Private Resort Reservation System",
      description: dummyDescription,
      image: hd,
      githubLink: "https://github.com/cyyonara/reservation-system",
      stacks: [
        "React JS",
        "Tailwind Css",
        "Material-Tailwind",
        "Framer Motion",
        "Zustand",
        "Tanstack React-Query",
        "Firebase",
        "Typescript",
        "Node JS",
        "Express JS",
        "Mongo DB",
        "JWT",
        "Mongoose",
      ],
    },
    {
      projectName: "Seven 24 Cafe POS - Point of Sales System",
      description: dummyDescription,
      image: pos,
      githubLink: "#",
      stacks: ["Visual Basic", "MySQL"],
    },
    {
      projectName: "Anisource",
      description: dummyDescription,
      image: anisource,
      githubLink: "https://github.com/cyyonara/aniV1",
      stacks: ["React JS", "Tailwind Css", "Material-UI"],
    },

    {
      projectName: "Chupee - Computer Peripherals E. Store",
      description: dummyDescription,
      image: chupee,
      githubLink: "https://github.com/cyyonara/chupee",
      stacks: [
        "React JS",
        "Tailwind Css",
        "Material-Tailwind",
        "Framer Motion",
        "Zustand",
        "Tanstack React-Query",
        "Typescript",
        "Node JS",
        "Express JS",
        "MySQL",
        "JWT",
      ],
    },
  ];

  return (
    <section className="flex relative py-20 mt-12">
      <div className="flex-1 mx-auto max-w-[1200px] justify-center flex flex-col gap-y-16">
        <h1 className="text-4xl sm:text-5xl text-center font-bold text-white">
          Pro<span className="text-cs-green">jects</span>
        </h1>
        <div className="flex flex-col gap-y-16 md:gap-y-24">
          {projects.map((project) => (
            <Project key={project.description} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
