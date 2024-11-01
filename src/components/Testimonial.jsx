import { person1, person2, person3 } from "../assets";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Temitope Bakare",
    text: "My experience with Haven has been smooth sailing from the start. Transparent, great communication and my property agent was friendly, professional and kept me informed throughout the whole process.",
    image: person2
  },
  {
    id: 2,
    name: "Adeyemi Simisola",
    text: "My experience with Haven has been smooth sailing from the start. Transparent, great communication and my property agent was friendly, professional and kept me informed throughout the whole process.",
    image: person1
  },
  {
    id: 3,
    name: "James Mcgil",
    text: "My experience with Haven has been smooth sailing from the start. Transparent, great communication and my property agent was friendly, professional and kept me informed throughout the whole process.",
    image: person3
  }
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeAnimation, setFadeAnimation] = useState(false);

  // Handles animation trigger
  useEffect(() => {
    setFadeAnimation(true);
    const timeout = setTimeout(() => {
      setFadeAnimation(false);
    }, 300); // Reset animation after 300ms
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 mt-16 md:mt-36">
      <h2 className="text-xl md:text-40 font-bold mb-2">Don’t just take our word for it</h2>
      <p className="text-gray-500 md:my-4 text-gray text-16 md:text-20">Hear what our clients say about us</p>

      <div className="md:flex gap-10 flex-row items-start justify-between w-full max-w-4xl p-6">
        <div className="flex items-start justify-center">
          <img
            src={testimonials[activeIndex].image}
            alt={testimonials[activeIndex].name}
            className={`object-cover rounded-2xl transition-opacity duration-300 ease-in-out ${fadeAnimation ? 'opacity-0' : 'opacity-100'}`}
          />
        </div>

        <div className={`md:w-2/3 flex flex-col mt-6 md:mt-0 transition-transform duration-300 ease-in-out transform ${fadeAnimation ? 'translate-x-10 opacity-0' : 'translate-x-0 opacity-100'}`}>
          <p className="text-lg italic mb-4">{testimonials[activeIndex].text}</p>
          <h3 className="font-bold text-lg">{testimonials[activeIndex].name}</h3>

          <div className="flex justify-between mt-4 md:mt-20">
            <div className="flex mt-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`h-2 w-2 rounded-full mx-1 transition-all duration-300 ${activeIndex === index ? "bg-blue" : "bg-gray"}`}
                ></div>
              ))}
            </div>

            <div className="">
              <div className="flex justify-items-end ml-40 md:ml-96 space-x-2">
                <button
                  onClick={handlePrev}
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                  <IoIosArrowRoundBack size={26} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                  <IoIosArrowRoundForward size={26} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="h-1 w-full bg-gray-300 relative">
              <div
                className="absolute h-1 bg-blue-500 transition-all duration-300"
                style={{
                  width: `${((activeIndex + 1) / testimonials.length) * 100}%`
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
