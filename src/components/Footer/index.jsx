import logo from "../../assets/image/white_logos.png";
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12 mt-40">
              <img src={logo} alt="" width={152} height={26} />
              <p>
                Jl. Limau I No.18, RT.4/RW.3, Kramat Pela, Kec. Kby. Baru, Kota
                Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130
              </p>
            </div>
            <div className="col-lg-4 col-12 mt-40">
              <div className="kontak-kami">Kontak Kami</div>
              <div className="footer-subtitle mt-12">
                <p className="mt-8">No. Telepon : (021) 38250051</p>
                <p className="mt-8">Email : onegreenid.co.id</p>
                <p className="mt-8">Jam Operasional : 08.30 - 17.00 WIB</p>
              </div>
            </div>
            <div className="col-lg-4 col-12 mt-40 mb-40">
              <div className="footer-title">Tentang Kami</div>
              <div className="footer-subtitle mt-12">
                <p className="mt-8">Cerita One Green</p>
                <p className="mt-8">Visi Misi</p>
                <p className="mt-8">Tim Kami</p>
                <p className="mt-8">Penghargaan</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
