import Banner from "./components/Banner";
import OutstandingRealEstateProject from "./components/OutstandingRealEstateProject";
import RealEstateByLocation from "./components/RealEstateByLocation";
import RealEstateForYou from "./components/RealEstateForYou";
import RealEstateNews from "./components/RealEstateNews";

const Home = () => {
  return (
    <div id="home-page">
      <Banner />
      <RealEstateForYou />
      <OutstandingRealEstateProject />
      <RealEstateByLocation />
      <RealEstateNews />
    </div>
  );
};

export default Home;
