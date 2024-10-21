import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

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
      content: <p>Analytics information will be displayed here.</p>,
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
      content: <p>Promotion details will be shown here.</p>,
    },
    {
      id: 5,
      title: "Get custom website",
      description:
        "Haven provides you with your agency's custom websites on the fly where you sell.",
      content: <p>Custom website information will be provided here.</p>,
    },
  ];

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  return (
    <div className="max-w-7xl mt-10 layout">
      {/* Top section */}
      <div className="md:flex justify-between md:items-center mb-8 p-4 pt-28 md:pt-0 rounded-lg">
        <div className="lg:w-2/3 md:w-3/5">
          <h1 className="text-primary text-xl font-thin mb-2">WHY HAVEN?</h1>
          <h2 className="text-lg font-semibold text-gray">
            Get in front of 10k+ haven users daily
          </h2>
          <p className="text-gray leading-loose">
            Haven provides you with an agent's dashboard which consists of the
            set of tools you'll need to reach the mass market and sell your
            properties on our platform. Create your agency profile, post
            properties, promote your properties in minutes.
          </p>
        </div>

        <button className="bg-primary text-white px-6 lg:px-10 md:px-2 py-3 rounded-lg font-medium shadow-lg hover:bg-blue transition flex mt-6 md:mt-0">
          Create your agency profile <IoIosArrowForward size={24} />
        </button>
      </div>

      {/* Stepper and form section */}
      <div className="flex flex-col md:flex-row p-6 rounded-lg">
        {/* Left side: Stepper */}
        <div className="relative w-full md:w-1/3 pr-4">
          <div className="pl-6">
            {steps.map((step) => (
              <div
                key={step.id}
                onClick={() => handleStepChange(step.id)}
                className={`cursor-pointer mb-4 p-4 rounded-lg transition-all duration-300 relative ${
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

        {/* Right side: Form content */}
        <div className="w-3/5">
          <div className="bg-[#C0D8F3] p-6 rounded-lg shadow-lg">
            <div className="bg-white md:py-16 md:px-10 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray">
                {steps[currentStep - 1].title}
              </h2>
              <p className="text-gray mb-4">
                {steps[currentStep - 1].description}
              </p>

              <div>{steps[currentStep - 1].content}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
