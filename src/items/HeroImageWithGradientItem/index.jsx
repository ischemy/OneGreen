import arrow from "../../assets/image/icon_panah.svg";
import HeroImageWithGradient from "../../assets/image/Hero Image With Gradient.png";
function HeroImageWithGradientItem() {
  return (
    <>
      <>
        <div className="container">
          <img src={HeroImageWithGradient} alt="" className="image" />
          <div className="container-image">
            <div className="header-landing">
              <div className="text-white title-in-image">
                Rumah Hijau, Bantu Lindungi <br />
                Lingkungan
                <br />
                <button className=" text-center btn-login-portal text-green">
                  Login ke portal
                  <i>
                    <img src={arrow} alt="" />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
export default HeroImageWithGradientItem;
