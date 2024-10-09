

import { propertyOne, Shortlet, Office1, A1 } from "../assets";

const Trending = () => {
  return (
    <div className="grid md:grid-cols-1 lg:flex mt-10 md:mt-12 p-5 md:p-10 lg:gap-16">     
      <div className="relative lg:w-1/2">
        <img
          src={propertyOne} 
          alt="Modern residential apartments"
          className=" object-cover rounded-lg w-full md:w-full h-full "
        />
        <div className="absolute bottom-0 left-0 p-4 text-white rounded-lg">
          Modern residential apartments
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-10 lg:mt-0 lg:w-1/2">
      
      <div className="relative">
        <img
          src={A1} 
          alt="Real estate market"
          className=" object-cover rounded-lg  w-full  md:w-90 lg:h-90"
        />
        <div className="absolute bottom-0 left-0 p-4 text-white rounded-lg">
         
        </div>
      </div>

      <div className="relative">
        <img
          src={Shortlet} 
          alt="Apartments Collections"
          className=" object-cover rounded-lg md:w-90 lg:h-90"
        />
        <div className="absolute bottom-0 left-0 p-4 text-white rounded-lg">
          
        </div>
      </div>
      <div className="relative">
        <img
          src={Office1} 
          alt="Apartments Collections"
          className=" object-cover rounded-lg md:w-90 h-[100%] lg:h-90"
        />
        <div className="absolute bottom-0 left-0 p-4 text-white rounded-lg">
          
        </div>
      </div>
      <div className="relative">
        <img
          src={A1} 
          alt="Apartments Collections"
          className=" object-cover rounded-lg md:w-90 lg:h-90"
        />
        <div className="absolute  left-0 p-4 text-white rounded-lg">
          
        </div>
      </div>
      </div>
    
    </div>
  );
};

export default Trending;
