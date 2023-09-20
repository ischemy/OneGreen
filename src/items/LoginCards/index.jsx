import LogoLogin from "../../assets/image/LogoBrand.png";
import "../../style.css";
import Leaf1 from "../../assets/image/Leaf 1 Login Page.svg"
import Leaf2 from "../../assets/image/Leaf 2 Login Page.svg" 
function LoginCard() {
  return (
    <>
    <img src={Leaf2} className="leaf2" alt="" />
      <div className="container">
        <div className="d-flex justify-content-center mt-100">
          <div className="card bg-login border-0" width={550} height={494}>
            <div className="pl-24 pt-24 pb-16">
              <img src={LogoLogin} width={152} height={25} alt="..." />
            <h5 className="pt-16 text-medium">
              Indonesia Green and Affordable Housing Program
            </h5>
            <hr  width={502}/>
            </div>
            <div className="card-body pl-48 pr-48">
              <p className="text-regular">Login Akun</p>
                <form action="">
                  <div className="input-icons">

                    <div className="mt-12">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="p-email border-gray icon-email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mt-24">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="p-email border-gray icon-password"
                        placeholder="Password"
                      />
                    </div>
                        </div>
                </form>
               
                  
                <p className="text-center text-blue pt-16 text-regular">Lupa Password</p>                
                <button className="text-center btn-login text-white border-0 text-semibold">Masuk</button>
                <div className="d-flex">
                  <hr className="border-gray" width={206}/>
                   <div className="divider-text atau-color pl-8 pr-8 text-regular">Atau</div>
                  <hr className="border-gray" width={206}/>
                </div>                  
                <button className="text-center btn-regis text-green text-semibold">Registrasi</button>                                                                               
                </div>              
                </div>           
        </div>
      </div>
      <img src={Leaf1} className="leaf1" alt="" />
    </>
  );
}

export default LoginCard;
