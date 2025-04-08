import React from "react";
import ExperianceDy from "../componentdynamic/experianceDy";

export type Skills = {
  name: string;
  level: string;
}[];

const Experience = () => {
  const frontendSkills: Skills = [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Experienced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "React JS", level: "Intermediate" },
    { name: "Php Laravel", level: "Intermediate" },
  ];

  const backendSkills: Skills = [
    { name: "MySQL", level: "Experienced" },
    { name: "Node JS", level: "Intermediate" },
    { name: "Express JS", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
  ];

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-16 py-16 overflow-hidden bg-white dark:bg-black text-black dark:text-white">
      {/* Shooting Stars Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="star dark:star-dark star-light"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <div className="text-center mb-12">
          <p className="text-neutral-600 dark:text-neutral-400 text-lg font-serif">
            Explore My
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold mt-3">
            Experience
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center flex-wrap">
          <ExperianceDy title="Frontend Programming" skills={frontendSkills} />
          <ExperianceDy title="Backend Programming" skills={backendSkills} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
