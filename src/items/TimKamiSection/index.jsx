import pp1 from "../../assets/image/pp1.png"
import pp2 from "../../assets/image/pp2.png"
import pp3 from "../../assets/image/pp3.png"

function TimKamiSection(){
return(
<>
<section id="timkami">
    <div className="container mt-160">
        
        <div className="d-flex justify-content-center">
            <div className="tim-kami-title">
                Tim Kami            
            </div>
        </div>   
        <div className="d-flex justify-content-center">
              <div className="blue-line"></div>
              <div className="blue-line-bold"></div>
              <div className="blue-line"></div>
        </div>             
<div className="d-flex justify-content-center">
    <div className="row">    
<div className="col-lg-4 col-12">
        <div className="card border-0" style={{width: "275px"}}>
            <img src={pp1}  alt="..." width={275} height={371}/>
            <div className="card-body text-center">
                <h5 className="name-title">Moch. Ihsan</h5>
                <p className="position-text">Chief Operation Officer</p>    
            </div>
        </div>
</div>
<div className="col-lg-4 col-12">

        <div className="card border-0" style={{width: "275px"}}>
            <img src={pp2}  alt="..." width={275} height={371}/>
            <div className="card-body text-center">
                <h5 className="name-title">Wenrizal</h5>
                <p className="position-text">Chief Executive Officer</p>    
            </div>
        </div>
</div>
<div className="col-lg-4 col-12 ">

        <div className="card border-0 " style={{width: "275px"}}>
            <img src={pp3}  alt="..." width={275} height={371}/>
            <div className="card-body text-center">
                <h5 className="name-title">Wita</h5>
                <p className="position-text">Chief Executive Officer</p>    
            </div>
        </div>
</div>
</div>
        </div>
    </div>
</section>
</>
)
}

export default TimKamiSection