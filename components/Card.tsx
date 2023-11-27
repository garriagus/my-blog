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

export default function Card(children: any) {
  const [isHovered, setIsHovered] = useState(false);

  const [hoveredValue, setHoveredValue] = useState("default.jpeg");

  console.log("estaaaaaaa es" + children.posts.name);
  const onMouseEnter = (value: any) => {
    setIsHovered(true);
    setHoveredValue(value);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const onMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div
        className="md:w-1/2 px-3 mb-6 w-full"
        key={children.posts.id}
        onMouseEnter={() => onMouseEnter(children.posts.image)}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`transition-all duration-300 flex w-full h-full flex-col flex-wrap bg-cover bg-no-repeat bg-center p-5 rounded overflow-hidden ${
            isHovered ? "blur-md " : ""
          }`}
          style={{
            backgroundImage: `url(${children.posts.image})`, // Asigna la URL de la imagen de fondo
          }}
        >
          <h2 className="text-white text-lg mb-2 ">
            Is The Herbal Way The Right Way
          </h2>
          <p className="text-white opacity-50">
            Adwords Keyword Research For Beginners
          </p>
          <div className="flex flex-wrap justify-between items-center mt-auto pt-6">
            <div className="inline-flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img src="https://randomuser.me/api/portraits/women/2.jpg" />
              </div>
              <div className="flex-1 pl-2">
                <h2 className="text-white mb-1">Ollie McBride</h2>
                <p className="text-white opacity-50 text-xs">May 18</p>
              </div>
            </div>
            <span className="text-white opacity-50">
              <svg
                className="fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 459 459"              >
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
