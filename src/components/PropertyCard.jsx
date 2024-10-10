import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const PropertyCard = ({ images, title, location, type, price, id }) => {
  return (
    <Link
      to={`/property-detail/${id}`}
      className="w-[90%] md:w-full mx-auto rounded-t-3xl"
    >
      <div className="w-full">
        <img
          src={images[0]}
          alt="Property Image"
          className="w-full h-[150px] md:h-[180px] lg:h-[200px] rounded-2xl object-cover"
        />
      </div>
      <div className="mt-6">
        <div className="border border-red-500 w-fit rounded-xl px-2">
          <h4 className="text-[#BF5E65] text-sm">{type}</h4>
        </div>
        <div className="flex items-center gap-x-1 my-3 text-graylish">
          <CiLocationOn className="size-5 md:size-6" />
          <p className="text-sm">{location}</p>
        </div>
        <p className="text-gray text-xs font-semibold md:text-sm">{title}</p>
        <p className="text-primary font-semibold mt-2">#{price}</p>
      </div>
    </Link>
  );
};

export default PropertyCard;
