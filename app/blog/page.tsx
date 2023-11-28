"use client";

import { useState } from "react";
import Image from "next/image";

import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

const ButtonImageChanger = () => {
  const [isHovered, setIsHovered] = useState(false);

  const [hoveredValue, setHoveredValue] = useState("default.jpeg");

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
      {allPosts.map((post) => (
        <div
          className="flex flex-wrap md:-mx-3"
          key={post._id}
          onMouseEnter={() => onMouseEnter(post.image)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="md:w-1/2 px-3 mb-6 w-full">
            <div
              className={`flex w-full h-full flex-col flex-wrap bg-cover bg-no-repeat bg-center p-5 rounded overflow-hidden transition-all duration-300 ${
                isHovered ? "blur-md" : "blur-md"
              }`}
              style={{
                backgroundImage: `url(${post.image})`, // Asigna la URL de la imagen de fondo
              }}
            >
              <Link href= {"post/"+post.title}>
                <h2 className="tdark:prose-invert ">{post.title}</h2>
              </Link>
              <p className="leading-relaxed text-base">
                {post.description && <p>{post.description}</p>}
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ButtonImageChanger;
