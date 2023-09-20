import Logo from "../../assets/image/LogoBrand@2x.png"
import arrow from "../../assets/image/icon_panah.svg"
import Contact from "../Contact";
function Navbar() {
  return(<>
  <Contact/>
  <div className="container">
    <nav className="navbar ml-5 navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href={"/"}><img src={Logo} alt="" width={152} height={26}/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item pr-24 text-black">
        <a className="nav-link text-black" href={"/rumahhijau"}>Rumah Hijau</a>
      </li>
      <li className="nav-item pr-24 text-black">
        <a className="nav-link text-black" href={"/aboutus"}>Tentang Kami</a>
      </li>
      <li className="nav-item pr-24 ">
        <a className="nav-link text-black" href={"/"}>Berita</a>
      </li>
      <li className="nav-item pr-24 text-black">
        <a className="nav-link text-black" href={"/"}>Bantuan</a>
      </li>
      <li className="nav-item">
      <button className="navbar-link text-center btn-login-portal text-green">Login ke portal <i><img src={arrow} alt="" /></i></button>
      </li>
    </ul>
  </div>
    </nav>
  </div>
  </>)
}

export default Navbar;
