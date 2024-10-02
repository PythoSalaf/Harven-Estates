import { Propertyhero } from "../assets";

const AllProperty = () => {
  return (
    <div className="relative h-[70vh] md:h-screen bg-[#f9fafc]">
      <div className="absolute inset-0 z-10">
        <img
          src={Propertyhero}
          alt="Vector Graphic"
          className="object-cover w-[80%]  h-full mx-auto opacity-99"
        />
      </div>

      <div className="absolute layout inset-0 z-20 flex flex-col h-[60vh] items-center rounded-xl  justify-center ">
        <div className="w-full">
          <h1 className="text-lg font-semibold text-primary md:text-xl">
            Explore haven
          </h1>
          <p className=" mt-4 text-xl md:text-3xl text-grayPrimary">
            Browse to find properties available on Havens
          </p>
          <div className="mt-8 border rounded-md border-graySecondary py-3">
            <div className="layout">
              <input type="text" className="w" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProperty;
