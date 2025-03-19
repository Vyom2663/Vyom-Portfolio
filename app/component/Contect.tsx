import React from "react";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

export const Contect = () => {
  return (
    <div className="h-auto py-16 px-4 sm:px-8 lg:px-16">
      <div className="pt-20">
        <p className="text-center text-neutral-600 text-lg font-serif">
          Get in Touch
        </p>
        <h1 className="text-3xl sm:text-5xl text-center font-serif mt-2">
          Contact Me
        </h1>
        <div className="border-2 mx-auto mt-8 py-5 px-5 rounded-full max-w-xl border-gray-700">
          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center">
            <div className="flex items-center mb-4 sm:mb-0  lg:mr-5">
              <SiGmail size={30} />
              <p className="ml-3 hover:underline underline-offset-8 hover:text-gray-400 duration-500">
                vyomjoshi2603@gmail.com
              </p>
            </div>
            <div className="flex items-center">
              <FaLinkedin size={30} />
              <Link
                href="https://www.linkedin.com/in/vyom-joshi-66b8aa314/"
                className="ml-3 hover:underline underline-offset-8 hover:text-gray-400 duration-500"
              >
                Linkedin
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 mt-6">
            <Link href="https://github.com/Vyom2663">
              <FaGithub size={30} className="hover:text-gray-400 duration-500" />
            </Link>
            <Link href="https://www.instagram.com/_.vyom26?igsh=eTFyY3AwazduZDE=">
              <FaInstagram
                size={30}
                className="hover:text-gray-400 duration-500"
              />
            </Link>
            <Link href="https://x.com/Vyomjoshi26?t=xBX_hy_NjGQ7GYhQZBzJXg&s=08">
              <FaTwitter
                size={30}
                className="hover:text-gray-400 duration-500"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
