import CardCategory from "../components/Home/category/CardCategory";
import Footer from "../components/Home/footer/FooterComponent";
import Navbar from "../components/Home/navbar/navbar";
import AboutUs from "../components/Home/about-us/aboutus";
import Cover from "../components/Home/cover-atas/cover";
import City from "../components/Home/city/city";
import Event from "../components/Home/event/event";
import Recommendation from "../components/Home/recommendation/recommendation";
import Note from "../components/Home/note/note";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Cover />
      <AboutUs />
      <City />
      <Recommendation />
      <Event />
      <CardCategory />
      <Footer />
    </div>
  );
};

export default HomePage;
