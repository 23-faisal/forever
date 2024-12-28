import BestSeller from "@/components/common/BestSeller/BestSeller";
import LatestCollection from "@/components/common/LatestCollection/LatestCollection";
import Hero from "@/components/Hero/Hero";

const HomePage = () => {
  return (
    <div>
      <div>
        <Hero />
        <LatestCollection />
        <BestSeller />
      </div>
    </div>
  );
};

export default HomePage;
