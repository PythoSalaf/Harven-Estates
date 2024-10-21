import { useState } from "react";
import Button from "./Button";

const TabContent = ({ description, features, legal }) => {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <div className="w-full flex flex-col md:flex-row items-start gap-10">
      <div className="w-full lg:w-[78%] ">
        <div className="border-b border-graySecondary mb-7">
          <ul className="flex items-center space-x-4">
            {["description", "features", "map", "legal"].map((tab) => (
              <li key={tab}>
                <button
                  className={`mb-3 ${
                    activeTab === tab
                      ? "bg-graySecondary px-3 rounded-lg py-[3px]"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {activeTab === "description" && (
          <div className="">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="">{description}</p>
          </div>
        )}
        {activeTab === "features" && (
          <div className="">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <p className="">{features}</p>
          </div>
        )}
        {activeTab === "map" && (
          <div className="">
            <h2 className="text-2xl font-semibold mb-4">Map</h2>
          </div>
        )}
        {activeTab === "legal" && (
          <div className="">
            <h2 className="text-2xl font-semibold mb-4">Legal</h2>
            <p className="">{legal}</p>
          </div>
        )}
      </div>
      <div className="w-full lg:w-[22%] md:shadow-md rounded-md py-1">
        <h2 className="pl-3 text-base md:text-lg">About this property</h2>
        <hr className="my-3 border-graySecondary" />
        <div className="layout mt-3">
          <div className="my-3">
            <h4 className="">Date Listed:</h4>
            <p className="">Oct. 3rd, 2024.</p>
          </div>
          <div className="my-3">
            <h4 className="">Property Type:</h4>
            <p className="">Apartment</p>
          </div>
          <div className="my-3">
            <h4 className="">Location:</h4>
            <p className="">Ibadan, Oyo State, Nigeria</p>
          </div>
        </div>
        <hr className="border-graySecondary my-4" />
        <div className="layout w-full pb-3">
          <Button
            btnText="Contact Agent "
            btnStyle="text-center bg-[#BF5E65] text-white rounded-xl py-2 text-sm md:text-base w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TabContent;
