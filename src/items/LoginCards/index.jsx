import LogoLogin from "../../assets/image/LogoBrand.png";
import "../../style.css";

function LoginCard() {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center mt-300">
          <div className="card bg-login" width={550} height={494}>
            <div className="pl-24 pt-24 pb-16">
              <img src={LogoLogin} width={152} height={25} alt="..." />
            </div>
            <h5 className="pl-24 pr-24">
              Indonesia Green and Affordable Housing Program
            </h5>
            <div className="card-body">
              <div className="container">
                <form action="">
                  <div className="container">
                    <div className="col-12 mt-12">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="p-email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-12 mt-24">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="p-email"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </form>
                <p className="text-center text-blue pt-16">Lupa Password</p>

                <button className="text-center btn-login">Masuk</button>
                <div className="">
                  <hr className="divider-line col-3" />
                  <p className="col-2 text- atau-color">Atau</p>
                  <hr className="divider-line col-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginCard;
