import React from "react";
// image
import AboutKenic from "../assets/DNSForumKE.JPG";

import ReadMore from "./ReadMore";

const AboutUs =
  "The Kenya Domain Name System Forum is an annual open event for stakeholders in the Domain Name Industry in East Africa and beyond organized by Kenya Network Information Centre (KeNIC). The first Kenya DNS forum was held in 2021- virtual event. In 2022, this annual event was themed ‘Cybersecurity’ and saw over 200 local, regional and international delegates attend a hugely successful forum. Partners included Communications Authority of Kenya, Huawei, Liquid Technologies, Africa Data Centers, PAIX and KENET among others. The event was held at Emara Sereni on 4 – 6 October 2022. The Kenya Domain Name System Forum aims to help the Kenya Registry to grow at a competitive rate and ensure that Kenya is on par with the rest of the world’s Registries. This event will offer opportunities to network with other stakeholders and industry experts, discuss business, technical, and policy aspects of the approaches to establish and expand online presence.”.";

const About = () => {
  return (
    <div id="about">
      <div className="flex flex-col lg:justify-between lg:flex-row gap-4 mx-2 lg:mx-8 mb-4 mt-8 lg:mt-0">
        <div className="w-full lg:w-[50%] h-[310px] lg:p-2 border-green-300/30 border-8 rounded-md bg-gradient-to-r from-pink-500 via-blue-500 to-red-500 ">
          <figure className="w-full h-[300px] lg:-mt-7 lg:-ml-6 rounded-md">
            <img
              src={AboutKenic}
              alt="about"
              className="w-full h-full object-cover rounded-md"
            />
          </figure>
        </div>
        <div className="w-full lg:w-[50%] px-4">
          <h1 className="text-2xl lg:text-4xl text-[#010101] font-bold mb-4">
            About Kenya DNS Forum
          </h1>
          <div className="text-[#5e5e61f3]">
            <ReadMore text={AboutUs} maxChars={600} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
