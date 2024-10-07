
import { MdSearch } from "react-icons/md";
const InputField = () => {
  return (
    <div className="bg-white md:m-auto pt-5 mt-10  rounded mx-10 md:mx-60">
    <div className="md:flex grid gap-4 p-4">
   
    <div className="flex border rounded-2xl">
    <MdSearch size={25} className="text-gray mt-5 ml-2" />
    <input type="text" className=" text-grey outline-none " placeholder="Search" />
    </div>
    
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
       <div className="bg-white p-3">
       <select name="" id="location" className="border rounded p-2">
               <option value="">Price Range</option>
                <input type="range" name=""  />
                </select>
       </div>

       {/* <div className="p-3">
           <button className="bg-blue rounded text-white text-24 px-3">Search</button>
       </div> */}
    </div>
     </div>
  )
}

export default InputField