import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ApaItuRumahHijauItem from "../../items/ApaItuRumahHijauItem";
import { CarouselKegiatanitem } from "../../items/CarouselKegiatanitem";
import { EarthSectionItem } from "../../items/EarthSectionItem";
import HeroImageWithGradientItem from "../../items/HeroImageWithGradientItem";
import LatarBelakangItem from "../../items/LatarBelakangItem";
import { ProfileSatuitem } from "../../items/ProfileSatuitem";
import { RumahBersertifikatItem } from "../../items/RumahBersertifikatItem";
import ValuePropositionSection from "../../items/ValuePropositionSection";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroImageWithGradientItem />
      <ApaItuRumahHijauItem />
      <LatarBelakangItem />
      <RumahBersertifikatItem />
      <ValuePropositionSection />
      <EarthSectionItem />
      <ProfileSatuitem />
      <CarouselKegiatanitem />
      <Footer />
    </>
  );
}

export default LandingPage;
