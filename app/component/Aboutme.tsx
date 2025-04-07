import React from "react";
import pimage3 from "../../public/pimage3.jpeg";
import Image from "next/image";
import { GiAchievement } from "react-icons/gi";
import { FaUserGroup } from "react-icons/fa6";

export const Aboutme = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-16">
      <div className="text-center mb-12">
        <p className="text-neutral-600 text-lg font-serif">Get to know more</p>
        <h2 className="text-3xl sm:text-5xl font-serif mt-3 font-bold">
          About Me
        </h2>
      </div>

      <div className="flex flex-col xl:flex-row items-center sm:ml-36 gap-10">
        {/* Image Section */}
        <div className="flex justify-center xl:justify-start">
          <Image
            src={pimage3}
            alt="Profile"
            width={400}
            className="rounded-3xl h-[280px] sm:h-[380px] w-auto object-cover"
          />
        </div>

        {/* Text + Cards Section */}
        <div className="flex flex-col items-center xl:items-start max-w-3xl w-full">
          <div className="flex flex-col md:flex-row gap-6 w-full justify-center xl:justify-start">
            {/* Experience Card */}
            <div className="flex flex-col items-center text-center p-6 border-2 border-gray-500 rounded-3xl w-full md:w-1/2">
              <GiAchievement size={30} />
              <p className="text-2xl font-serif mt-2">Experience</p>
              <p className="text-neutral-600 text-lg font-serif">Fresher</p>
              <p className="text-neutral-600 text-lg font-serif">
                React Developer
              </p>
            </div>

            {/* Education Card */}
            <div className="flex flex-col items-center text-center p-6 border-2 border-gray-500 rounded-3xl w-full md:w-1/2">
              <FaUserGroup size={30} />
              <p className="text-2xl font-serif mt-2">Education</p>
              <p className="text-neutral-600 text-lg font-serif">B.Sc IT</p>
              <p className="text-neutral-600 text-lg font-serif">MCA</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-neutral-600 text-sm font-serif mt-8 text-center xl:text-left">
            Enthusiastic and motivated individual with a strong foundation in
            Computer Science and a passion for Web Development.
            <br />
            Equipped with excellent problem-solving abilities, effective
            communication skills, and a keen attention to detail.
            <br />
            Demonstrated ability to learn quickly and adapt to new environments,
            as evidenced by relevant coursework, internships, or projects.
            <br />
            Eager to bring a proactive attitude and a strong work ethic to a
            dynamic team where I can contribute to achieving organizational
            goals and continue developing my skills.
          </p>
        </div>
      </div>
    </section>
  );
};
