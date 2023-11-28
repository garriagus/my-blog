"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function Card(children: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className=" border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
        key={children.posts.id}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundImage: `url(${children.posts.image})`, // Asigna la URL de la imagen de fondo
        }}
      >
        <div
          className={`transition-all duration-200 mb-8
         ${isHovered ? "" : "backdrop-blur-3xl"}`}
        >
          <div className="md:shrink-0">
            <Image
              className="flex items-center justify-center"
              src={`/${children.posts.image}`}
              width={360}
              height={360}
              alt={children.posts.title}
              quality={100}
            ></Image>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Company retreats
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p className="text-gray-700 text-base">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
