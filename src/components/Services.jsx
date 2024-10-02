
import { propertyOne } from "../assets";
const Services = () => {
  const services = [
    {
      title: 'Buy Properties',
      description: 'Browse the website’s database to choose a property that fits your taste in Nigeria.',
      linkText: 'Discover properties',
      linkUrl: '#',
      imageUrl: propertyOne, 
      linkColor: 'text-blue-500',
    },
    {
      title: 'Sell Properties',
      description: 'Put your properties in front of millions of Nigerians and get the best deals in days not months.',
      linkText: 'Sell properties',
      linkUrl: '#',
      imageUrl: propertyOne, 
      linkColor: 'text-blue-500',
    },
    {
      title: 'Become an Agent',
      description: 'Create an account and join us to become an agent. Get all the tools your Real estate agency needs.',
      linkText: 'Join us now',
      linkUrl: '#',
      imageUrl: propertyOne, 
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className=" p-6">
            <img 
              src={service.imageUrl} 
              alt={service.title} 
              className="h-40 w-full object-cover rounded-md mb-4" 
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <a 
              href={service.linkUrl} 
              className={`${service.linkColor} font-semibold text-blue`}>
              {service.linkText} &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
