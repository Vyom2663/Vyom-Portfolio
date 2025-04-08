import React from "react";
import { MdVerified } from "react-icons/md";
import { Skills } from "../component/Experiance";

const ExperianceDy = ({ title, skills }:{title:string, skills:Skills}) => {
  return (
    <div className="border-2 border-gray-500 mt-10 lg:mt-20 rounded-3xl px-4 py-4 sm:px-16 lg:px-20">
      <p className="text-neutral-600 text-center text-xl sm:text-2xl mt-4 font-serif">
        {title}
      </p>
      <div className="grid grid-cols-2 gap-4 sm:gap-10 items-start p-4 sm:p-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex gap-3 items-center">
            <MdVerified className="h-4 w-4 sm:h-8 sm:w-8" />
            <div>
              <p className="font-bold">{skill.name}</p>
              <p>{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperianceDy;
