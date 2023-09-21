import items1 from "../../assets/image/items1.png"
import items2 from "../../assets/image/items2.png"
import items3 from "../../assets/image/items3.png"
import logopt1 from "../../assets/image/logoPT1.png"
import logopt2 from "../../assets/image/logoPT2.png"

function RumahCardItems(){
    return (
    <>
    <div className="container">
        <div className="d-flex justify-content-center">
        <div className="row mb-24">
            <div className="col-lg-4 col-12">
                <div className="card br-6" style={{width: "333px", height:"422px"}}>
                <img src={items1} className="card-img-top" alt="..." width={333} height={250}/>
                    <div className="card-body">
                        <div className="text-unit ml-8 mt-12">18 unit tersedia</div>
                       <div className="text-title-card mt-12">Royal Residence</div>
                       <div className="text-address-card">Sumatera Utara, Kota Binjai, Binjai Utara, Jati Utomo</div>
                       <div className="d-flex justify-content-start mt-8 mb-12">
                       <img src={logopt1} alt="" className="logo-pt-card"/>
                       <div className="ml-4 text-seller">PT. BINTANG ROYAL SEMESTA (HIMPERRA)</div>
                       </div>
                        
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-12">
                <div className="card br-6" style={{width: "333px", height:"425px"}}>
                <img src={items2} className="card-img-top" alt="..." width={333} height={250}/>
                    <div className="card-body mb-12">
                        <div className="text-unit ml-8 mt-12">18 unit tersedia</div>
                       <div className="text-title-card mt-12">SYIHAB PERSADA I</div>
                       <div className="text-address-card">Kalimantan Selatan, Kab Banjar, Martapura, Cindai Alus</div>
                       <div className="d-flex justify-content-start mt-8 mb-12">
                       <img src={logopt2} alt="" className="logo-pt-card"/>
                       <div className="ml-4 text-seller">SYIHAB PERSADA INDONESIA, PT (REI)</div>
                       </div>
                        
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-12">
                <div className="card br-6" style={{width: "333px", height:"422px"}}>
                <img src={items3} className="card-img-top" alt="..." width={333} height={250}/>
                    <div className="card-body">
                        <div className="text-unit ml-8 mt-12">18 unit tersedia</div>
                       <div className="text-title-card mt-12">Mutiara Sindangmulya Jaya</div>
                       <div className="text-address-card">Jawa Barat, Kab Bekasi, Cibarusah, Sindangmulya</div>
                       <div className="d-flex justify-content-start mt-8 mb-12">
                       <img src={logopt2} alt="" className="logo-pt-card"/>
                       <div className="ml-4 text-seller">AMAN BAE PERKASA, PT (REI)</div>
                       </div>
                        
                    </div>
                </div>
            </div>
            
            
        </div>        
        </div>
    </div>
    </>
    )
}

export default RumahCardItems