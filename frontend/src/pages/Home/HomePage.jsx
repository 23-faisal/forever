import BestSeller from "@/components/common/BestSeller/BestSeller";
import LatestCollection from "@/components/common/LatestCollection/LatestCollection";
import OutPolicy from "@/components/common/OurPolicy/OutPolicy";
import Hero from "@/components/Hero/Hero";

const HomePage = () => {
  return (
    <div>
      <div>
        <Hero />
        <LatestCollection />
        <BestSeller />
        <OutPolicy />
      </div>
    </div>
  );
};

export default HomePage;
