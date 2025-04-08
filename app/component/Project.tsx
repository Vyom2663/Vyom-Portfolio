import React from "react";
import grocery from "../../public/grocery.jpg";
import port from "../../public/portfolio1.png";
import eyeware from "../../public/eyeware.jpg";
import ProjectDy from "../componentdynamic/projectDy";
import { StaticImageData } from "next/image";

export type temp = {
  image: StaticImageData;
  title: string;
  link: string;
}[];

export const Project = () => {
  const data: temp = [
    {
      image: grocery,
      title: "Grocery Management System",
      link: "https://github.com/Vyom2663/Grocery-Management-System-PHP-Laravel",
    },
    { image: port, title: "Portfolio Website", link: "#" },
    {
      image: eyeware,
      title: "Eyebeam",
      link: "https://github.com/Vyom2663/EyeBeam",
    },
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
            Browse My Recent
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold mt-3">
            Projects
          </h2>
        </div>

        <ProjectDy skills={data} />
      </div>
    </section>
  );
};
