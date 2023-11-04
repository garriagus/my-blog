"use client"

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle"

import { allPosts } from "@/.contentlayer/generated"

const PostSection = () => {
    const [isHovered, setIsHovered] = useState(false);

    const [hoveredValue, setHoveredValue] = useState('default.jpeg');

    const onMouseEnter = (value: any) => {
        setIsHovered(true);
        setHoveredValue(value);
    };

    const onMouseLeave = () => {
        setHoveredValue('default.jpeg');
    };


    return (
        <>
            <section className="text-gray-700 body-font border-t border-gray-200" 
                    onMouseLeave={onMouseLeave}>
                                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden ">

                        <Image
                            className={`object-cover object-center h-full w-full transition-opacity duration-1000 opacity-100 ${isHovered ?
                                `transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300` : ``}`}

                            src={`/${hoveredValue}`}
                            alt="Next.js Logo"
                            width={600}
                            height={600}
                            priority
                        />

                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="prose dark:prose-invert">
                            <div className="flex flex-col mb-10 lg:items-start items-center">
                                <div className="flex-grow">

                                    {allPosts.map((post) => (
                                        <article key={post._id}
                                            onMouseEnter={() => onMouseEnter(post.image)}
                                        >
                                            <Link href={post.slug}>
                                                <h2 className="text-lg title-font font-medium mb-3">{post.title}</h2>
                                            </Link>
                                            <p className="leading-relaxed text-base">
                                                {post.description && <p>{post.description}</p>}
                                            </p>
                                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </article>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PostSection;