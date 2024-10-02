import { Hero, BestProp, TrendingProp, Testimonial, FAQ } from "../components";

const Home = () => {

  return (
    <div className="w-full">
        <Hero/>
      <div className="layout">
        <BestProp/>
        <TrendingProp/>
        <Testimonial/>
        <FAQ/>
      </div>
    </div>
  );
};

export default Home;
