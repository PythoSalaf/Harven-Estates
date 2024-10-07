import { BiSearch } from "react-icons/bi";
import { Propertyhero } from "../assets";
import { Button, PropertyCard } from "../components";
import { useState } from "react";
import { properties } from "../components/DummyData";

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

  const filteredProperties =
    selectedCategory === "all"
      ? properties
      : properties.filter((property) => property.category === selectedCategory);

  return (
    <>
      <div className="relative h-[70vh] bg-[#f9fafc]">
        <div className="absolute inset-0 z-10">
          <img
            src={Propertyhero}
            alt="Vector Graphic"
            className="object-cover w-[80%] h-full mx-auto opacity-99"
          />
        </div>

        <div className="absolute layout inset-0 z-20 flex flex-col h-[60vh] items-center rounded-xl justify-center ">
          <div className="w-full">
            <h1 className="text-lg font-semibold text-primary md:text-xl">
              Explore haven
            </h1>
            <p className="mt-12 text-2xl md:text-3xl text-grayPrimary">
              Browse to find properties available on Havens
            </p>
            <div className="mt-8 border rounded-md border-graySecondary gap-x-4 py-3">
              <div className="w-[96%] mx-auto flex items-center justify-between">
                <div className="relative w-[70%]">
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
        <div className="flex items-center justify-between">
          <h3 className="text-grayPrimary text-lg md:text-xl">155 Results</h3>
          <div className="border border-graySecondary rounded-xl px-3 py-1">
            <p>Most relevant</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-[2rem] w-[98%] md:w-[90%] lg:w-[80%] mx-auto">
          {FeatureList.map((list, index) => (
            <Button
              key={index}
              btnText={list}
              btnStyle={`text-sm md:text-base lg:text-lg py-[5px] shadow w-fit px-4 capitalize rounded-xl ${
                selectedCategory === list ? "bg-primary text-white" : ""
              }`}
              handleClick={() => setSelectedCategory(list)}
            />
          ))}
        </div>

        <div className="mt-16">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          ) : (
            <div className="text-center w-full col-span-full">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-red-600">
                No properties available in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllProperty;
