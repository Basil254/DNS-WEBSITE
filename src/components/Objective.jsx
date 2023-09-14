
import React from "react";
import Test from "../assets/bob-icann-speech.JPG";
import { objectives } from "../data";
import { Fade, Slide } from "react-awesome-reveal";

const Objective = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-2 lg:mx-16 justify-center gap-5 my-10">
      <div className="w-full lg:w-[50%] bg-red-400/30 flex justify-center items-center p-6 lg:rounded-full">
        <img
          src={Test}
          alt="objective discussion"
          className="lg:w-[500px] shadow-md rounded-md hover:-rotate-3 hover:scale-105"
        />
      </div>
      <div className="lg:w-[50%]">
        <Slide triggerOnce direction="right">
          <h1 className="text-2xl lg:text-4xl text-[#010101] font-bold mb-4">
            Topics To Be Addressed
          </h1>
        </Slide>

        <Fade cascade>
          <ul className="list-decimal pl-8 flex flex-col gap-5 text-justify">
            {objectives.map(({ topic }, index) => (
              <li className="text-lg text-[#606163] mr-2" key={index}>
                {topic}
              </li>
            ))}
          </ul>
        </Fade>
      </div>
    </div>
  );
};

export default Objective;
