import image1 from "../../assets/image/Frame 1000001222.png";
import image2 from "../../assets/image/Frame 1000001223.png";
function LatarBelakangItem() {
  return (
    <>
      <div className="container mt-100">
        <div className="container-image">
          <div className="header-text-1">Kurangnya hunian yang terjangkau</div>
          <div className="header-text-2">
            Kebutuhan dasar untuk hunian layak yang terjangkau. <br /> 800.000
            hunian layak dan terjangkau yang perlu <br /> dibangun setiap
            tahunnya, terutama untuk Masyarakat <br /> Berpenghasilan Rendah
            (MBR). 12,1 juta keluarga <br />
            membutuhkan hunian yang terjangkau.
          </div>
          <div className="header-text-3">
            Pengelolaan limbah belum optimal. Sebanyak 64,7% dari total <br />{" "}
            limbah yang dihasilkan tidak terproses dan menumpuk di TPA. <br />{" "}
            Emisi yang dihasilkan per orang per tahun 11,76kg CO2e dari <br />{" "}
            limbah yang tidak terkelola. Jumlah sampah di Indonesia tahun <br />{" "}
            2022 sejumlah 35,2 ton.
          </div>
          <div className="header-text-4">
          Peningkatan jumlah sampah
          </div>
        </div>
        <div className="d-flex justify-content-center mr-85">
          <img src={image1} alt="" />
        </div>
        <div className="d-flex justify-content-center">
          <div className="vertical"></div>
        </div>
        <div className="d-flex justify-content-center ml-85">
          <img src={image2} alt="" />
        </div>
      </div>
    </>
  );
}

export default LatarBelakangItem;
