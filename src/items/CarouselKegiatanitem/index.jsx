import line2 from "../../assets/image/line2.png";
import kegiatan1 from "../../assets/image/kegiatan1.png";
import kegiatan2 from "../../assets/image/kegiatan2.png";
import kegiatan3 from "../../assets/image/kegiatan3.png";
export function CarouselKegiatanitem() {
  function CardKegiatan(props) {
    return (
      <>
        <div className="card">
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="text-line-kegiatan1">10 Agustus 2023</p>
            <p className="text-line-kegiatan2">
              Peletakan Batu Pertama Untuk Pembangunan Rumah Hijau
            </p>
          </div>
        </div>
        ;
      </>
    );
  }
  return (
    <>
      <div className="container mt-80">
        <div className="font-judul">KEGIATAN KAMI</div>
        <div>
          <img src={line2} alt="" className="mb-12" />
        </div>
        <div
          id="carouselExampleCaptions"
          className="carousel carousel-dark slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card-group gap-8">
                <CardKegiatan image={kegiatan1} />
                <CardKegiatan image={kegiatan2} />
                <CardKegiatan image={kegiatan3} />
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-group gap-8">
                <CardKegiatan image={kegiatan1} />
                <CardKegiatan image={kegiatan2} />
                <CardKegiatan image={kegiatan3} />
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-group gap-8">
                <CardKegiatan image={kegiatan1} />
                <CardKegiatan image={kegiatan2} />
                <CardKegiatan image={kegiatan3} />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
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
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="carousel-item d-flex active">
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
</div> */
}
