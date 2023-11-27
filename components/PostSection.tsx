"use client";

import Link from "next/link";
import React, { useState } from "react";
import Card from "@/components/Card";
import Image from "next/image";

import { allPosts } from "@/.contentlayer/generated";

const PostSection = () => {
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
    <div className="bg-gray-900 pt-12 pb-6 flex-1">
      <div className="container mx-auto">
        <div className="flex flex-wrap md:-mx-3">
          {allPosts.map((post) => (
            <Card
              posts={{ id: post._id, name: post.title, image: post.image }}
            >
              
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostSection;
