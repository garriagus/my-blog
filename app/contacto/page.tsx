import Image from "next/image";
import bars from "@/public/next.svg";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import Tag from "@/components/Tag";
import Form from "@/components/Form";

const POSTS_PER_PAGE = 5;
export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
     
   <Form />
    </div>
  );
}
