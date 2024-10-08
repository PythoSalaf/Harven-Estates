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
    <div className="bg-white md:m-auto pt-5 mt-10 rounded mx-10 p-8 ">
      <div className="md:flex grid gap-4 p-4">
        {/* Search Box */}
        <div className="flex bg-primary rounded-2xl items-center w-full md:w-1/4 h-12">
          <MdSearch size={25} className="text-white ml-2" />
          <input
            type="text"
            className="text-white bg-primary outline-none w-full px-2"
            placeholder="Search"
          />
        </div>

        {/* Location Dropdown */}
        <div className="flex w-full md:w-1/4 h-12">
          <select
            name="location"
            id="location"
            className="bg-primary rounded-2xl p-2 w-full h-full text-white "
          >
            <option value="" className="">Location</option>
            <option value="Ibadan">Ibadan, Oyo state</option>
            <option value="Ikeja">Ikeja, Lagos state</option>
            <option value="Ikorodu">Ikorodu, Lagos state</option>
            <option value="Abeokuta">Abeokuta, Ogun state</option>
            <option value="Ijebu Ode">Ijebu Ode, Ogun state</option>
            <option value="Sango">Sango, Ogun state</option>
          </select>
        </div>

        {/* Property Type Dropdown */}
        <div className="flex w-full md:w-1/4 h-12 ">
          <select
            name="propertyType"
            id="propertyType"
            className="bg-primary text-white rounded-2xl p-2 w-full h-full"
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
        <div className="flex w-full md:w-1/4 h-12 relative">
          <div className="bg-primary text-white rounded-2xl p-2 w-full h-full flex flex-col justify-center">
            <label className="text-white mb-1">₦{Number(currentPrice).toLocaleString()}</label>
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
