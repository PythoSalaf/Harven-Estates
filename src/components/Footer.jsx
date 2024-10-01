import { Link } from "react-router-dom";
import { Footerlogo } from "../assets";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-4 bg-primary">
      <div className="layout">
        <div className="grid items-start w-full grid-cols-1 md:grid-cols-3 gap-y-5 lg:grid-cols-4">
          <Link to="/" className="flex items-end gap-x-2 m">
            <img src={Footerlogo} alt="logo" className="w-[30px] md:w-[37px]" />
            <p className="text-xs font-semibold text-white md:text-sm">
              Haven real estate inc.
            </p>
          </Link>
          <div className="">
            <h3 className="text-lg font-semibold text-white md:text-xl">
              Products
            </h3>
            <div className="flex flex-col text-white gap-y-[2px] ">
              <Link>All properties</Link>
              <Link>Agents</Link>
              <Link>For sale</Link>
              <Link>For rent</Link>
            </div>
          </div>
          <div className="">
            <h3 className="text-lg font-semibold text-white md:text-xl">
              Support
            </h3>
            <div className="flex flex-col text-white gap-y-[2px] ">
              <Link>Blog</Link>
              <Link>Help</Link>
              <Link>FAQs</Link>
            </div>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-semibold md:text-xl">Subscribe</h3>
            <p className="text-sm md:text-base">
              Receive latest properties straight to your inbox once a week?
            </p>
            <div className="relative mt-4">
              {" "}
              <input
                type="text"
                placeholder="Your Email"
                className="w-[70%]  md:w-[90%] lg:w-full px-4 py-1 pr-10 text-black border rounded-md focus:outline-none focus:ring-transparent focus:ring-none"
              />
              <IoIosArrowRoundForward
                size={26}
                className="absolute transform -translate-y-1/2 pointer-events-none text-primary right-28 sm:right-56 md:right-10 lg:right-3 top-1/2"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between mb-2 text-white md:items-center md:flex-row mt-9">
          <div className="flex items-center mb-3 gap-x-3">
            <div className="flex items-center justify-center bg-white rounded-full cursor-pointer size-6 md:size-9 text-primary">
              <FaFacebookF />
            </div>
            <div className="flex items-center justify-center bg-white rounded-full cursor-pointer size-6 md:size-9 text-primary">
              <FaTwitter />
            </div>
            <div className="flex items-center justify-center bg-white rounded-full cursor-pointer size-6 md:size-9 text-primary">
              <FaInstagram />
            </div>
          </div>
          <div className="flex flex-row items-start md:items-center gap-x-4 md:gap-x-5">
            <p className="text-sm font-semibold md:text-base">
              Copyright © Haven 2024.
            </p>
            <p className="text-sm font-semibold md:text-base">
              Privacy Policy | Cookie
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
