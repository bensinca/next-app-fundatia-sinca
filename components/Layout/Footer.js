import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <h1 className="h-8 w-auto font-medium text-black-600 text-2xl">Fundatia Sinca</h1>
          <p className="mb-4">
            Pentru mai multe detalii, urmariti-ne pe social media sau contactati-ne
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">©2021 Fundatia Sinca</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Ne gasiti pe:</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
            Str. Sovata,
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
            nr.31, ap.3,
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
             Oradea, Bihor
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Implica-te</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Doneaza lunar
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Devin-o voluntar
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Fii Partener
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Despre 3% din impozit
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Suntem ocupati:</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Cu scoala din Holod
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Copii din satul Forosig
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
