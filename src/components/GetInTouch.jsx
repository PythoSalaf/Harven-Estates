import { Portraite } from "../assets";
import Button from "./Button";

const GetInTouch = () => {
  return (
    <div className="flex flex-col items-start justify-between w-full my-7 md:flex-row">
      <div className="flex items-center justify-center w-full h-[250px] md:h-[400px] bg-primary">
        <img src={Portraite} alt="portraite" className="h-full" />
      </div>
      <div className="w-full bg-[#174579] h-[250px] md:h-[400px] md:pl-9 flex flex-col items-center md:items-start text-white justify-center">
        <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
          Didn’t find what you’re looking for?
        </h3>
        <p className="mt-3 mb-10 text-sm text-center md:text-base md:text-left">
          Let us know your preference and our business team will reach out to
          you with what matches your request.
        </p>
        <Button
          btnText="Get in touch"
          btnStyle="uppercase text-grayPrimary bg-white text-sm md:text-base px-6 py-2 rounded-3xl"
        />
      </div>
    </div>
  );
};

export default GetInTouch;
