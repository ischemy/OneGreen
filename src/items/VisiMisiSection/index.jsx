import visiimage from "../../assets/image/Vissi Image.png"
import misiimage from "../../assets/image/Misi Image.png"

function VisiMisiSection(){
   return(
   <>   
   <section id="visimisi">   
   <div className="container mt-160">
      <div className="row">
         <div className="col mr-24">
            <img src={visiimage} alt="" width={668} height={360}/>
         </div>
         <div className="col mt-84">
            <p className="visi-misi-p">
               Menciptakan dunia di mana setiap rumah adalah teladan dalam keberlanjutan. Kami bermimpi tentang sebuah masa depan 
               di mana rumah-rumah bukan hanya tempat tinggal, 
               tetapi juga ekosistem yang berkontribusi positif pada lingkungan sekitarnya. 
               Kami berkomitmen untuk terus mengembangkan teknologi dan praktik pembangunan ramah lingkungan, 
               serta memberikan solusi perumahan inovatif 
               yang memungkinkan setiap individu untuk hidup seimbang dengan alam. Dengan visi ini, 
               kami berusaha untuk memimpin perubahan dalam industri konstruksi menuju lingkungan yang lebih hijau, 
               lebih sehat, dan lebih berkelanjutan.
            </p>
         </div>
      </div>
      <div className="row mt-40">
         <div className="col-lg-6 col-12">
         <ol>
         <li className="visi-misi-p">
         Menghadirkan Keberlanjutan: Kami berusaha untuk menciptakan rumah-rumah yang tidak hanya hemat energi dan ramah lingkungan, tetapi juga menginspirasi pemiliknya untuk mengadopsi gaya hidup berkelanjutan.
         </li>
         <li className="visi-misi-p">
         Inovasi Berkelanjutan: Kami terus mengembangkan teknologi dan metode pembangunan baru yang meminimalkan dampak lingkungan, memaksimalkan efisiensi, dan meningkatkan kenyamanan dalam rumah.
         </li>
         <li className="visi-misi-p">
         Pendidikan dan Kesadaran: Kami berupaya untuk mengedukasi pelanggan kami tentang manfaat rumah eco friendly dan memberikan sumber daya yang mereka butuhkan untuk membuat pilihan berkelanjutan.
         </li>
         <li className="visi-misi-p">
         Kemitraan Ekosistem: Kami bekerja sama dengan mitra, pemasok, dan komunitas lokal untuk mempromosikan praktik berkelanjutan dalam seluruh rantai pasokan konstruksi.
         </li>
         <li className="visi-misi-p">
         Pelestarian Alam: Kami berkomitmen untuk menjaga lingkungan alam sekitar proyek-proyek kami melalui praktik konservasi dan upaya pemulihan habitat.
         </li>            
         </ol>
         </div>
         <div className="col-lg-6 col-12">
            <img src={misiimage} alt="" width={668} height={360}/>
            </div>
      </div>
   </div> 
   </section>
   </>
   )
}

export default VisiMisiSection