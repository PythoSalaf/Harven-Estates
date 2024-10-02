

import { propertyOne } from "../assets";

const Trending = () => {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      
      <div className="relative md:col-span-2 h-64">
        <img
          src={propertyOne} 
          alt="Modern residential apartments"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 p-4 text-white rounded-lg">
          Modern residential apartments
        </div>
      </div>



      <div className="grid md:grid-cols-2 gap-6">
      <div className="relative">
        <img
          src={propertyOne} 
          alt="Shortlet apartments"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 p-4 text-white rounded-lg">
          Shortlet apartments
        </div>
      </div>

      <div className="relative h-40">
        <img
         src={propertyOne} 
          alt="Office spaces"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 p-4  text-white rounded-lg">
          Office spaces
        </div>
      </div>

      <div className="relative h-40">
        <img
          src={propertyOne} 
          alt="Real estate market"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 p-4 text-white rounded-lg">
          Real estate market
        </div>
      </div>

      <div className="relative h-40">
        <img
          src={propertyOne} 
          alt="Apartments Collections"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 p-4 text-white rounded-lg">
          Apartments Collections
        </div>
      </div>
      </div>
    
    </div>
  );
};

export default Trending;
