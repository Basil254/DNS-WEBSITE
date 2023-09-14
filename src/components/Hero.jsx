// images
import Banner from "../assets/hero-banner.jpg";
import DNSlOGO from "../assets/KenyaDNSForumLogo.png";
import { Bounce, Slide, Zoom } from "react-awesome-reveal";
import CountDownTimer from "./CountDownTimer";

const Hero = () => {
  return (
    <div>
      <div className="relative  lg:min-h-[700px] lg:max-h-[700px] lg:h-[700px]">
        <div className="absolute bg-gradient-to-t from-[#0d2d62cc] to-[#dd3939cc] h-[700px] lg:min-h-[700px] lg:max-h-[700px] lg:h-[700px] w-full flex justify-center  flex-col  -mt-14 mx-auto flex-wrap">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
            <div className="pt-[90px] lg:pt-0">
              <Slide triggerOnce direction="left" duration={2000}>
                <img
                  src={DNSlOGO}
                  alt="hero banner"
                  className="w-[450px] h-[245px]"
                />
              </Slide>
            </div>
            <Bounce delay={1300}>
              <div className="w-1 hidden lg:block h-[205px] bg-white"></div>
            </Bounce>
            <div className="">
              <Slide triggerOnce direction="right" duration={2000}>
                <h1 className="text-2xl text-center lg:text-start lg:text-5xl font-bold text-white mb-3 max-w-[800px]">
                  Kenya Domain Name System (DNS) Forum
                </h1>

                <h3 className="text-xl text-center lg:text-start text-white lg:text-3xl font-semibold my-6">
                  November 1<sup>st</sup> - 2<sup>nd</sup> 2023
                </h3>
                <h1 className="text-sm text-center lg:text-start text-white lg:text-xl font-semibold">
                  Nairobi, Kenya
                </h1>
              </Slide>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="flex justify-center items-center py-5">
              <Zoom delay={1000}>
                <div className="flex justify-center">
                  <div class="text-lg italic font-semibold text-white font-mont">
                    <span className="text-primary-light ml-10 block mt-5 text-center">
                      ~ THEME
                    </span>
                    <div>"NAVIGATING THE FUTURE OF CYBERSECURITY</div>
                    <div className="text-center">
                      & <div />
                      <div> UNLEASHING THE POWER OF DOMAINS"</div>
                      <div className="flex justify-center"></div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
          <div className="w-auto mx-auto">
            <Zoom delay={1400}>
              <CountDownTimer />
            </Zoom>
          </div>
        </div>
        <img
          src={Banner}
          alt="hero banner"
          className="w-full h-[642px] lg:max-h-[643px]"
        />
      </div>
    </div>
  );
};

export default Hero;
