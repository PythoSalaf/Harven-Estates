import { Hero, BestProp, TrendingProp, Testimonial, FAQ } from "../components";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <BestProp />
      <TrendingProp />
      <Testimonial />
      <FAQ />
    </div>
  );
};

export default Home;
