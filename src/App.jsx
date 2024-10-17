import Discover from "./Components/Discover";
import FAQSection from "./Components/FAQ";
import FeaturedEventCard from "./Components/Featured";
import Footer from "./Components/Footer";
import JoinBrandsSection from "./Components/JoinBrand";
import Purchase from "./Components/Purchase_Guide";
import Upcoming from "./Components/Upcoming";

const App = () => {
  return (
    <>
      <Upcoming />
      <FeaturedEventCard />
      <Purchase />
      <Discover />
      <FAQSection />
      <JoinBrandsSection />
      <Footer />
    </>
  );
};

export default App;
