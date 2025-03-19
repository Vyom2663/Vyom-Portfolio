import React from "react";
import Image from "next/image";
import pimage7 from "../../public/pimage7.jpeg";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";



export const Me = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start p-10 sm:p-24 space-y-10 sm:space-y-0">
      <div className="sm:mr-20 sm:ml-14 flex justify-center">
        <Image
          src={pimage7}
          alt="Vyom"
          width={400}
          className="rounded-full min-w-[200px] sm:min-w-[300px] h-[280px] sm:h-[380px] object-cover object-center"
        />
      </div>
      <div className="text-center sm:text-left mt-0 sm:mt-24">
        <p className="text-neutral-700 text-lg sm:text-xl sm:text-center sm:mt-14 font-serif">
          Hello, I'm
        </p>
        <h1 className="text-3xl sm:text-[50px] sm:mt-3 sm:text-center font-serif text-neutral-950 font-bold">
          Vyom Joshi
        </h1>
        <p className="space-x-6 font-serif text-xl sm:text-center sm:text-3xl sm:mt-4 text-neutral-700 mt-2">
          React Js Developer
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-6 justify-center sm:justify-start">
          <Link href="../Vyomjoshi.MCA.2025.pdf"><button className="border-gray-700 border-2 text-black font-semibold px-6 py-3 rounded-3xl hover:text-white hover:bg-gray-400 duration-700">
            Download CV
          </button></Link>
          <Link href="../contect">
            <button className="border-gray-700 border-2 text-white bg-gray-600 font-semibold px-6 py-3 rounded-3xl hover:text-white hover:bg-black duration-700">
              Contact Info
            </button>
          </Link>
        </div>
        <div className="flex sm:justify-center space-x-6 mt-6 justify-center ">
          <Link href="https://www.linkedin.com/in/vyom-joshi-66b8aa314/">
            <FaLinkedin size={30} />
          </Link>
          <Link href="https://github.com/Vyom2663">
            <FaGithub size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};
