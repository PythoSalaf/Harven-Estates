import { Cuate } from "../assets";
import { InputField } from "../components";

const Hero = () => {
  return (
    <>
      <div className="relative h-[70vh] md:h-screen bg-primary">
        <div className="absolute inset-0 z-10">
          <img
            src={Cuate}
            alt="Vector Graphic"
            className="object-cover w-full h-full mx-auto opacity-90"
          />
        </div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <div className="text-center text-white leading-snug">
            <p className=" text-40 md:text-60 font-bold pt-5 md:pt-10 mt-48 md:mt-10">
              Find Your Home, Your Safe{" "}
              <span className="text-black">Haven.</span>
            </p>
            <p className="font-[400] text-16 p-4 md:text-24 md:mb-10">
              Haven is Nigeria's leading online real estate platform which eases
              the stress of finding <br /> properties online{" "}
            </p>
          </div>

          <div className="bg-white md:m-auto pt-5 mt-10  rounded mx-10 md:mx-60">
            {/*dropdown */}
            <div className="md:flex grid gap-4 p-4">
              {/* search */}
              <div className="flex md:border border-b rounded md:p-2">
                <MdSearch size={25} className="text-gray " />
                <p className=" text-grey">Search...</p>
              </div>
              {/* location */}
              <div className="bg-white p-3">
                <select
                  name=""
                  id="location"
                  className="md:border border-b rounded md:p-2"
                >
                  <option value="">Location</option>
                  <option value="" type="checkbox">
                    Ibadan, Oyo state
                  </option>
                  <option value="">Ikeja, Lagos state</option>
                  <option value="">Ikorodu, Lagos state</option>
                  <option value="">Abeokuta, Ogun state</option>
                  <option value="">Ijebu Ode, Ogun state</option>
                  <option value="">Sango, Ogun state</option>
                </select>
              </div>

              <div className="bg-white p-3">
                <select name="" id="location" className="border rounded p-2">
                  <option value="" type="checkbox">
                    Property Type
                  </option>
                  <option value="" type="checkbox">
                    Appartments
                  </option>
                  <option value="">Detached Bungalow</option>
                  <option value="">Office space</option>
                  <option value="">Rentals</option>
                  <option value="">Shops</option>
                  <option value="">Resorts</option>
                </select>
              </div>

              {/* price Range */}
              <div className="bg-white p-3">
                <select name="" id="location" className="border rounded p-2">
                  <option value="">Price Range</option>
                  <input type="range" name="" id="" />
                </select>
              </div>

              <div className="p-3">
                <button className="bg-blue rounded text-white text-24 px-3">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
