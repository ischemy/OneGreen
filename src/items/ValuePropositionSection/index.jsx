import line1 from "../../assets/image/Line.png";
import esl from "../../assets/image/energysavingleaf.svg";
function ValuePropositionSection() {
  return (
    <>
      <div className="container ">
        <div className="mt-80">
          <div className="d-flex">
            <div className="text-kip mt-138 mr-40">
              Kenapa{" "}
              <span className="text-rh">
                {" "}
                Rumah <br />
                Hijau
              </span>{" "}
              itu Penting
              <div className="">
                <img src={line1} alt="" />
              </div>
            </div>
            <div
              className="card bg-gray-card"
              style={{ width: "1012px", height: "376px" }}
            >
              <div className="card-body">
                <div className="d-flex justify-content-center mt-64">
                  <div className="card card-esl">
                    <div className="card-body">
                      <img src={esl} alt="" width={40} height={40} />
                      <div className="title-krhip">
                        Material Lokal Ramah Lingkungan
                      </div>
                      <div className="subtitle-krhip">
                        Material bangunan yang digunakan ramah lingkungan
                      </div>
                    </div>
                  </div>
                  <div className="card card-esl">
                    <div className="card-body">
                      <img src={esl} alt="" width={40} height={40} />
                      <div className="title-krhip">Ruang Terbuka Hijau</div>
                      <div className="subtitle-krhip">
                        Area hijau &gt; 20% dari luas tanah
                      </div>
                    </div>
                  </div>
                  <div className="card card-esl">
                    <div className="card-body">
                      <img src={esl} alt="" width={40} height={40} />
                      <div className="title-krhip">Rumah Sehat</div>
                      <div className="subtitle-krhip">
                        Terdapat sirkulasi udara yang baik, pencahayaan matahari
                        yang cukup dan menggunakan saniter hemat air
                      </div>
                    </div>
                  </div>
                  <div className="card card-esl">
                    <div className="card-body">
                      <img src={esl} alt="" width={40} height={40} />
                      <div className="title-krhip">
                        Gaya Hidup Ramah Lingkungan
                      </div>
                      <div className="subtitle-krhip">
                        Adanya pemilahan dan pengelolaan sampah dan limbah rumah
                        tangga yang baik
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ValuePropositionSection;
