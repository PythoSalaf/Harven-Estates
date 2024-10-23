import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { SliderImg } from "../assets";
const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    agencyName: "",
    agencyUrl: "",
    teamSize: "",
  });
  const data = [
    { name: "January", sales: 4000, requests: 2400, profits: 2400 },
    { name: "February", sales: 3000, requests: 1398, profits: 2210 },
    { name: "March", sales: 2000, requests: 9800, profits: 2290 },
    { name: "April", sales: 2780, requests: 3908, profits: 2000 },
    { name: "May", sales: 1890, requests: 4800, profits: 2181 },
    { name: "June", sales: 2390, requests: 3800, profits: 2500 },
  ];
  const [budget, setBudget] = useState(5000);
  const [duration, setDuration] = useState(9);
  const steps = [
    {
      id: 1,
      title: "Create your Agency profile",
      description:
        "Agencies are shared environments where you and your team can manage all your properties and clients.",
      content: (
        <div className="transition-all duration-500 ease-in-out">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Agency Name:
            </label>
            <input
              type="text"
              className="border border-[#C0D8F3] p-2 rounded w-full"
              placeholder="Enter agency name"
              value={formData.agencyName}
              onChange={(e) =>
                setFormData({ ...formData, agencyName: e.target.value })
              }
            />
          </div>
          <div className="mt-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Agency URL:
            </label>
            <input
              type="text"
              className="border border-[#C0D8F3] p-2 rounded w-full"
              placeholder="Enter agency URL"
              value={formData.agencyUrl}
              onChange={(e) =>
                setFormData({ ...formData, agencyUrl: e.target.value })
              }
            />
          </div>
          <div className="mt-6">
            <label className="block mb-2 text-sm font-medium">
              How large is your team size
            </label>
            <select className="border border-[#C0D8F3] p-2 rounded w-full">
              <option value="">Select Team Size</option>
              <option value="2-5">2-5</option>
              <option value="6-10">6-10</option>
              <option value="11-20">11-20</option>
              <option value="21-30">21-30</option>
              <option value="31-50">31-50</option>
            </select>
          </div>
        </div>
      ),
    },
    
    {
      id: 2,
      title: "Get Analytics",
      description:
        "Gain insights into your agency's growth with detailed reports on sales, requests, profits, and customers.",
      content: (
        <div className="transition-all duration-500 ease-in-out">
          <h3 className="text-lg mb-4">Monthly Sales Analytics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" />
              <Bar dataKey="requests" fill="#82ca9d" />
              <Bar dataKey="profits" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ),
    },
    {
      id: 3,
      title: "Manage your workspace",
      description:
        "Add new team members to your agency workspace. Happy collaboration.",
      content: (
        <div>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input type="email" placeholder='Plese input your Email' className='border border-[#C0D8F3] p-2 rounded w-full' />
          <button className='bg-primary text-white rounded mt-6 p-2 md:p-3'>Submit</button>
        </div>
      ),
    },

    {
      id: 4,
      title: "Promote properties",
      description:
        "Boosted properties get in front of more eyes by appearing on the main page and other pages on Haven.",
      content: (
        <div>
          <h3 className="mb-2 font-bold text-xl">Budget and Duration</h3>
          <p className="mb-4 text-sm text-gray-600">Boost engagement, reach more people.</p>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Budget</label>
            <input
              type="range"
              min="5000"
              max="500000"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full accent-primary"
            />
            <p className="text-gray">₦{budget.toLocaleString()}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Duration</label>
            <input
              type="range"
              min="9"
              max="30"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full accent-primary"
            />
            <p className="text-gray">{duration} days</p>
          </div>
          <div className="p-4 shadow-lg mb-4">
            <h4 className="font-bold text-lg mb-2">Promotion details</h4>
            <div className="flex justify-between text-sm">
              <p>Budget</p>
              <p>₦{budget.toLocaleString()}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Duration</p>
              <p>{duration} days</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Estimated impressions</p>
              <p>{(budget / 100).toLocaleString()} impressions</p>
            </div>
            <div className="flex justify-between text-sm font-bold mt-2">
              <p>Total price</p>
              <p>₦{budget.toLocaleString()}</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Get custom website",
      description:
        "Haven provides you with your agency's custom websites on the fly where you sell.",
      content: (
        <div>
          <img
            src={SliderImg}
            alt="Custom website design preview"
            className="w-full"
          />
         
        </div>
      ),
    },
  ];

  const goToNextStep = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:hidden mt-20">
      <div className="bg-[#C0D8F3]">
      <div className=" bg-white rounded-lg shadow-lg p-8 m-4 w-full max-w-2xl">
        
        <div className="text-right mb-6">
          <span className="text-sm text-gray-600">
            Logged in as <span className="font-semibold">bello.ololade@icloud.com</span>
          </span>
        </div>


       
       <div className="my-14">
       <h1 className="text-2xl font-semibold mb-2">{steps[currentStep - 1].title}</h1>
       <p className="text-gray text-sm mb-4">{steps[currentStep - 1].description}</p>
       </div>

        
        <div className="overflow-hidden transition-all duration-500 ease-in-out">
          {steps[currentStep - 1].content}
        </div>
        
     
       
      
        
      </div>
      </div>
      

      {/* Information Section */}
      <div className="mt-12 bg-ash w-full max-w-2xl px-8 py-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{steps[currentStep - 1].title}</h2>
        </div>
        <p className="text-gray mt-2">{steps[currentStep - 1].description}</p>
        {/* Carousel Progress (Horizontal Lines) */}
        <div className="flex justify-center mt-6 space-x-2">
          {steps.map((_, index) => (
            <hr
              key={index}
              className={`w-10 border-t-4 cursor-pointer ${
                currentStep === index + 1 ? "border-blue" : "border-gray"
              }`}
              onClick={() => setCurrentStep(index + 1)}
            />
          ))}
        </div>

        <div className="flex justify-between items-center mt-8">
          {currentStep > 1 && (
            <button
              onClick={goToPreviousStep}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
            >
              Previous
            </button>
          )}

          {currentStep < steps.length ? (
            <button
              onClick={goToNextStep}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 ml-auto"
              disabled={
                (currentStep === 1 && !formData.agencyName && !formData.agencyUrl) ||
                (currentStep === 2 && !formData.teamSize)
              }
            >
              Next
            </button>
          ) : (
            <button
            className="mt-4 px-4 py-2 bg-primary text-white rounded"
            onClick={() => alert("Form submitted successfully!")}
          >
            Submit
          </button>
          )}
        </div>

      </div>
      
    </div>
  );
};

export default MultiStepForm;
