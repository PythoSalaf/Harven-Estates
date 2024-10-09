import { Link } from "react-router-dom";
import { IoIosArrowRoundForward} from "react-icons/io";
import { Trending } from "../components";
const TrendingProp = () => {
  return (
    <div className="bg-ash pt-4 md:my-10 ">
        <div className="lg:flex justify-between layout">
       <div>
       <h1 className='text-24 font-bold md:text-40'>Trending property types</h1>
       <p className="text-gray text-16 md:text-20">Browse the website’s database to choose a property that best fit your taste</p>
       </div>

       <div className="mt-5 md:md-0">
       <Link to='' className="flex gap-3 text-black md:p-2 lg:bg-[#F3F4F6] rounded-xl">
       
       See All 
       <IoIosArrowRoundForward 
       size={26}
       />
       </Link>
       </div>

    </div>
        <Trending/>
        </div>
  )
}

export default TrendingProp