import { Home1, Home2 } from "../assets";
const propertyCategories = [
    {
      title: "600 residential apartments",
      description: "Browse the best apartments to live from all the 36 states in Nigeria.",
      icon: "🏡",
      color: "bg-[#F8EDED]",
    },
    {
      title: "100 office spaces",
      description: "Browse the best apartments to live from all the 36 states in Nigeria.",
      icon: "🏡",
      color: "bg-[#EAF2FB]", 
    },
    {
      title: "200 real estate resorts",
      description: "Browse the best apartments to live from all the 36 states in Nigeria.",
      icon: "🏡",
      color: "bg-[#FCF2E0]", 
    },
    {
      title: "600 residential apartments",
      description: "Browse the best apartments to live from all the 36 states in Nigeria.",
      icon: "🏡",
      color: "bg-[#FDF2F8]", 
    },
    {
      title: "800 residential apartments",
      description: "Browse the best apartments to live from all the 36 states in Nigeria.",
      icon: "🏡",
      color: "bg-[#EEF2FF]", 
    },
    {
      title: "600 residential apartments",
      description: "Browse the best apartments to live from all the 36 states in Nigeria.",
      icon: "🏡",
      color: "bg-[#E7F1F6]", 
    },
  ];
  
  const PropertyCategories = () => {
    return (
      <div className="p-10 layout">
        <h2 className="text-2xl font-bold mb-4">All properties categories</h2>
        <p className="mb-6">
          Discover the best properties people are buying/renting on Haven.
        </p>
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyCategories.map((category, index) => (
            <div key={index} className={`${category.color} p-10 rounded-2xl`}>
              <div className="text-4xl mb-4 md:mb-10">{category.icon}</div>
              <h3 className="md:text-lg font-bold mb-2">{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PropertyCategories;
  