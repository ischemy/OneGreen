import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ApaItuRumahHijauItem from "../../items/ApaItuRumahHijauItem";
import HeroImageWithGradientItem from "../../items/HeroImageWithGradientItem";
import LatarBelakangItem from "../../items/LatarBelakangItem";
import ValuePropositionSection from "../../items/ValuePropositionSection";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroImageWithGradientItem />
      <ApaItuRumahHijauItem />
      <LatarBelakangItem />
      <ValuePropositionSection />
      <Footer />
    </>
  );
}

export default LandingPage;
