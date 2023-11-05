import Image from "next/image";
import PostSection from "@/components/post-section";
import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    
    <div>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white-900">
              {" "}
              Agustín Garrido
              <a className="hidden lg:inline-block">
                Full-Stack | Web & Iot Developer
              </a>
            </h1>
            <p className="mb-8 leading-relaxed">
              {" "}
              Mi objetivo es compartir conocimientos y experiencias relacionadas
              con diversos lenguajes de programación, tecnologías y tendencias
              en el mundo digital.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Sobre Mí
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                Mis Proyectos
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              src="/notebook.png"
              alt="Next.js Logo"
              width={600}
              height={600}
              priority
            />
          </div>
        </div>
      </section>
      <PostSection />
    </div>
  );
}
