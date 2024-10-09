import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import { PropertyCard } from '../components';
import { properties } from '../components/DummyData';

const HomeProperties = () => {
  
  const featuredProperties = properties.slice(0, 4);

  return (
    <div className="pt-3 m md:pt-0 my-4 md:my-10 layout">
      <div className='lg:flex justify-between py-10'>
      <div>
      <h2 className="text-24 font-bold md:text-40">
      Recommended properties
      </h2>
      <p className='text-gray text-16 md:text-20'>Browse the website’s database to choose a property that best fit your taste</p>
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProperties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default HomeProperties;
