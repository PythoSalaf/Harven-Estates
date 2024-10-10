import { MdKeyboardArrowLeft } from "react-icons/md";
import { PiShareNetworkLight } from "react-icons/pi";

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
    </div>
  );
};

export default PropertyDetails;
