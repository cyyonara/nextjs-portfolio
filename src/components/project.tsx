import { IProject } from "./projectsList";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface Props extends IProject {}

export default function Project({ projectName, description, stacks, image, githubLink }: Props) {
  return (
    <div className="flex gap-x-16 flex-col-reverse md:flex-row gap-y-1 md:items-start">
      <div className="flex flex-col gap-y-1 flex-[2]">
        <h4 className="text-2xl font-semibold text-cs-green">{projectName}</h4>
        <p>{description}</p>
        <div className="flex flex-wrap mt-4 gap-x-4 gap-y-[2px] border-t border-cs-green py-4">
          {stacks.map((stack) => (
            <span key={stack} className="text-sm rounded-md text-cs-green">
              {stack}
            </span>
          ))}
        </div>
        <Link href={githubLink} target="__blank" className="self-start bg-cs-green px-4 py-2 flex items-center gap-x-2">
          <span>View Repository</span>
          <FaGithub />
        </Link>
      </div>
      <Image src={image} width={300} height={100} alt="hey" className="aspect-video object-contain w-full md:flex-1" />
    </div>
  );
}
