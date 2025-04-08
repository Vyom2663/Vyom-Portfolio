import React from "react";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import Link from "next/link";

export const Contect = () => {
  return (
    <div className="relative overflow-hidden py-16 px-4 sm:px-8 lg:px-20 xl:px-32 h-[625px] sm:h-[500px] bg-white dark:bg-black">
      {/* Shooting stars */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 75 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content above stars */}
      <div className="relative z-10 pt-10">
        <p className="text-center text-neutral-400 text-lg font-serif">
          Get in Touch
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-serif mt-2 text-black dark:text-white">
          Contact Me
        </h1>

        <div className="border-2 mx-auto mt-10 py-6 px-6 rounded-2xl max-w-2xl border-gray-600">
          {/* Email and LinkedIn */}
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-center sm:items-center">
            <div className="flex items-center justify-center sm:justify-start">
              <SiGmail size={24} className="text-red-500" />
              <p className="ml-3 text-sm sm:text-base text-black dark:text-white hover:underline underline-offset-8 hover:text-gray-400 transition duration-300">
                vyomjoshi2603@gmail.com
              </p>
            </div>

            <div className="flex items-center justify-center sm:justify-start">
              <FaLinkedin size={24} className="text-blue-600" />
              <Link
                href="https://www.linkedin.com/in/vyom-joshi-66b8aa314/"
                className="ml-3 text-sm sm:text-base text-black dark:text-white hover:underline underline-offset-8 hover:text-gray-400 transition duration-300"
              >
                Linkedin
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-6 mt-8 flex-wrap">
            <Link href="https://github.com/Vyom2663">
              <FaGithub size={28} className="text-black dark:text-white hover:text-gray-500 transition duration-300" />
            </Link>
            <Link href="https://www.instagram.com/_.vyom26?igsh=eTFyY3AwazduZDE=">
              <FaInstagram size={28} className="text-pink-600 hover:text-pink-400 transition duration-300" />
            </Link>
            <Link href="https://x.com/Vyomjoshi26?t=xBX_hy_NjGQ7GYhQZBzJXg&s=08">
              <FaTwitter size={28} className="text-blue-500 hover:text-blue-400 transition duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
