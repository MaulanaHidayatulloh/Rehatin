import CardCategory from "../components/Home/category/CardCategory";
import Footer from "../components/Home/footer/FooterComponent";
import Navbar from "../components/Home/navbar/navbar";
import AboutUs from "../components/Home/about-us/aboutus";
import Cover from "../components/Home/cover-atas/cover";
import City from "../components/Home/city/city";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Cover />
      <AboutUs />
      <City />
      <CardCategory />
      <Footer />
    </div>
  );
};

export default HomePage;
