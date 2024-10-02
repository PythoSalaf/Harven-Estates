
import { Trending } from "../components";
const TrendingProp = () => {
  return (
    <div className="bg-ash my-8 md:my-10">
        <div className="">
       <h1 className='text-24 font-bold md:text-40'>Trending property types</h1>
       <p className="text-gray text-16 md:text-20">Browse the website’s database to choose a property that best fit your taste</p>
    </div>
        <Trending/>
        </div>
  )
}

export default TrendingProp