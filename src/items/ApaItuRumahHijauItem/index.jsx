import image1 from "../../assets/image/apaiturumahhijau.png";
import image2 from "../../assets/image/text_information.png";
import image3 from "../../assets/image/container.png";

function ApaItuRumahHijauItem() {
  return (
    <>
      <div className="container mt-120">
        <img src={image1} alt="" className="image-atrh" />
        <div className="container-image">
          <div className="header-atrh">
            <img src={image2} alt="" />
            <div className="header-text-atrh">
              <div className="text-blue-atrh title-in-image">1000+</div>
              <div className="text-black-atrh">Rumah Hijau siap dihuni</div>
            </div>
          </div>
          <img src={image3} alt="" className="header-image-card-atrh" />
          <div className="text-atrh">
            <div className="title-atrh">Apa itu Rumah Hijau</div>
            <p className="paragraph-atrh">
              Rumah hijau adalah rumah yang dirancang untuk <br /> mengurangi
              dampak negatif pada lingkungan dan <br /> meningkatkan kualitas
              hidup penghuninya.
              <br /> Rumah Hijau juga menekankan daya guna kembali
              <br /> sumber daya alam yang dapat diperbarui, mengelola
              <br /> dan memilah sampah rumah tangga secara mandiri,
              <br /> serta adanya ruang terbuka hijau di tempat tinggal.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApaItuRumahHijauItem;
