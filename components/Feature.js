import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="about"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12 ">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <img
              src="/assets/about.jpg"
              alt="Fundatia Sinca"
              layout="responsive"
              className="rounded-lg"
              quality={100}
              height={414}
              width={508}
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12">
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
          Fundatia Șinca este o organizatie non-guvernamentala, infiintata in anul 1997
          </h3>
          <p className="my-2 text-black-500">
            Scopul nostru este de a promova activitatea de voluntariat in domeniul educatiei si dezvoltarea inteligentei.<br/>
            Practic noi incercam sa schimbam lumea din jurul nostru prin:
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative circle-check custom-list">
              Ajutand copii si adolescenti la educatie
            </li>
            <li className="relative circle-check custom-list">
              Promovand persoane din medii nefavorabile sa fie curiosi, educati si inteligenti
            </li>
            <li className="relative circle-check custom-list">
              Ne asiguram ca cei din jurul nostru sa aiba oportunitatea sa fie curiosi
            </li>
            <li className="relative circle-check custom-list">
              Vrem sa vedem visele copiilor devenind realitate
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feature;
