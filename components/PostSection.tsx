"use client";

import React, { useState } from "react";
import Card from "@/components/Card";

import { allPosts } from "@/.contentlayer/generated";

const PostSection = () => {
  return (
   <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
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
        author_image: post.author_image,
      }}
    ></Card>
  ))}
</div>

  );
};

export default PostSection;
