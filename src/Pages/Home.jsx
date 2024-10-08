import { BestProp, TrendingProp, Testimonial, FAQ, Hero, PropertyCategories, HomeProperties } from "../components";

const Home = () => {
  return (
    <div className="w-full">
      <Hero/>
      <BestProp />
      <TrendingProp />
      <PropertyCategories/>
      <HomeProperties/>
      <Testimonial />
      <FAQ />
    </div>
  );
};

export default Home;
