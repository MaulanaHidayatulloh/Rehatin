import Navbar from "../../components/InformationEvent/Navbar/NavbarEvent";
import Footer from "../../components/Home/footer/FooterComponent";
import Information from "../../components/InformationEvent/information/information_JDMFestBandung";
import RecommendationEvent from "../../components/InformationEvent/recommendation/recommendationEvent_TheEliteShowcase";

const TheEliteShowcase = () => {
  return (
    <div>
      <Navbar />
      <Information />
      <RecommendationEvent />
      <Footer />
    </div>
  );
};

export default TheEliteShowcase;
