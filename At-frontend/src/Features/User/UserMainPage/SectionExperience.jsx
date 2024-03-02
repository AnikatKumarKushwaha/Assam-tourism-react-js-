import React from "react";
import img1 from "../../../assets/sectionExperience_1.jpg";
import img2 from "../../../assets/sectionExperience_2.jpg";
import img3 from "../../../assets/sectionExperience_3.jpg";

export default function SectionExperience() {
  return (
    <div className=" -mt-[11vh] bg-slate-100 pb-10 pt-32">
      <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-center text-2xl font-semibold uppercase text-transparent md:text-3xl md:font-bold">
        Experience Assam Culture, Festival, Events
      </div>
      <div className=" mx-2 mt-7 flex flex-col md:mx-20 md:mt-14 md:flex-row md:justify-between   lg:mx-40 ">
        <div className="w-full  text-slate-600">
          <h3 className=" mb-2 font-medium md:mb-3 md:font-semibold">
            Your going to fall in love with Assam
          </h3>
          <p className=" text-sm font-normal md:font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            sit sed id voluptatibus necessitatibus explicabo qui? Iste illum est
            aut ipsa incidunt, eos inventore nemo officiis fugit expedita
            voluptate rem.
          </p>
          <h3 className=" my-2 font-medium md:mb-3 md:font-semibold">
            Live adventures like never before
          </h3>
          <p className="text-sm font-normal md:font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            tempora quasi animi beatae provident, autem ut libero sunt delectus
            ipsam nam et rerum odio. Ut assumenda vitae ullam tempore quod?
          </p>
          <button className="hover: my-3 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 px-2 py-1 shadow-lg transition-all duration-300 hover:scale-105	hover:shadow-xl md:px-3 md:py-2">
            Explore the eperiences
          </button>
        </div>
        <div className="order-first mx-auto  h-72 w-full md:order-none md:h-auto">
          <div className="relative md:ml-4">
            <img
              src={img1}
              alt="sectionImage"
              className=" hover: absolute -top-3 left-0 z-10 h-40 w-1/2 rounded-sm object-cover shadow-xl transition-all duration-300 hover:z-20 hover:scale-105 hover:shadow-2xl"
            />
            <img
              src={img2}
              alt="sectionImage"
              className=" hover: absolute right-3 top-7 z-10 h-40 w-1/2 rounded-sm object-cover shadow-xl transition-all duration-300 hover:z-20 hover:scale-105 hover:shadow-2xl md:right-9"
            />
            <img
              src={img3}
              alt="sectionImage"
              className=" hover: absolute left-[20%] top-20 z-10 h-40 w-1/2 rounded-sm object-cover shadow-xl transition-all duration-300 hover:z-20 hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
