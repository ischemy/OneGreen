import line2 from "../../assets/image/line2.png";
import kegiatan1 from "../../assets/image/kegiatan1.png";
import kegiatan2 from "../../assets/image/kegiatan2.png";
import kegiatan3 from "../../assets/image/kegiatan3.png";
export function CarouselKegiatanitem() {
  return (
    <>
      <div className="container mt-80">
        <div className="font-judul">KEGIATAN KAMI</div>
        <div>
          <img src={line2} alt="" />
        </div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item d-flex active">
              <div
                className="card border-0"
                style={{ width: "482px", height: "454px" }}
              >
                <div className="card-body">
                  <img src={kegiatan1} className="d-block w-100" alt="..." />
                  <div>
                    <p className="text-line-kegiatan1">10 Agustus 2023</p>
                    <p className="text-line-kegiatan2">
                      Peletakan Batu Pertama Untuk Pembangunan Rumah Hijau
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card border-0"
                style={{ width: "482px", height: "454px" }}
              >
                <div className="card-body">
                  <img src={kegiatan2} className="d-block w-100" alt="..." />
                </div>
              </div>
              <div
                className="card border-0"
                style={{ width: "482px", height: "454px" }}
              >
                <div className="card-body">
                  <img src={kegiatan3} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
            <div className="carousel-item"></div>
            <div className="carousel-item"></div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="d-flex justify-content-center mb-91">
          <div className="carousel-pagination">
            <button className=" border-0"></button>
            <button className=" border-0 ml-6"></button>
            <button className=" border-0 ml-6"></button>
            <button className="active border-0 ml-6"></button>
          </div>
        </div>
      </div>
    </>
  );
}
