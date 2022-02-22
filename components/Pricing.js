import React from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";


const Pricing = () => {
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            Implica-te
          </h3>
          <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
            Te poti implica in activitatea noastra, nu doar financiar ci si prin voluntariat: 
          </p>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <img
                  src="/assets/Free.png"
                  width={145}
                  height={165}
                  alt="Voluntariat"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Fii voluntar
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Daca nu poti sa inchizi ochii la ce se intampla din jur
                </li>
                <li className="relative check custom-list my-2">
                  Daca vrei sa ajuti copiilor sa se dezvolte
                </li>
                <li className="relative check custom-list my-2">
                  Ai o pasiunea pentru educatie
                </li>
                <li className="relative check custom-list my-2">
                  Iti plac zambetele
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  Atunci
                </p>
                <ButtonOutline>Implica-te</ButtonOutline>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <img
                  src="/assets/Standard.png"
                  width={145}
                  height={165}
                  alt="Standard Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Doneaza o data{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Promitem transparenta financiara
                </li>
                <li className="relative check custom-list my-2">
                  O sa poti sa vezi impactul donatiei tale
                </li>
                <li className="relative check custom-list my-2">
                  Vei deveni parte din comunitatea noastra
                </li>
                <li className="relative check custom-list my-2">
                  O sa fii invitat la evenimentele noastre pentru donatori
                </li>

              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                 <span className="text-black-500">min</span> 50 RON
                </p>
                <ButtonOutline>Doneaza</ButtonOutline>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <img
                  src="/assets/Premium.png"
                  width={145}
                  height={165}
                  alt="Premium Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Doneaza Lunar{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Transparenta
                </li>
                <li className="relative check custom-list my-2">
                  Membru Special al Fundatiei
                </li>
                <li className="relative check custom-list my-2">
                  Invitat special la evenimentele noastre
                </li>
                <li className="relative check custom-list my-2">
                  Poti sa ne ajuti cu viziunea noastra
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                   50 RON <span className="text-black-500">/ mo</span>
                </p>

                <ButtonOutline>Doneaza</ButtonOutline>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
            Unde suntem activi
          </h3>
          <p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12">
            Momentam activitatea noastra se restrange in judetul Bihor.
          </p>
          <div className="py-12 w-full px-8 mt-16">
            <img src="/assets/bihor.png" className="w-full h-auto" />
          </div>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            Ce spun partenerii nostrii despre noi{" "}
          </h3>
          <p className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
            Apreciem mult fiecare partener ce ajuta misiunea noastra, de aceea parerea partenerilor nostrii este importanta
          </p>
          <div className="w-full flex flex-col py-12">
            <Testimoni />
          </div>
          <div className="relative w-full mt-16">
            <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
              <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                  Doneaza 3% din<br /> Impozitul tau
                </h5>
                <p>Daca vrei sa aflii mai multe</p>
              </div>
              <ButtonPrimary>Contacteaza-ne</ButtonPrimary>
            </div>
            <div
              className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
              style={{ filter: "blur(114px)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
