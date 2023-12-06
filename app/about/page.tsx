import Image from "next/image";
import SocialIcon from "@/components/social-icons";
import siteMetadata from "@/data/siteMetadata";
export default function Page() {
  return (
    <div className="flex justify-center content-center">
      <div className="border border-gray-300 rounded-sm shadow-lg py-10 px-10 w-4/5 mt-10 mb-10">
        <header>
          <div className="mb-3 flex space-x-4 rounded">
            <SocialIcon
              kind="mail"
              href={`mailto:${siteMetadata.email}`}
              size={6}
            />
            <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
            <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          </div>
          <div className="flex justify-between items-center">
            <div
              className="relative bg-cover bg-no-repeat rounded-full h-40 w-40"
              style={{ backgroundImage: "url(../logo.png)" }}
            >
              {/* Pseudo-elemento para la superposición */}
              <div className="absolute inset-0 bg-emerald-500 opacity-25 rounded-full"></div>
            </div>

            <div className="grid justify-items-end">
              <h1 className="text-5xl font-extrabold">Agustín Garrido</h1>
              <p className="text-xl mt-5">Full-Stack Developer</p>
            </div>
          </div>
        </header>
        <main className="flex gap-x-10 mt-10">
          <div className="w-2/6">
            <strong className="text-xl font-medium">
              Detalles de contacto
            </strong>
            <ul className="mt-2 mb-10">
              <li className="px-2 mt-1">
                <strong className="mr-1 text-2xl font-bold">E-mail </strong>
                <a href="mailto:" className="block">
                  agustin_g08@hotmail.com
                </a>
              </li>
              <li className="px-2 mt-1">
                <strong className="mr-1 text-2xl font-bold">Ubicación</strong>
                <span className="block">
                  Ciudad Autónoma de Buenos Aires, Argentina
                </span>
              </li>
            </ul>
            <h2 className="text-xl font-medium underline">Tecnologías</h2>
            <br />
            <strong className="text-xl font-medium">Front-End</strong>
            <ul className="flex flex-wrap mt-2 mb-10 space-x-1">
              <li className="px-2 mt-2  bg-red-500 text-white text-center rounded-lg">
                HTML
              </li>
              <li className="px-2 mt-2  bg-blue-500 text-white text-center rounded-lg">
                CSS
              </li>
              <li className="px-2 mt-2  bg-yellow-500 text-white text-center rounded-lg">
                JS
              </li>
              <li className="px-2 mt-2  bg-blue-500 text-white text-center rounded-lg">
                TypeScript
              </li>
              <li className="px-2 mt-2  bg-teal-500 text-white text-center rounded-lg">
                Tailwind CSS
              </li>
              <li className="px-2 mt-2  bg-purple-500 text-white text-center rounded-lg">
                Bootstrap
              </li>
              <li className="px-2 mt-2  bg-gray-800 text-white text-center rounded-lg">
                Next JS
              </li>
              <li className="px-2 mt-2  bg-blue-600 text-white text-center rounded-lg">
                React JS
              </li>
            </ul>

            <strong className="text-xl font-medium">Back-End</strong>
            <ul className="flex flex-wrap mt-2 mb-10 space-x-1">
              <li className="px-2 mt-2 w-auto bg-orange-500 text-white text-center rounded-lg">
                Java
              </li>
              <li className="px-2 mt-2 w-auto bg-green-500 text-white text-center rounded-lg">
                Spring
              </li>
              <li className="px-2 mt-2 w-auto bg-blue-500 text-white text-center rounded-lg">
                MySQL/PostgreSQL
              </li>
              <li className="px-2 mt-2 w-auto bg-green-500 text-white text-center rounded-lg">
                MongoDB
              </li>
              <li className="px-2 mt-2 w-auto bg-yellow-500 text-white text-center rounded-lg">
                Python
              </li>
            </ul>
            <strong className="text-xl font-medium">Further Education</strong>
            <ul className="mt-2 mb-10">
              <li className="px-2 mt-1">Like Lion Frontend School</li>
              <li className="px-2 mt-1">Udemy</li>
              <li className="px-2 mt-1">Freecodecamp</li>
            </ul>
            <strong className="text-xl font-medium">Currently learning</strong>
            <ul className="mt-2 mb-10">
              <li className="px-2 mt-1">About Web Accessibility</li>
              <li className="px-2 mt-1">and User Experience</li>
            </ul>
            <strong className="text-xl font-medium">Interests & Hobbies</strong>
            <ul className="mt-2">
              <li className="px-2 mt-1">Sustainability</li>
              <li className="px-2 mt-1">New technologies</li>
              <li className="px-2 mt-1">Blogging on dev.to</li>
              <li className="px-2 mt-1">Investment</li>
              <li className="px-2 mt-1">Travel</li>
            </ul>
          </div>

          <div className="w-4/6">
            <section>
              <h2 className="text-2xl pb-1 border-b font-semibold">About</h2>
              <p className="mt-4 text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus deserunt modi qui. Dolorum aliquid quasi velit
                cupiditate officia magnam impedit, sapiente hic, eaque quaerat
                ullam fugiat reprehenderit voluptates odit! Error. Tempore fuga
                iusto eveniet omnis impedit repellat ab repellendus nesciunt
                similique. Iure voluptates, enim nesciunt tempora amet earum,
                porro rem ad et sequi corrupti neque quidem? Debitis quo
                quibusdam nemo. Nam doloremque perferendis tempora asperiores,
                ullam praesentium et, voluptas pariatur illo aliquid similique,
                fugiat repellendus ipsa necessitatibus minus hic culpa quasi.
                Sed voluptate itaque accusantium earum cupiditate ipsa neque
                magnam!
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">
                Work Experiences
              </h2>
              <ul className="mt-2">
                <li className="pt-2">
                  <p className="flex justify-between text-sm">
                    <strong className="text-base">Company Name</strong>2019-2021
                  </p>
                  <p className="flex justify-between text-base">
                    Job title<small>location</small>
                  </p>
                  <p className="text-justify text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum, expedita exercitationem, cum quisquam laboriosam
                    voluptas aut libero officiis quae natus laborum explicabo,
                    labore nobis porro ad et soluta deleniti. Rerum?
                    Voluptatibus id officiis adipisci eligendi provident minima
                    sed. Ullam aliquid, fuga nisi modi amet quasi, quod veniam
                    eos sit culpa distinctio rem a tempora ad autem soluta
                    rerum, doloremque quas?
                  </p>
                </li>
                <li className="pt-2">
                  <p className="flex justify-between text-sm">
                    <strong className="text-base">Company Name</strong>2014-2019
                  </p>
                  <p className="flex justify-between text-base">
                    Job title<small>location</small>
                  </p>
                  <p className="text-justify text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus nemo fugiat neque tempore consectetur nihil alias
                    ullam esse corporis fugit deserunt maxime, numquam eos
                    repellendus, deleniti quae at fuga repudiandae! Perspiciatis
                    odit nobis sunt! Natus ea reiciendis enim! Itaque possimus
                    eaque perspiciatis architecto reiciendis laboriosam voluptas
                    corporis unde ducimus quis aliquid, distinctio dolorum quo
                    ullam a at, fugit veniam optio.
                  </p>
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">
                Education
              </h2>
              <ul className="mt-2">
                <li className="pt-2">
                  <p className="flex justify-between text-sm">
                    <strong className="text-base">Hello Univerisity</strong>
                    2022-2019
                  </p>
                  <p className="flex justify-between text-sm">
                    Digital marketing<small>GPA 4.0</small>
                  </p>
                </li>
                <li className="pt-2">
                  <p className="flex justify-between text-sm">
                    <strong className="text-base">World Univerisity</strong>
                    2022-2019
                  </p>
                  <p className="flex justify-between text-sm">
                    Fashion Design<small>GPA 3.8</small>
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </main>

        <footer className="mt-6">
          <p className="bg-gray-600 text-white text-center text-xs pt-2">
            The best way to predict the future is to create it.{" "}
            <small>- AbrahamLincoln</small>
          </p>
          <p className="bg-gray-600 text-white text-center text-sm pb-2">
            I am creating my future by learning new things and making small
            progresses everyday.
          </p>
        </footer>
      </div>
    </div>
  );
}
