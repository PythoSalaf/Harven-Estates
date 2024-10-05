import { BiSearch } from "react-icons/bi";
import { Propertyhero } from "../assets";
import { Button } from "../components";
import { useState } from "react";

const AllProperty = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const FeatureList = [
    "all",
    "apartments",
    "bungalow",
    "house",
    "office",
    "smart home",
    "villa",
  ];
  return (
    <>
      <div className="relative h-[70vh]  bg-[#f9fafc]">
        <div className="absolute inset-0 z-10">
          <img
            src={Propertyhero}
            alt="Vector Graphic"
            className="object-cover w-[80%]  h-full mx-auto opacity-99"
          />
        </div>

        <div className="absolute layout inset-0 z-20 flex flex-col h-[60vh] items-center rounded-xl  justify-center ">
          <div className="w-full">
            <h1 className="text-lg font-semibold text-primary md:text-xl">
              Explore haven
            </h1>
            <p className=" mt-12 text-2xl md:text-3xl  text-grayPrimary">
              Browse to find properties available on Havens
            </p>
            <div className="mt-8 border rounded-md border-graySecondary gap-x-4 py-3">
              <div className="  w-[96%] mx-auto flex items-center justify-between">
                <div className="relative w-[70%] ">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <BiSearch className="text-gray-400 w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-graySecondary rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent"
                    placeholder="Search..."
                  />
                </div>
                <div className="w-[28%] flex items-center gap-x-5 ">
                  <Button
                    btnText="Clear"
                    btnStyle="border border-graySecondary w-full py-2 px-4 rounded-3xl text-primary"
                  />
                  <Button
                    btnText="Search"
                    btnStyle=" bg-primary py-2 w-full px-4 rounded-3xl text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="layout py-10">
        <div className="flex flex-wrap items-center justify-center gap-3 mt-[2rem] w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
          {FeatureList.map((list, index) => (
            <Button
              key={index}
              btnText={list}
              btnStyle={`text-[17px] md:text-[20px] py-[5px] shadow  w-fit px-4 capitalize rounded-xl ${
                selectedCategory === list ? "bg-primary text-white" : ""
              }`}
              handleClick={() => setSelectedCategory(list)}
            />
          ))}
        </div>
        <h2>Hello</h2>
      </div>
    </>
  );
};

export default AllProperty;
