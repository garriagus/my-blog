"use client";

import React, { useState } from "react";
import Card from "@/components/Card";

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
    <div className="pt-12 pb-6 flex-1 ">
      <div className="container mx-auto">
        <div className="flex flex-wrap md:-mx-3">
          {allPosts.map((post) => (
            <Card
              key={post._id}
              posts={{
                id: post._id,
                title: post.title,
                image: post.image,
                description: post.description,
                date: post.date,
                author: post.author,
                author_image: post.author_image
              }}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostSection;
