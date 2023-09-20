import phone from "../../assets/image/phone.svg"
import mail from "../../assets/image/gray_mail.svg"
import instagram from "../../assets/image/instagram.svg"
import linkedin from "../../assets/image/linkedin.svg"

function Contact(){
return (
    <>
        <div className="container-fluid bg-contact">
            <div className="container">
                <div className="row">
                    <div className="mt-8">
                        <div className="d-flex">
                            <img src={phone} alt="" width={20} height={20} />
                            <p className="pl-8 text-gray">+62 821 3320 2930</p>
                                <div className="pl-20">
                                    <div className="d-flex">
                                        <img src={mail} className="" alt="" width={20} height={20} />
                                        <p className="pl-8 text-gray">contact_center@zerone.co.id</p>
                                    </div>
                                </div>
                                    <div className="ms-auto">
                                        <img src={instagram} className="mr-12" alt="" width={20} height={20} />
                                        <img src={linkedin} className="" alt="" width={20} height={20} />
                                    </div>
                        </div>
                    </div>
             
                    {/* <div className="mail mt-8">
                        <div className="d-flex">
                            <img src={mail} alt="" width={20} height={20} />
                            <p className="pl-8 text-gray">contact_center@zerone.co.id</p>
                        </div>
                    </div> */}
                </div>
                
            </div>
        </div>
    </>
)
}

export default Contact