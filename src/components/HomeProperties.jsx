
import { properties } from "../components/DummyData";
const HomeProperties = () => {
  const displayedProperties = properties.slice(0, 4);

  return (
    <div className="layout">
        <div className="">
        <h1 className="text-3xl font-bold mt-10 mb-5">Recommended Properties</h1>
        <p>Browse the website’s database to choose a  property that best fit your taste </p>
  
        </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
       
       {displayedProperties.map((property) => (
         <div key={property.id} className="flex flex-wrap gap-3 mt-[2rem]  ">
           <div className="">
             <img
               src={property.images[0]}
               alt={property.title}
               className="h-40 w-96 rounded-2xl"
             />
           </div>
           <h3 className="font-bold text-lg">{property.title}</h3>
           <p className="text-gray">{property.location}</p>
           <p className="text-blue font-semibold">
             {property.type} - ₦{Number(property.price).toLocaleString()}
           </p>
         </div>
       ))}
     </div>
    </div>
    
  );
};

export default HomeProperties;
