// import { BiSearch } from "react-icons/bi";
import { Noresult, Portraite, Propertyhero } from "../assets";
import {
  Button,
  InputField,
  PropertyCard,
  PropertyCategories,
} from "../components";
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

        <div className="absolute layout inset-0 z-20 flex flex-col h-[75vh]  md:h-[68vh] lg:h-[60vh] items-center rounded-xl justify-center ">
          <div className="w-full">
            <h1 className="text-lg font-semibold text-primary md:text-xl">
              Explore haven
            </h1>
            <p className="mt-12 text-2xl md:text-3xl text-grayPrimary">
              Browse to find properties available on Havens
            </p>

            <div className="mt-10 ">
              <InputField />
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <PropertyCategories />
      </div>
      <div className="py-10 layout">
        <div className="flex items-center justify-between">
          <h3 className="text-lg text-grayPrimary md:text-xl">
            {filteredProperties.length} Results
          </h3>
          <div className="px-3 py-1 border border-graySecondary rounded-xl">
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
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full">
              <img
                src={Noresult}
                alt="results"
                className="size-[140px] md:size-[200px]"
              />
              <h3 className="mb-2 text-lg font-semibold md:text-xl ">
                Sorry, no properties matched
              </h3>
              <p className="text-sm md:text-base">
                There are no results for this search. Please try another phrase
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start justify-between w-full my-7 md:flex-row">
        <div className="flex items-center justify-center w-full h-[250px] md:h-[400px] bg-primary">
          <img src={Portraite} alt="portraite" className="h-full" />
        </div>
        <div className="w-full bg-[#174579] h-[250px] md:h-[400px] md:pl-9 flex flex-col items-center md:items-start text-white justify-center">
          <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
            Didn’t find what you’re looking for?
          </h3>
          <p className="mt-3 mb-10 text-sm text-center md:text-base md:text-left">
            Let us know your preference and our business team will reach out to
            you with what matches your request.
          </p>
          <Button
            btnText="Get in touch"
            btnStyle="uppercase text-grayPrimary bg-white text-sm md:text-base px-6 py-2 rounded-3xl"
          />
        </div>
      </div>
    </>
  );
};

export default AllProperty;
