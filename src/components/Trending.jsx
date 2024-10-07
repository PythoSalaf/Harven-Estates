

import { propertyOne, Shortlet, Office1, A1 } from "../assets";

const Trending = () => {
  return (
    <div className="md:flex justify-evenly md:grid-cols-4 mt-10 md:mt-12 p-5 md:p-10 ">     
      <div className="relative md:col-span-2">
        <img
          src={propertyOne} 
          alt="Modern residential apartments"
          className=" object-cover rounded-lg w-[550px]"
        />
        <div className="absolute bottom-0 left-0 p-4 text-white rounded-lg">
          Modern residential apartments
        </div>
      </div>


      <div className="grid grid-cols-2 m-5 gap-6">
      
      <div className="relative md:h-40">
        <img
          src={A1} 
          alt="Real estate market"
          className=" object-cover rounded-lg md:w-60 md:h-60 w-40 h-40"
        />
        <div className="absolute bottom-0 left-0 p-4 text-white rounded-lg">
         
        </div>
      </div>

      <div className="relative h-40">
        <img
          src={Shortlet} 
          alt="Apartments Collections"
          className=" object-cover rounded-lg md:w-60 md:h-60 w-40 h-40"
        />
        <div className="absolute bottom-0 left-0 p-4 text-white rounded-lg">
          
        </div>
      </div>
      <div className="relative h-40">
        <img
          src={Office1} 
          alt="Apartments Collections"
          className=" object-cover rounded-lg w-40 h-40 md:w-60 md:h-60"
        />
        <div className="absolute bottom-0 left-0 p-4 text-white rounded-lg">
          
        </div>
      </div>
      <div className="relative h-40">
        <img
          src={A1} 
          alt="Apartments Collections"
          className=" object-cover rounded-lg w-40 h-40 md:w-60 md:h-60"
        />
        <div className="absolute  left-0 p-4 text-white rounded-lg">
          
        </div>
      </div>
      </div>
    
    </div>
  );
};

export default Trending;
