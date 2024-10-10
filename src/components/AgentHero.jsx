import { agentHome, HomeIcon } from "../assets";
import { IoIosArrowForward } from "react-icons/io";
const AgentHero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center layout md:px-16 pt-12  md:py-12">
      
      <div className="flex-1 md:text-left mb-8 md:mb-0">
        <p className="text-primary font-medium uppercase tracking-widest text-sm md:text-lg">
          For Agents
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-relaxed mb-4">
          One platform to manage all your Agency business needs
        </h1>
        <p className="text-gray mb-6 text-sm md:text-lg">
          Create an agency profile on Haven in minutes and start running your
          business without hassle.
        </p>
        <button className="bg-primary text-white px-10 py-3 rounded-lg font-medium shadow-lg hover:bg-blue transition flex">
          Get started <IoIosArrowForward size={24} />
        </button>
      </div>

      <div className="relative">
        <div className="rounded-xl overflow-hidden  py-4 md:py-8">
          <img
            src={agentHome}
            alt="Agent holding a house"
            className="w-[500px] object-cover"
          />
        </div>

        
         <div className="absolute bottom-1 md:bottom-36 md:left-8 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white shadow-md rounded-lg px-4 py-2 grid place-content-center space-x-2">
          <div className="p-4 rounded-full">
            <img src={HomeIcon} alt="" />
          </div>
          <p className=" font-medium">
            Property <span className="text-blue font-bold">#3839</span>{" "}
            Sold
          </p>
        </div> 
      </div>
    </div>
  );
};

export default AgentHero;
