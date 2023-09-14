import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import andrew from "../assets/andrew-ceo-kenic.jpg";
import Gitau from "../assets/gitau-marketing-manager.jpg";

const Speakers = () => {
  const [open, setOpen] = useState(false);
  const [speakerContent, setSpeakerContent] = useState(null);

  const handleOpen = (content) => {
    setSpeakerContent(content);
    setOpen(true);
  };

  const handleClose = () => {
    setSpeakerContent(null);
    setOpen(false);
  };

  const andrewContent = (
    <>
      <DialogHeader>Andrew Lewela Mwanyota</DialogHeader>
      <DialogBody>
        Meet Andrew Lewela, the Chief Evangelist & CEO at KeNIC. Andrew brings a
        diverse range of experiences and expertise to his role. Prior to joining
        KeNIC, he worked at Sambali Group Ltd, where he focused on building a
        technology and government affairs advisory practice. During this time,
        Andrew provided valuable guidance to clients in the areas of
        cybersecurity investments. Before his work at Sambali Group Ltd, Andrew
        served as an advisor at Checkpoint Software Technologies. In this role,
        he specialized in advising government entities and telecommunication
        companies on cybersecurity strategies and investments. With over 18
        years of experience in the public and private sectors, Andrew has held
        various positions in software/technology sales, country marketing,
        strategic planning, project management, government affairs, and product
        development. Throughout his career, Andrew has been involved with
        prominent organizations such as the ICT Authority, Safaricom, Oracle,
        International Trade Centre, and Cellulant. His expertise extends beyond
        his professional endeavors, as he has also shared his knowledge as a
        lecturer in project management at Kenya Methodist University’s Nairobi
        campus. Andrew’s research interests lie in the intersection of policy,
        development, and the digital economy. His wealth of experience and
        diverse background make him a valuable Andrew holds a Master of Commerce
        (Management Information Systems & Project Management) from Deakin
        University, Master of Public Policy, and Management (pending
        dissertation) from Strathmore Business School, Graduate Diploma in
        Management Information Systems jointly from Strathmore and Greenwich
        university, Certificate, International Module for Global Leaders from
        New York University-Robert F. Wagner Graduate School of Public Service
        and a Bachelor of Science (Mathematics & Physics) from the university of
        Nairobi. Notably, Andrew is an alumnus of Starehe Boys’ Centre. In terms
        of his strengths, Andrew possesses a curious mindset and is always open
        to learning and personal growth, both for himself and his team. He is
        highly self-driven and motivated to achieve success. When not too busy
        working with other leaders to put Kenya on the map as the Silicon
        Savannah, Andrew enjoys the outdoors and debating on the topics of
        leadership and philosophy
      </DialogBody>
      <DialogFooter>
        <Button variant="text" onClick={handleClose} className="mr-1">
          <span>Close</span>
        </Button>
      </DialogFooter>
    </>
  );

  const gitauContent = (
    <>
      <DialogHeader>Gitau Muraguri</DialogHeader>
      <DialogBody>
        Gitau Muraguri is a marketing professional with 20 years of experience
        in Strategic Marketing & Brand Building. He is now leading the Marketing
        & Communication efforts at KeNIC bringing a wealth of knowledge and
        expertise through his various roles in the marketing and brand building
        fields. He holds a degree in International Business Administration,
        International Marketing from United States International University. His
        background spans areas such as Brand & Marketing Strategy, Product
        Commercialisation, Business Strategy, Partnerships and Customer Journey
        Experiential Design in both Fast Moving Consumer Goods industry as well
        as Financial Services
      </DialogBody>
      <DialogFooter>
        <Button variant="text" onClick={handleClose} className="mr-1">
          <span>Close</span>
        </Button>
      </DialogFooter>
    </>
  );

  return (
    <div className="pb-6 pt-8 bg-[#e7e4e4]" id="speakers">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl lg:text-4xl text-[#010101] font-bold mb-4">
          Our Speakers
        </h1>
        <p className="text-center mx-[1px] lg:mx-0 lg:w-[49%] pb-4 lg:pb-8 text-lg text-[#010101]">
          Industrial leaders, captains of industry, policy shapers in Kenya and
          beyond debating the issues that affect how we experience the Internet
          and how that can be improved
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-4">
        <div
          className="lg:w-[300px] mx-3 relative cursor-pointer"
          onClick={() => handleOpen(andrewContent)}
        >
          <div className="absolute bottom-3 px-3 bg-gradient-to-t from-[#0000009e] to-[#00000024] p-3">
            <h1 className="text-white text-sm">Andrew Lewela Mwanyota</h1>
            <h3 className="text-white text-sm">CEO,KENIC</h3>
          </div>
          <img
            src={andrew}
            alt="andrew"
            className="h-[400px] rounded-md shadow-lg hover:scale-105"
          />
        </div>
        <div
          className="lg:w-[300px] mx-3 relative cursor-pointer"
          onClick={() => handleOpen(gitauContent)}
        >
          <div className="absolute bottom-3 px-3 bg-gradient-to-t from-[#0000009e] to-[#00000024] p-3">
            <h1 className="text-white text-sm">Gitau Muraguri</h1>
            <h3 className="text-white text-sm">Marketing Manager, KENIC</h3>
          </div>
          <img
            src={Gitau}
            alt="gitau"
            className="h-[400px] rounded-md shadow-lg hover:scale-105"
          />
        </div>
      </div>

      <Dialog open={open} handler={handleClose}>
        <div className="max-h-[70vh] overflow-y-auto">{speakerContent}</div>
      </Dialog>
    </div>
  );
};

export default Speakers;
