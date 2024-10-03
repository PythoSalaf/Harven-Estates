

import { person1 } from "../assets";
// import { IoIosArrowRoundForward, IoIosArrowRoundBackward } from "react-icons/io";
import { useState } from 'react';



const testimonials = [
  {
    id: 1,
    name: "Dr. Temitope Bakare",
    text: "My experience with Haven has been smooth sailing from the start. Transparent, great communication and my property agent was friendly, professional and kept me informed throughout the whole process.",
    image: person1
  },
  {
    id: 2,
    name: "Jane Doe",
    text: "Haven was fantastic in every aspect. They truly care about their clients and provide top-notch service.",
    image: person1
  },

  {
    id: 3,
    name: "Jane Doe",
    text: "Haven was fantastic in every aspect. They truly care about their clients and provide top-notch service.",
    image: person1
  },
 
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-xl md:text-40 font-bold mb-2">Don’t just take our word for it</h2>
      <p className="text-gray-500 mb-6">Hear what our clients say about us</p>

      <div className="md:flex gap-10 flex-row items-center justify-between w-full max-w-4xl p-6">
  
        <div className="flex items-center justify-center">
          <img
            src={testimonials[activeIndex].image}  
            alt={testimonials[activeIndex].name}
            className="object-cover"
          />
        </div>

      
        <div className="md:w-2/3 mt-10 flex flex-col justify-center">
          <p className="text-lg italic mb-4">{testimonials[activeIndex].text}</p>
          <h3 className="font-bold text-lg">{testimonials[activeIndex].name}</h3>

          <div className="mt-4">
            <div className="h-1 w-full bg-gray-300 relative">
              <div
                className="absolute h-1 bg-blue-500 transition-all duration-300"
                style={{ width: `${(activeIndex + 1) / testimonials.length * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="flex justify-end items-center w-full max-w-4xl mt-4">
        
        <div className="ml-4 flex space-x-2">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            &rarr;
            {/* <IoIosArrowRoundBackward/> */}
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            {/* <IoIosArrowRoundForward/> */}
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

