import Image1 from "../../assets/image/About Us Hero Image.png";
function AboutUsHeroImage() {
  return (
    <>
      <div className="container">
        <img src={Image1} alt="" className="image" />
        <div className="container-image">
          <div className="header">
            <div className="text-white title">
              Komitmen Kami untuk Masa
              <br />
              <span className="text-blue">Depan Berkelanjutan</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsHeroImage;
