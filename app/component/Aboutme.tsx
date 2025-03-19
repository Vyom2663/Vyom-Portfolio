import React from "react";
import pimage3 from "../../public/pimage3.jpeg";
import Image from "next/image";
import { GiAchievement } from "react-icons/gi";
import { FaUserGroup } from "react-icons/fa6";

export const Aboutme = () => {
  return (
    <div className="h-screen px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="text-center pt-16">
        <p className="text-neutral-600 text-lg font-serif">Get to know more</p>
        <p className="text-3xl sm:text-5xl font-serif mt-3 font-bold">About Me</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start mt-10 lg:mt-20">
        <div className="flex justify-center lg:justify-start  lg:pt-20 lg:pl-20 ">
          <Image
            src={pimage3}
            alt="ab"
            width={400}
            className="rounded-3xl  h-[280px] sm:h-[380px] object-cover sm:object-top md:object-center"
          />
        </div>
        <div className="lg:ml-20 pt-10 lg:pt-28">
          <div className="flex flex-col md:flex-row gap-10 justify-center">
            <div className="flex flex-col text-center py-5 border-2 border-gray-500 w-full md:w-[350px] rounded-3xl">
              <GiAchievement size={30} className="mx-auto" />
              <p className="text-2xl font-serif">Experience</p>
              <p className="text-neutral-600 text-lg font-serif">Fresher</p>
              <p className="text-neutral-600 text-lg font-serif">
                React Developer
              </p>
            </div>
            <div className="flex flex-col text-center py-6 border-2 border-gray-500 w-full md:w-[350px] rounded-3xl">
              <FaUserGroup size={20} className="mx-auto" />
              <p className="text-2xl font-serif">Education </p>
              <p className="text-neutral-600 text-lg font-serif">
                B.Sc.it. Bachelors Degree
              </p>
              <p className="text-neutral-600 text-lg font-serif">
                MCA Masters Degree
              </p>
            </div>
          </div>
          <p className="text-neutral-600 text-sm font-serif mt-10 text-center lg:text-left">
            Enthusiastic and motivated individual with a strong foundation in
            Computer Science and a passion for Web Development.
            <br /> Equipped with excellent problem-solving abilities, effective
            communication skills, and a keen attention to detail.<br/> Demonstrated
            ability to learn quickly and adapt to new environments, as
            evidenced by relevant coursework, internships, or projects.<br /> Eager to
            bring a proactive attitude and a strong work ethic to a
            dynamic team where I can contribute to achieving organizational
            goals <br /> and continue developing my skills.
          </p>
        </div>
      </div>
    </div>
  );
};
