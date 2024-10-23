import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { SliderImg } from "../assets";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
      title: "Create your agency profile",
      description:
        "Agencies are shared environments where you and your team can manage all your properties and clients.",
      content: (
        <div className="md:my-14">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Agency Name:
            </label>
            <input
              type="text"
              className="border border-[#C0D8F3] p-2 rounded w-full"
              placeholder="Enter agency name"
            />
          </div>
          <div className="mt-6">
            <label className="block mb-2 text-sm font-medium">
              Agency URL:
            </label>
            <input
              type="text"
              className="border border-[#C0D8F3] p-2 rounded w-full"
              placeholder="Enter agency URL"
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
          <input type="email" placeholder='Please input your Email' className='border border-[#C0D8F3] p-2 rounded w-full' />
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

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  return (
    <div className="max-w-7xl mt-10 layout hidden md:block">
      {/* Top section */}
      <div className="md:flex justify-between md:items-center mb-8 p-4 pt-28 md:pt-0 rounded-lg">
        <div className="lg:w-2/3 md:w-3/5">
          <h1 className="text-primary text-xl font-thin mb-2">WHY HAVEN?</h1>
          <h2 className="text-lg font-semibold text-gray">
            Get in front of 10k+ haven users daily
          </h2>
          <p className="text-gray leading-loose">
            Haven provides you with an agent’s dashboard which consists of the
            set of tools you’ll need to reach the mass market and sell your
            properties on our platform. Create your agency profile, post
            properties, promote your properties in minutes.
          </p>
        </div>

        <button className="bg-primary text-white px-6 lg:px-10 md:px-2 py-3 rounded-lg font-medium shadow-lg hover:bg-blue transition flex mt-6 md:mt-0">
          Create your agency profile <IoIosArrowForward size={24} />
        </button>
      </div>

      <div className="flex flex-col gap-16 md:flex-row p-6">
        <div className="relative w-full md:w-1/3 pr-4">
          <div>
            {steps.map((step) => (
              <div
                key={step.id}
                onClick={() => handleStepChange(step.id)}
                className={`cursor-pointer mb-4 p-4 transition-all duration-300 relative ${
                  currentStep === step.id
                    ? "bg-ash shadow-md border-l-4 border-primary"
                    : "bg-white"
                }`}
              >
                <h3 className="text-lg font-semibold text-gray">
                  {step.title}
                </h3>
                <p className="text-sm text-gray">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-3/5">
          <div className="bg-[#C0D8F3] p-6 rounded-lg shadow-lg">
            <div className="bg-white md:py-16 md:px-10 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray">
                {steps[currentStep - 1].title}
              </h2>
              <p className="text-gray mb-4">
                {steps[currentStep - 1].description}
              </p>
              <div className="">{steps[currentStep - 1].content}</div>
              <div className="flex justify-between mt-4">
                <div>
                  {currentStep > 1 && (
                    <button
                      className="mt-4 px-4 py-2 bg-primary text-white rounded"
                      onClick={() => setCurrentStep(currentStep - 1)}
                    >
                      Previous
                    </button>
                  )}
                </div>
                <div className="flex justify-end space-x-2">
                  {currentStep < steps.length && (
                    <button
                      className="mt-4 px-4 py-2 bg-primary text-white rounded"
                      onClick={() => setCurrentStep(currentStep + 1)}
                    >
                      Next
                    </button>
                  )}
                  {currentStep === steps.length && (
                    <button
                      className="mt-4 px-4 py-2 bg-primary text-white rounded"
                      onClick={() => alert("Form completed!")}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
