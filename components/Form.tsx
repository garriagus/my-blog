"use client";

import React, { useState } from "react";
import siteMetadata from "@/data/siteMetadata";
import SocialIcon from "@/components/social-icons";

const Form = () => {
  return (
    <div className="max-w-6xl mx-auto bg-[#2e0249] rounded-lg">
      <div className="grid md:grid-cols-2 items-center gap-16 sm:p-10 p-4 font-[sans-serif]">
        <div>
          <h1 className="text-4xl font-extrabold text-white">Contáctame</h1>
          <p className="text-sm text-gray-400 mt-3">
            Cualquier consulta, no dudes en ponerte en contacto conmigo.
            Completa el siguiente formulario para dar tu opinión o sugerencia.
          </p>
          <ul className="mt-12 space-y-8">
            <li className="flex items-center">
              <SocialIcon
                kind="mail"
                href={`mailto:${siteMetadata.email}`}
                size={6}
              />
              <a href="#" className="text-white text-sm ml-3">
                <strong>{siteMetadata.email}</strong>
              </a>
            </li>
            <li className="flex items-center">
              <SocialIcon kind="tel" href={siteMetadata.github} size={6} />
              <a href="#" className="text-white text-sm ml-3">
                <strong>próximamente</strong>
              </a>
            </li>
            <li className="flex items-center">
              <SocialIcon kind="location" href={siteMetadata.github} size={6} />
              <a href="#" className="text-white text-sm ml-3">
                <strong>Ciudad Autónoma de Buenos Aires</strong>
              </a>
            </li>
          </ul>
          <ul className="flex mt-12 space-x-4">
            <li className="bg-[#a91079] hover:bg-[#a91079e2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <SocialIcon
                kind="facebook"
                href={siteMetadata.facebook}
                size={6}
              />
            </li>
            <li className="bg-[#a91079] hover:bg-[#a91079e2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <SocialIcon
                kind="linkedin"
                href={siteMetadata.linkedin}
                size={6}
              />
            </li>
            <li className="bg-[#a91079] hover:bg-[#a91079e2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  fill="#fff"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z"></path>
                </svg>
                {/*<SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />*/}
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg">
          <p className="text-sm font-semibold text-[#333]">
            Puede enviar un mensaje sobre cualquier temática
          </p>
          <div className="space-y-4 max-lg:mt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-md bg-[#a91079] text-white text-sm tracking-wider font-medium outline-none border-2 border-[#a91079] mr-4"
            >
              #Web design
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-md  bg-[#a91079] text-gray-200 text-sm tracking-wider font-medium outline-none border-2 border-gray-300 mr-4"
            >
              #IoT
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-md  text-white text-sm tracking-wider font-medium outline-none border-2 border-gray-300"
            >
              #FullStack
            </button>
          </div>
          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full rounded-md py-3 px-4 text-sm outline-[#a91079]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md py-3 px-4 text-sm outline-[#a91079]"
            />
            <input
              type="text"
              placeholder="Asunto"
              className="w-full rounded-md py-3 px-4 text-sm outline-[#a91079]"
            />
            <textarea
              placeholder="Mensaje"
              rows={6 as number}
              className="w-full rounded-md px-4 text-sm pt-3 outline-[#a91079]"
            ></textarea>
            <button
              type="button"
              className="text-white bg-[#a91079] hover:bg-[#a91079e2] font-semibold rounded-md text-sm px-4 py-3 flex items-center justify-center w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fill-rule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clip-rule="evenodd"
                  data-original="#000000"
                />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
