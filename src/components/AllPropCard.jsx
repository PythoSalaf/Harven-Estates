import {
  Category1,
  Category2,
  Category3,
  Category4,
  Category5,
  Category6,
} from "../assets";
const propertyCategories = [
  {
    title: "600 residential apartments",
    description:
      "Browse the best apartments to live from all the 36 states in Nigeria.",
    icon: Category1,
    color: "bg-[#F8EDED]",
  },
  {
    title: "100 office spaces",
    description:
      "Browse the best apartments to live from all the 36 states in Nigeria.",
    icon: Category2,
    color: "bg-[#EAF2FB]",
  },
  {
    title: "200 real estate resorts",
    description:
      "Browse the best apartments to live from all the 36 states in Nigeria.",
    icon: Category3,
    color: "bg-[#FCF2E0]",
  },
  {
    title: "600 residential apartments",
    description:
      "Browse the best apartments to live from all the 36 states in Nigeria.",
    icon: Category4,
    color: "bg-[#FDF2F8]",
  },
  {
    title: "800 residential apartments",
    description:
      "Browse the best apartments to live from all the 36 states in Nigeria.",
    icon: Category5,
    color: "bg-[#EEF2FF]",
  },
  {
    title: "600 residential apartments",
    description:
      "Browse the best apartments to live from all the 36 states in Nigeria.",
    icon: Category6,
    color: "bg-[#E7F1F6]",
  },
];

const PropertyCategories = () => {
  return (
    <div className="p-10 layout">
      <h2 className="mb-4 text-2xl font-bold">All properties categories</h2>
      <p className="mb-6">
        Discover the best properties people are buying/renting on Haven.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {propertyCategories.map((category, index) => (
          <div key={index} className={`${category.color} p-10 rounded-2xl`}>
            <img
              src={category.icon}
              alt=""
              className="mb-4  size-[40px] md:size-[50px] md:mb-10"
            />
            <h3 className="mb-2 font-bold md:text-lg">{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCategories;
