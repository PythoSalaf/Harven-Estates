
import { PropertyCard } from '../components';
import { properties } from '../components/DummyData';

const HomeProperties = () => {
  
  const featuredProperties = properties.slice(0, 4);

  return (
    <div className="pt-36 md:pt-0 my-4 md:my-10 layout">
      <div className='py-10'>
      <h2 className="text-24 font-bold md:text-40">
      Recommended properties
      </h2>
      <p className='text-gray text-16 md:text-20'>Browse the website’s database to choose a property that best fit your taste</p>
      </div>
     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProperties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default HomeProperties;
