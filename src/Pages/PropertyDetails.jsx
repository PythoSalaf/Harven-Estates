import { MdKeyboardArrowLeft } from "react-icons/md";
import { PiShareNetworkLight } from "react-icons/pi";
import {
  Button,
  FAQ,
  GetInTouch,
  PropertyCard,
  PropertySlider,
  TabContent,
} from "../components";
import { IoLocationOutline } from "react-icons/io5";
import { useParams, useNavigate } from "react-router-dom";
import { properties } from "../components/DummyData";

const getRandomProperties = (array, num) => {
  const shuffled = array.sort(() => 0.5 - Math.random()); // Shuffle array
  return shuffled.slice(0, num); // Return the first 'num' items
};
const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((e) => e.id === parseInt(id));
  const similarProperty = getRandomProperties(properties, 8);
  return (
    <div className=" py-5">
      <div className="layout">
        <div className="flex items-center justify-between">
          <div className="">
            <button
              className="flex items-center px-3 md:px-5 text-base  md:text-lg py-[6px] bg-graySecondary gap-x-[2px] rounded-lg"
              onClick={() => navigate(-1)}
            >
              <MdKeyboardArrowLeft className="size-5 md:size-6" />
              <span>Back</span>
            </button>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="flex items-center gap-x-1">
              <PiShareNetworkLight />
              <span>Share</span>
            </div>
            <div className="flex items-center gap-x-1">
              <PiShareNetworkLight />
              <span>Save</span>
            </div>
          </div>
        </div>
        <div className="my-8">
          <PropertySlider images={property.images} />
        </div>
        <h3 className="my-3 text-2xl md:text-3xl lg:text-[44px]">
          {property.title}
        </h3>
        <div className="flex items-center gap-x-4 mt-7">
          <p className="text-primary font-semibold text-lg md:text-xl">
            #{property.price}
          </p>
          <div className="flex items-center gap-x-1">
            <IoLocationOutline className="size-4 md:size-5" />
            <p className="text-sm md:text-base lg:text-lg">
              {property.location}
            </p>
          </div>

          <p className="bg-[#E7F1F6] rounded-xl px-2">{property.type}</p>
        </div>
        <div className="my-16">
          <TabContent description={property.description} />
        </div>
      </div>
      <div className=" bg-[#f9fafc] py-5">
        <div className="layout">
          <div className=" flex items-start justify-between">
            <div className="">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold capitalize">
                Similar properties
              </h2>
              <p className="text-sm md:text-base">
                Discover properties in the same region and similar in price.
              </p>
            </div>
            <Button
              btnText="See all properties"
              btnStyle="bg-primary text-white text-sm md:text-base py-[6px] px-3 rounded-md"
            />
          </div>
          <div className="mt-14 mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {similarProperty.map((items) => (
              <div className="" key={items.id}>
                <PropertyCard {...items} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <GetInTouch />
      <div className="">
        <FAQ />
      </div>
    </div>
  );
};

export default PropertyDetails;
