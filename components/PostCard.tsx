"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";

import { allPosts } from "@/.contentlayer/generated";

// Definición de la interfaz para las propiedades del componente
interface Props {
  children: React.ReactNode;
  posts: {
    title: any;
    image: any;
    description: any;
  };
}

export default function PostCard(children: any) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  console.log("estaaaaaaa es" + children.posts.name);
  return (
    <>
      <div
        className="w-full h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${children.posts.image})`, // Asigna la URL de la imagen de fondo
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`w-full h-full flex justify-center items-center transition-all duration-600 
         ${isHovered ? "backdrop-blur-3xl " : ""}`}
        >
          <h1 className="text-gray-950 prose lg:prose-xxl text-4xl font-extrabold">
            {children.posts.title}
          </h1>
          <span className="text-black prose lg:prose-xl w-1/4 text-center">
            {children.posts.description}
          </span>
          <a
            href="#"
            className="inline-flex items-center text-lg hover:underline"
          >
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Read More
            </button>
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
