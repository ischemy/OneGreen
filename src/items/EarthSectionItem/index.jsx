/* eslint-disable react/prop-types */
import halfcircle from "../../assets/image/halfcircle.png";
import earth from "../../assets/image/Earth Illustration.png";
import sectiongreen from "../../assets/image/call_to_action_section.png";
import leaflight from "../../assets/image/leafligth.svg";
import leafwaterdrop from "../../assets/image/leafwaterdrop.png";
import recycle from "../../assets/image/recycle.png";
import leafsun from "../../assets/image/leafsun.png";
import leafwater from "../../assets/image/leafwater.png";
import leafhouse from "../../assets/image/leafhouse.svg";
import upgreen from "../../assets/image/upgreen.svg";
import downred from "../../assets/image/downred.svg";
import arrowdownright from "../../assets/image/arrowdownright.svg";

export function EarthSectionItem() {
  function EarthCard(props) {
    return (
      <>
        <div className="card" style={{ width: "329px", height: "150px" }}>
          <div className="card-body">
            <div className="d-flex">
              <div className="text-title-card">
                {props.title}
                <div className="text-number-card mt-11">
                  <img src={props.arrow} alt="" /> {props.percent}
                  <span className="text-subtitle-card">{props.subtitle}</span>
                </div>
              </div>
              <img src={props.icon} width={126} height={126} alt="" />
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="text-top text-center">
            Total Rumah Hijau <br />
            <span className="text-bottom">1000 Rumah Hijau</span>
          </div>
        </div>
        <div className="container-image ">
          <div className="header-earth-section-image">
            <img src={earth} alt="" width={278} height={332} />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-223">
          <img src={halfcircle} alt="" width={1440} height={812} />
        </div>
        <div className="d-flex justify-content-center mt-min-200">
          <img src={sectiongreen} alt="" width={1440} height={406} />
        </div>
        <div className="container-image">
          <div className="position-all-card">
            <div className="container">
              <div className="row">
                <div className="col-4 mt-40">
                  <EarthCard
                    title="Efisiensi Penggunaan Energi"
                    percent="4.12%"
                    subtitle="emisi CO2"
                    arrow={downred}
                    icon={leaflight}
                  />
                </div>
                <div className="col-4 mt-40">
                  <EarthCard
                    title="Efisiensi Penggunaan Air"
                    percent="1,200"
                    subtitle="M3"
                    arrow={downred}
                    icon={leafwaterdrop}
                  />
                </div>
                <div className="col-4 mt-40">
                  <EarthCard
                    title="Jumlah Sampah yang Dikelola"
                    percent="100"
                    subtitle="kilogram"
                    arrow={upgreen}
                    icon={recycle}
                  />
                </div>
                <div className="col-4 mt-40">
                  <EarthCard
                    title="Penggunaan Material Ramah Lingkungan"
                    percent="20%"
                    subtitle="material"
                    arrow={upgreen}
                    icon={leafhouse}
                  />
                </div>
                <div className="col-4 mt-40">
                  <EarthCard
                    title="Kualitas Udara di Sekitar"
                    percent="10%"
                    subtitle="lebih bersih"
                    arrow={upgreen}
                    icon={leafsun}
                  />
                </div>
                <div className="col-4 mt-40">
                  <EarthCard
                    title="Pengelolaan Air Limbah"
                    percent="100"
                    subtitle="M3"
                    arrow={upgreen}
                    icon={leafwater}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-image">
          <div className="text-position">
            <div className="text-line-1 text-white">
              Mau rumah Anda disertifikasi sebagai <br />
              <span className="text-line-2 text-white">Rumah Hijau?</span>
            </div>
          </div>
          <div className="button-position">
            <div className="btn-mulai-skrg text-center text-green">
              <div className="mt-17">
                Mulai Sekarang <img src={arrowdownright} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
