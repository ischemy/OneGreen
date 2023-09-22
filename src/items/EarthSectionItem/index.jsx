import halfcircle from "../../assets/image/halfcircle.png"
import earth from "../../assets/image/Earth Illustration.png"
import sectiongreen from "../../assets/image/call_to_action_section.png"
import leaflight from "../../assets/image/leafligth.svg"
import leafwaterdrop from "../../assets/image/leafwaterdrop.png"
import recycle from "../../assets/image/recycle.png"
import leafsun from "../../assets/image/leafsun.png"
import leafwater from "../../assets/image/leafwater.png"
import leafhouse from "../../assets/image/leafhouse.svg"
import upgreen from "../../assets/image/upgreen.svg"
import downred from "../../assets/image/downred.svg"
import arrowdownright from "../../assets/image/arrowdownright.svg"

export function EarthSectionItem(){
    return <>
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="text-top text-center">
                    Total Rumah Hijau <br />
                    <span className="text-bottom">
                    1000 Rumah Hijau
                    </span>
                </div>                            
            </div>
            <div className="container-image ">
                <div className="header-earth-section-image">
                <img src={earth} alt="" width={278} height={332}/>
                </div>
            </div>
                <div className="d-flex justify-content-center mt-223">
                    <img src={halfcircle} alt="" width={1440} height={812}/>
                </div>
                <div className="d-flex justify-content-center mt-min-200">
                    <img src={sectiongreen} alt="" width={1440} height={406}/>
                </div>
                <div className="container-image">
                    <div className="position-all-card">
                        <div className="container">
                            <div className="row">
                                <div className="col-4 mt-40">
                        <div className="card" style={{width:"329px",height:"150px"}}>
                            <div className="card-body">
                                <div className="d-flex">

                                <div className="text-title-card">
                                    Efisiensi Penggunaan Energi
                                <div className="text-number-card mt-11">
                                   <img src={downred} alt="" /> 4.12%
                                <span className="text-subtitle-card">
                                    emisi CO2
                                </span>
                                </div>
                                </div>
                                <img src={leaflight} width={126} height={126} alt="" />
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-4 mt-40">                        
                        <div className="card" style={{width:"329px",height:"150px"}}>
                            <div className="card-body">
                                <div className="d-flex">

                                <div className="text-title-card">
                                Efisiensi Penggunaan Air
                                <div className="text-number-card mt-11">
                                   <img src={downred} alt="" /> 1,200
                                <span className="text-subtitle-card">
                                M3
                                </span>
                                </div>
                                </div>
                                <img src={leafwaterdrop} width={126} height={126} alt="" />
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-4 mt-40">
                        <div className="card" style={{width:"329px",height:"150px"}}>
                            <div className="card-body">
                                <div className="d-flex">

                                <div className="text-title-card">
                                Jumlah Sampah yang Dikelola
                                <div className="text-number-card mt-11">
                                   <img src={upgreen} alt="" /> 100
                                <span className="text-subtitle-card">
                                kilogram
                                </span>
                                </div>
                                </div>
                                <img src={recycle} width={126} height={126} alt="" />
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-4 mt-40">
                        <div className="card" style={{width:"329px",height:"150px"}}>
                            <div className="card-body">
                                <div className="d-flex">

                                <div className="text-title-card">
                                Penggunaan Material Ramah Lingkungan
                                <div className="text-number-card mt-11">
                                   <img src={upgreen} alt="" /> 20%
                                <span className="text-subtitle-card">
                                material
                                </span>
                                </div>
                                </div>
                                <img src={leafhouse} width={126} height={126} alt="" />
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-4 mt-40">
                        <div className="card" style={{width:"329px",height:"150px"}}>
                            <div className="card-body">
                                <div className="d-flex">

                                <div className="text-title-card">
                                Kualitas Udara di Sekitar
                                <div className="text-number-card mt-11">
                                   <img src={upgreen} alt="" /> 10%
                                <span className="text-subtitle-card">
                                    lebih bersih
                                </span>
                                </div>
                                </div>
                                <img src={leafsun} width={126} height={126} alt="" />
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-4 mt-40">
                        <div className="card" style={{width:"329px",height:"150px"}}>
                            <div className="card-body">
                                <div className="d-flex">

                                <div className="text-title-card">
                                Pengelolaan Air Limbah
                                <div className="text-number-card mt-11">
                                   <img src={upgreen} alt="" /> 100
                                <span className="text-subtitle-card">
                                    M3
                                </span>
                                </div>
                                </div>
                                <img src={leafwater} width={126} height={126} alt="" />
                                </div>
                            </div>
                        </div>
                        </div>
                        
                        </div>
                        </div>
                    </div>
                </div>
                <div className="container-image">
                    <div className="text-position">
                    <div className="text-line-1 text-white">
                        Mau rumah Anda disertifikasi sebagai <br />
                        <span className="text-line-2 text-white">
                        Rumah Hijau?
                        </span>
                    </div>
                    </div>
                    <div className="button-position">
                        <div className="btn-mulai-skrg text-center text-green">
                            <div className="mt-17">
                            Mulai Sekarang <img src={arrowdownright} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
}