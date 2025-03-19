import React from "react";
import Image from "next/image";
import Link from "next/link";
import { temp } from "../component/Project";

const ProjectDy = ({ skills}:{skills : temp})=> {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-8">
      {skills.map((skill : any, index : number) => (
        <div
          className="max-w-sm p-6 border-2 border-gray-500 rounded-2xl shadow-lg bg-white"
          key={index}
        >
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src={skill.image}
              alt="i1"
              width={400}
              className="h-[250px] sm:h-[350px] object-cover"
            />
          </div>

          <div className="mt-6 text-center">
            <h2 className="text-xl font-bold font-serif">{skill.title}</h2>
          </div>

          <div className="mt-4 flex justify-center space-x-4">
            <Link href={skill.link}>
              <button className="px-4 py-2 border-2 rounded-full font-serif text-black font-semibold border-gray-400 hover:bg-gray-700 hover:text-white">
                Github
              </button>
            </Link>
            <button className="px-4 py-2 border-2 rounded-full font-serif text-black font-semibold border-gray-400 hover:bg-gray-700 hover:text-white">
              Live Demo
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDy;
