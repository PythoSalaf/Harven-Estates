import { MdKeyboardArrowLeft } from "react-icons/md";
import { PiShareNetworkLight } from "react-icons/pi";
import { PropertySlider } from "../components";
import { IoLocationOutline } from "react-icons/io5";

const PropertyDetails = () => {
  return (
    <div className="layout py-5">
      <div className="flex items-center justify-between">
        <div className="">
          <button className="flex items-center px-3 md:px-5 text-base  md:text-lg py-[6px] bg-graySecondary gap-x-[2px] rounded-lg">
            <MdKeyboardArrowLeft className="size-5 md:size-6" />
            <span>Back</span>
          </button>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-1">
            <PiShareNetworkLight />
            <span>Share</span>
          </div>
          <div className="flex items-center gap-x-1">
            <PiShareNetworkLight />
            <span>Share</span>
          </div>
        </div>
      </div>
      <div className="my-8">
        <PropertySlider />
      </div>
      <h3 className="my-3 text-2xl md:text-3xl lg:text-[44px]">
        A stunning two bedroom two bathroom apartment, Ibadan.
      </h3>
      <div className="flex items-center gap-x-2 mt-5">
        <p className="text-primary font-semibold text-lg md:text-xl">
          #15,000,00
        </p>
        <div className="flex items-center gap-x-1">
          <IoLocationOutline className="size-4 md:size-5" />
          <p className="text-sm md:text-base lg:text-lg">
            Sango, Ibadan, Oyo state, Nigeria.
          </p>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default PropertyDetails;
