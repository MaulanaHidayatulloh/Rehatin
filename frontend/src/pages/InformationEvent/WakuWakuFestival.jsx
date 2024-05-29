import Navbar from "../../components/InformationEvent/Navbar/NavbarEvent";
import Footer from "../../components/Home/footer/FooterComponent";
import Information from "../../components/InformationEvent/information/information_WakuWakuFestival";
import RecommendationEvent from "../../components/InformationEvent/recommendation/recommendationEvent_WakuWakuFestival";

const WakuWakuFestival = () => {
  return (
    <div>
      <Navbar />
      <Information />
      <RecommendationEvent />
      <Footer />
    </div>
  );
};

export default WakuWakuFestival;
