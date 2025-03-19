"use client"

import Link from 'next/link';
import React, { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      
      <div className="flex justify-between items-center p-6">
        
        <div className="text-3xl font-serif ml-6">
          <Link href="/">Vyom Joshi</Link>
        </div>

        
        <button
          className="md:hidden text-black-400 hover:text-black mr-6 text-lg"
          onClick={() => setIsOpen(!isOpen)} 
        >
          ☰
        </button>

        <div className="hidden md:block flex-1 sm:ml-28 p-6 mr-40">
          <ul className="flex justify-end text-2xl space-x-5 font-serif">
            <li className="hover:underline underline-offset-8 hover:text-gray-600 duration-500">
              <Link href="/component/aboutme">About</Link>
            </li>
            <li className="hover:underline underline-offset-8 hover:text-gray-600 duration-500">
              <Link href="/component/experiance">Experience</Link>
            </li>
            <li className="hover:underline underline-offset-8 hover:text-gray-600 duration-500">
              <Link href="/component/project">Projects</Link>
            </li>
            <li className="hover:underline underline-offset-8 hover:text-gray-600 duration-500">
              <Link href="/component/contect">Contact</Link>
            </li>
            <li className="hover:underline underline-offset-8 hover:text-gray-600 duration-500">
              <Link href="/component/journey">Journey</Link>
            </li>
          </ul>
        </div>
      </div>

      
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-gray-700 text-white p-6`}
      >
        <ul className="flex flex-col space-y-3 text-xl font-serif">
          <li className="hover:underline underline-offset-8 hover:text-gray-400 duration-500">
            <Link href="/component/aboutme">About</Link>
          </li>
          <li className="hover:underline underline-offset-8 hover:text-gray-400 duration-500">
            <Link href="/component/experiance">Experience</Link>
          </li>
          <li className="hover:underline underline-offset-8 hover:text-gray-400 duration-500">
            <Link href="/component/project">Projects</Link>
          </li>
          <li className="hover:underline underline-offset-8 hover:text-gray-400 duration-500">
            <Link href="/component/contect">Contact</Link>
          </li>
          <li className="hover:underline underline-offset-8 hover:text-gray-400 duration-500">
            <Link href="/component/journey">Journey</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
