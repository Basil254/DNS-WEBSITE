import React from "react";

// images
import logo from "../assets/KeNICLogo.png";

// pdf file
import sponsor_package from "../static/KDNS_Sponsorship_Package_V1.pdf";

// material tailwind
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { BiDonateHeart } from "react-icons/bi";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <a href="/" className="flex items-center hover:text-primary">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
        onClick={() => setOpenNav(false)}
      >
        <a href="#about" className="flex items-center hover:text-primary">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
        onClick={() => setOpenNav(false)}
      >
        <a href="#speakers" className="flex items-center hover:text-primary">
          Our Speakers
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
        onClick={() => setOpenNav(false)}
      >
        <a href="#contact" className="flex items-center hover:text-primary">
          Contact Us
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <a href="/">
            <img src={logo} alt="DNS Logo" width={70} className="h-auto" />
          </a>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              size="sm"
              className="hidden lg:inline-block !bg-primary text-secondary"
              onClick={() => setOpenNav(false)}
            >
              <a href="#contact" className="flex items-center">
                <span className="shadow-md shadow-white bg-white px-3 rounded-full">
                  Register
                </span>
              </a>
            </Button>

            <a
              href={sponsor_package}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center"
            >
              <Button
                size="sm"
                className="hidden lg:inline-block !bg-primary"
                onClick={() => setOpenNav(false)}
              >
                <span className="shadow-lg px-1 font-bold font-mont flex items-center justify-center">
                  <span className="block">Become a Sponsor</span>
                  <span className="block text-lg text-secondary pl-1">
                    <BiDonateHeart />
                  </span>
                </span>
              </Button>
            </a>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <Button
            size="sm"
            fullWidth
            className="mb-2 !bg-primary text-secondary"
            onClick={() => setOpenNav(false)}
          >
            <a href="#contact">
              <span className="shadow-md shadow-white bg-white px-3 rounded-full">
                Register
              </span>
            </a>
          </Button>
          <a href={sponsor_package} target="_blank" rel="noreferrer noopener">
            <Button
              size="sm"
              fullWidth
              className="mb-2 mt-5 !bg-primary"
              onClick={() => setOpenNav(false)}
            >
              <span className="shadow-lg px-1 font-bold font-mont flex items-center justify-center">
                <span className="block">Become a Sponsor</span>
                <span className="block text-lg text-secondary pl-1">
                  <BiDonateHeart />
                </span>
              </span>
            </Button>
          </a>
        </Collapse>
      </Navbar>
    </div>
  );
}
