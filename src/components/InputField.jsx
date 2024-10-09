import { useState } from "react";
import { MdSearch } from "react-icons/md";

const InputField = () => {
  // State to handle price range
  const [priceRange, setPriceRange] = useState([0, 100000000]);
  const [currentPrice, setCurrentPrice] = useState(priceRange[1]);

  const handlePriceChange = (event) => {
    setCurrentPrice(event.target.value);
  };

  return (
    <div className="w-full md:w-[90%] py-6 mx-auto mt-10 bg-white rounded ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  w-[94%] mx-auto">
        {/* Search Box */}
        <div className="flex items-center w-full h-12 bg-primary rounded-2xl ">
          <MdSearch size={25} className="ml-2 text-white" />
          <input
            type="text"
            className="w-full px-2 text-white outline-none bg-primary"
            placeholder="Search"
          />
        </div>

        {/* Location Dropdown */}
        <div className="flex w-full h-12 ">
          <select
            name="location"
            id="location"
            className="w-full h-full p-2 text-white bg-primary rounded-2xl "
          >
            <option value="" className="">
              Location
            </option>
            <option value="Ibadan">Ibadan, Oyo state</option>
            <option value="Ikeja">Ikeja, Lagos state</option>
            <option value="Ikorodu">Ikorodu, Lagos state</option>
            <option value="Abeokuta">Abeokuta, Ogun state</option>
            <option value="Ijebu Ode">Ijebu Ode, Ogun state</option>
            <option value="Sango">Sango, Ogun state</option>
          </select>
        </div>

        {/* Property Type Dropdown */}
        <div className="flex w-full h-12 ">
          <select
            name="propertyType"
            id="propertyType"
            className="w-full h-full p-2 text-white bg-primary rounded-2xl"
          >
            <option value="">Property Type</option>
            <option value="Appartments">Appartments</option>
            <option value="Detached Bungalow">Detached Bungalow</option>
            <option value="Office space">Office space</option>
            <option value="Rentals">Rentals</option>
            <option value="Shops">Shops</option>
            <option value="Resorts">Resorts</option>
          </select>
        </div>

        {/* Price Range Slider in Dropdown-Like Border */}
        <div className="relative flex w-full h-12 ">
          <div className="flex flex-col justify-center w-full h-full p-2 text-white bg-primary rounded-2xl">
            <label className="mb-1 text-white">
              ₦{Number(currentPrice).toLocaleString()}
            </label>
            <input
              type="range"
              className="w-full"
              min={priceRange[0]}
              max={priceRange[1]}
              value={currentPrice}
              onChange={handlePriceChange}
              step={50000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputField;
