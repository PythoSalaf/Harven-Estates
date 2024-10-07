
import { Cuate } from "../assets"; 
import {InputField} from "../components"

const Hero = () => {
  return (
    <>
    <div className="relative h-[70vh] md:h-screen bg-primary">
<div className="absolute inset-0 z-10">
  <img
    src={Cuate}
    alt="Vector Graphic"
    className="object-cover w-full h-full mx-auto opacity-90"
  />
</div>

<div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
<div className="text-center text-white leading-snug">
    <p className=" text-40 md:text-60 font-bold pt-5 md:pt-10 mt-48 md:mt-10">
      Find Your Home, Your Safe <span className="text-black">Haven.</span>
      </p>
      <p className="font-[400] text-16 p-4 md:text-24 md:mb-10">Haven is Nigeria’s leading online real estate platform 
        which eases the stress of finding <br /> properties online </p>
    </div>

   <InputField/>
</div>
</div> 

    </>
  )
}

export default Hero
