import { Cube } from "../assets";
import { IoIosArrowForward } from "react-icons/io";
const SellingOnHaven = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
    
      
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start p-8 md:p-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Start selling on Haven
        </h1>
        <p className="mb-6 leading-loose">
          Haven provides you with an agent’s dashboard which contains the set of tools you’ll
          need to reach the mass market and sell your property.
        </p>
        <button className="bg-primary text-white px-10 py-3 rounded-lg font-medium shadow-lg hover:bg-blue transition flex">
          Get started <IoIosArrowForward size={24} />
        </button>
      </div>

      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src={Cube}
          alt="Selling on Haven"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SellingOnHaven;
