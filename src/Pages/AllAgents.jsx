import { Link } from "react-router-dom";
import { Agent2 } from "../assets";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const AllAgents = () => {
  return (
    <div className="w-full">
      <div className=" layout">
        <h3 className="mt-2 text-2xl font-semibold uppercase md:text-3xl">
          agents
        </h3>
        <div className="flex flex-col-reverse items-start justify-between w-full gap-8 my-8 md:flex-row">
          <div className=" w-full md:w-[70%] md:border border-[#dadada] ">
            <div className="flex items-start flex-col md:flex-row w-full md:w-[94%] mx-auto py-4 bg-white gap-5  md:gap-7">
              <img
                src={Agent2}
                alt="agent"
                className=" md:w-[220px] md:h-[220px]"
              />
              <div className="w-full md:w-[90%]">
                <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
                  Samuel Palma
                </h3>
                <h5 className="my-2">
                  Company Agent at
                  <span className="text-primary">
                    {" "}
                    Modern House Real Estate
                  </span>
                </h5>
                <div className="flex items-center justify-between w-full mb-3 border-b">
                  <h4 className="text-base font-semibold md:text-lg">Office</h4>
                  <p className="text-base md:text-lg ">321 456 9865</p>
                </div>
                <div className="flex items-center justify-between w-full mb-3 border-b">
                  <h4 className="text-base font-semibold md:text-lg">Mobile</h4>
                  <p className="text-base md:text-lg ">321 456 9865</p>
                </div>
                <div className="flex items-center justify-between w-full mb-3 border-b">
                  <h4 className="text-base font-semibold md:text-lg">Fax</h4>
                  <p className="text-base md:text-lg ">321 456 9865</p>
                </div>
                <div className="flex items-center justify-between w-full mb-3 border-b">
                  <h4 className="text-base font-semibold md:text-lg">Email</h4>
                  <p className="text-base md:text-lg ">samuel@houzez.com</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <FaFacebookF className="cursor-pointer size-[20px] text-primary" />
                    <FaWhatsapp className="cursor-pointer size-[20px] text-green-500" />
                    <FaLinkedinIn className="cursor-pointer size-[20px] text-primary" />
                    <FaInstagram className="cursor-pointer size-[20px] text-primary" />
                  </div>
                  <Link
                    to=""
                    className="text-base font-semibold text-primary md:text-lg"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[30%]">
            <div className="w-full py-3 shadow-lg">
              <div className="w-[90%] mx-auto">
                <h2 className="text-xl font-semibold md:text-2xl">
                  Find Agent
                </h2>
                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Enter Agent Name"
                    className="border border-[#dadada] rounded-lg px-2 w-full h-[38px]"
                  />
                  <select
                    name=""
                    id=""
                    className="w-full h-8 px-2 mt-4 rounded-md"
                  >
                    <option value="">Select Category</option>
                    <option value="">Residential Agent</option>
                    <option value="">Commercial Agent</option>
                    <option value="">Rental Agent</option>
                    <option value="">Luxury Property Agent</option>
                    <option value="">Investment Property Agent</option>
                    <option value="">Buyer's Agent</option>
                    <option value="">Seller's Agent</option>
                    <option value="">Property Manager</option>
                  </select>

                  <select
                    name=""
                    id=""
                    className="w-full h-8 px-2 mt-4 rounded-md"
                  >
                    <option value="">Select Location</option>
                    <option value="">Lagos</option>
                    <option value="">Osogbo</option>
                    <option value="">Abuja</option>
                    <option value="">Kaduna</option>
                    <option value="">Ibadan</option>
                  </select>
                  <button className="w-full py-[5px] text-sm md:text-base mt-4 text-white rounded-lg bg-primary">
                    Search agent
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAgents;
