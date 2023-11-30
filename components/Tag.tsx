import Link from "next/link";
import { allPosts } from "@/.contentlayer/generated";

const tagCount: { [tag: string]: number } = {};

{
  allPosts.map((post) => {
    return post.tags?.map((tag) => {
      // Guardar el tag en el objeto de conteo
      const formattedTag = tag.split(" ").join("-");
      tagCount[formattedTag] = (tagCount[formattedTag] || 0) + 1;
      return formattedTag;
    });
  });
}

const getRandomColorClass = () => {
  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-indigo-500",
    "text-purple-500",
    "text-pink-500",
    "text-teal-500",
    "text-orange-500",
    "text-gray-500",
  ];
  
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Tag = ({}) => {
  return (
    <>
      {Object.entries(tagCount).map(([tag, count]) => (
        <h3 key={count}
        className={`inline px-3 py-2 text-sm font-bold uppercase text-black dark:text-white dark:hover:text-green-500 hover:text-green-500 transition-colors duration-300 `}>
          <div >
            {tag} ({count})
          </div>
        </h3>
      ))}
    </>
  );
};

export default Tag;
