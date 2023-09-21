import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AboutUsHeroImage from "../../items/AboutUsHeroImage";
import MenuAboutUs from "../../items/MenuAboutUs";
import TentangKamiSection from "../../items/TentangKamiSection";
import TimKamiSection from "../../items/TimKamiSection";
import VisiMisiSection from "../../items/VisiMisiSection";

function AboutUsPage() {
  return (
    <>
      <Navbar />
      <AboutUsHeroImage />
      <MenuAboutUs />
      <TentangKamiSection/>
      <VisiMisiSection/>
      <TimKamiSection/>
      <Footer />
    </>
  );
}

export default AboutUsPage;
