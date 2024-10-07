import { BestProp, TrendingProp, Testimonial, FAQ, Hero } from "../components";

const Home = () => {
  return (
    <div className="w-full">
      <Hero/>
      <BestProp />
      <TrendingProp />
      <Testimonial />
      <FAQ />
    </div>
  );
};

export default Home;
