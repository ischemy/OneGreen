import cokromardianto from "../../assets/image/cokromardianto.png"
// import kutip from "../../assets/image/kutip.png"

export function ProfileSatuitem(){
    return <>
    <div className="container mt-177">
        <div className="container-image">     
        <div className="card border-0">
            <div className="card-body">
                <div className="profile-text-1">
                    Peningkatan kualitas rumah untuk <br /> masyarakat dengan konsep ramah <br /> lingkungan
                </div>
                <div className="profile-name-card mt-235">
                    Cokro Mardianto
                </div>
                <div className="profile-position-name">
                    Dirut PT Puri Mega Sarana Land
                </div>
            </div>
        </div>

        <div className="photo-position">
            <img src={cokromardianto} width={380} height={570} alt="" />
        </div>
        <div className="btn-position-profile">
        <button className="btn-next-profile">Next <span className="ml-29">&gt;</span></button>
        </div>
        </div>
    </div>
    </>
}