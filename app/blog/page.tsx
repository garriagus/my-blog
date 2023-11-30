import Image from "next/image";
import bars from "@/public/next.svg";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import Tag from "@/components/Tag";

const POSTS_PER_PAGE = 5;

export default function Blog() {
  return (
    <>
      <div>
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            titulos
          </h1>
        </div>
        <div className="flex sm:space-x-24">
          <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
            <div className="px-6 py-4">
              <Link
                href={`/blog`}
                className="font-bold uppercase text-green-500 hover:text-primary-500 dark:text-green-500 dark:hover:text-primary-500"
              >
                Todo el contenido
              </Link>
              <ul className="list-outside list-disc space-y-2">
                <Tag></Tag>
              </ul>
            </div>
          </div>
          <div>
            <ul>
              {allPosts.map((post) => {
                const { _id, title, date, description, author, slug, tags } =
                  post;
                return (
                  <li key={_id} className="py-5">
                    <article className="flex flex-col space-y-2 xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{date}</time>
                        </dd>
                      </dl>
                      <div className="space-y-3">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/${title}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags?.map((tag, index) => (
                              <h2 key={index} style={{ marginRight: "8px" }}>
                                {tag}
                              </h2>
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {title} asdasd{" "}
                        </div>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
