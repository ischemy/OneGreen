import TentangKamiSection from "../../items/TentangKamiSection";
import TimKamiSection from "../../items/TimKamiSection";
import VisiMisiSection from "../../items/VisiMisiSection";

function MenuAboutUs() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <a
          href={"#tentangkami"}
          className="menu-about-us text-center active-menu-aboutus"
        >
          Tentang Kami
        </a>
        <a href={"#visimisi"} className="menu-about-us text-center ">
          Visi Misi
        </a>
        <a href={"#timkami"} className="menu-about-us text-center">
          Tim Kami
        </a>
      </div>
      <TentangKamiSection id="tentangkami" />
      <VisiMisiSection id="visimisi" />
      <TimKamiSection id="timkami" />
    </>
  );
}

export default MenuAboutUs;
