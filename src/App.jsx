import "./App.css";
import Navbar from "./components/Home/navbar/navbar";
import AboutUs from "./components/Home/about-us/aboutus";
import Cover from "./components/Home/cover-atas/cover";

function App() {
  return (
    <div>
      <Navbar />
      <Cover />
      <AboutUs />
    </div>
  );
}

export default App;
