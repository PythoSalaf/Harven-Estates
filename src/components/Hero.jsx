import { MdSearch } from "react-icons/md";
const Hero = () => {
  return (
    <>
    <div className=" bg-blue w-full h-screen">
    <div className="text-center text-white leading-snug">
    <p className=" text-40 md:text-60 font-bold pt-5 md:pt-10 ">
      Find Your Home, Your Safe <span className="text-black">Haven.</span>
      </p>
      <p className="font-[400] text-16 p-4 md:text-24 md:mb-20">Haven is Nigeria's leading online real estate platform 
        which eases the stress of finding <br /> properties online </p>
    </div>

      <div className="bg-white md:m-auto pt-5 mt-24  rounded mx-10 md:mx-60">
        {/* search */}
     <div className="flex md:p-3 gap-3">
     <MdSearch size={36} className="text-gray " />
     <p className="text-16 md:text-24 text-grey">Search...</p>
     </div>

     {/*dropdown */}
     <div className="md:flex grid gap-4">

        {/* location */}
        <div className="bg-white p-3">
            <select name="" id="location" className="md:border border-b rounded md:p-2">
                 <option value="">Location</option>
                 <option value="" type='checkbox'>Ibadan, Oyo state</option>
                 <option value="">Ikeja, Lagos state</option>
                 <option value="">Ikorodu, Lagos state</option>
                 <option value="">Abeokuta, Ogun state</option>
                 <option value="">Ijebu Ode, Ogun state</option>
                 <option value="">Sango, Ogun state</option>
                 </select>
                 </div>

        {/* property Type */}
        <div className="bg-white p-3">
        <select name="" id="location" className="border rounded p-2">
                 <option value=""  type='checkbox'>Property Type</option>
                 <option value="" type='checkbox'>Appartments</option>
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
            <button className="bg-blue rounded text-white text-24 px-3">Search</button>
        </div>
     </div>
      </div>



    </div>
    
    </>
  )
}

export default Hero
