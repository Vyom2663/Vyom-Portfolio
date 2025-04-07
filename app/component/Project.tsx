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
    <section className="w-full px-4 sm:px-8 lg:px-16 py-16">
      <div className="text-center mb-12">
        <p className="text-neutral-600 text-lg font-serif">Browse My Recent</p>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold mt-3">
          Projects
        </h2>
      </div>

      <ProjectDy skills={data} />
    </section>
  );
};
