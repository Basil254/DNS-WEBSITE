import React from "react";
import { TbBrandTelegram } from "react-icons/tb";
import { FiMapPin } from "react-icons/fi";
import {
  BsTelephoneFill,
  BsFacebook,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IconButton } from "@material-tailwind/react";

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center my-12" id="contact">
      <div className="flex flex-col lg:flex-row mx-4 md:mx-7 lg:justify-between lg:mx-6 xl:justify-start gap-8 pt-5 md:pt-9">
        <div className="bg-blue-500/20 px-2 md:px-5 pb-5 xl:pt-5 rounded-2xl drop-shadow-md mt-6">
          <form>
            <div className="flex flex-col md:flex-row  mt-11 xl:mt-0 md:items-center lg:justify-center">
              <div className="">
                <input
                  type="text"
                  placeholder="Name*"
                  name="name"
                  className="border py-2 focus:outline-none focus-visible:ring-1 focus:border-b-4 focus:border-green-700 rounded-md pr-7 pl-3 w-full md:w-[200px]"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className="border py-2 focus:outline-none focus-visible:ring-1 focus:border-b-4 focus:border-green-700 rounded-md md:pr-7 pl-3 w-full md:w-[329px]"
                />
              </div>
            </div>

            <div className=" pt-4">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="border py-2 focus:outline-none focus-visible:ring-1 focus:border-b-4 focus:border-green-700 rounded-md w-full pr-7 pl-3"
              />
            </div>

            <div className="pt-4">
              <textarea
                rows="6"
                name="textarea"
                placeholder="Message"
                className="border py-2 focus:outline-none focus-visible:ring-1 focus:border-b-4 focus:border-green-700 rounded-md pr-7 pl-3 w-full"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="px-4 py-2 rounded-md text-sm uppercase font-semibold bg-[#26b4f1] opacity-90 hover:bg-blue-600/70 drop-shadow-lg"
              >
                <span className="flex items-center justify-between gap-1 hover:gap-2 text-white">
                  <div>Send</div>
                  <div>
                    <TbBrandTelegram size={20} />
                  </div>
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="">
          <h1 className="text-2xl uppercase font-semibold opacity-80 pt-2">
            Talk To Us
          </h1>
          <span className="bg-blue-900 w-[35px] h-[2px] block mb-3"></span>
          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-2">
              <span className="block p-[2px] border border-blue-700 drop-shadow-lg rounded-2xl">
                <span className="block bg-blue-500 p-2 text-white/80 rounded-lg drop-shadow-md">
                  <BsTelephoneFill size={25} />
                </span>
              </span>
              <span className="text-xl opacity-70 hover:text-blue-900">
                <a href="tell:+254 702 693 515">(+254) 702 693 515</a>
                <br />
                <a href="tell:+254715275483">(+254) 715 275 483</a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="block p-[2px] border border-blue-700 drop-shadow-lg rounded-2xl">
                <span className="block bg-blue-500 p-2 text-white/80 rounded-lg drop-shadow-md">
                  <AiOutlineMail size={25} />
                </span>
              </span>
              <span className="text-xl opacity-70 hover:text-blue-900">
                <a href="mailto:kenyadnsforum@kenic.or.ke">kenyadnsforum@kenic.or.ke</a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="block p-[2px] border border-blue-700 drop-shadow-lg rounded-2xl">
                <span className="block bg-blue-500 p-2 text-white/80 rounded-lg drop-shadow-md">
                  <FiMapPin size={25} />
                </span>
              </span>
              <span className="text-xl opacity-70">
                CAK Centre, Opposite Kianda School, Waiyaki Way
              </span>
            </li>
          </ul>
          <div className="flex gap-4 my-5">
            <a
              href="https://www.youtube.com/channel/UCfpfyvDcBZn5YLP7hj1z2Ug"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
                <BsYoutube />
              </IconButton>
            </a>

            <a
              href="https://www.facebook.com/Kenictld"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
                <BsFacebook />
              </IconButton>
            </a>

            <a
              href="https://www.instagram.com/kenictld/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className="rounded bg-[#ea4c89] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
                <BsInstagram />
              </IconButton>
            </a>

            <a
              href="https://twitter.com/KenicTLD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                x
              </IconButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
