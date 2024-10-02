
import { useState } from "react";
import { propertyOne } from "../assets";
const faqs = [
  {
    question: "Is Haven only available in Nigeria?",
    answer: "We currently only serve registered businesses in Nigeria. We support sole agents, established agencies. However, if your business is not yet registered, Haven can help you get your real estate business registered online with our partners.",
  },
  {
    question: "Can anyone become an agent?",
    answer: "Yes, anyone with a registered real estate business can become an agent with Haven.",
  },
  {
    question: "Is Haven subscription based?",
    answer: "Yes, Haven operates on a subscription-based model with different plans based on agent needs.",
  },
  {
    question: "Is Haven free for agents?",
    answer: "There are different subscription tiers available, and some may include a free trial.",
  },
  {
    question: "What do I need to open an agent account?",
    answer: "You will need your business registration details and a valid email address to sign up.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-50">
      
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4">Some of the things you may want to know</h2>
        <p className="text-gray-500 mb-6">We answered questions so you don’t have to ask them.</p>
        <img
          src= {propertyOne}
          alt="FAQ Illustration"
          className="w-full max-w-xs mx-auto md:mx-0"
        />
      </div>

      
      <div className="md:w-1/2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-700">
                {faq.question}
              </h3>
              
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            
            {activeIndex === index && (
              <p className="mt-2 text-gray-500">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
