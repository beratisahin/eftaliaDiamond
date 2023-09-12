import React from "react";

import Section from "../../../HOC/Section";
import aboutImage from "../../../assets/img/EftaliaDiamond.png";

const about = () => {
  return (
    <Section id="about">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>Eftalia Diamond</span> Güzellik Salonu
          </h3>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-12 col-lg-6 mb-3">
              <div className="aboutImage">
                <img
                  src={aboutImage}
                  alt="Erzurum Lazer Epilasyon"
                  title="Erzurum Eftalia Diamond Güzellik Salonu"
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <h5 className="about-title">Hakkında</h5>
              <div className="about-description">
                <p style={{color:"black"}}>
                  Erzurum Eftalia Diamond Beauty Salonu olarak şehrin merkezinde
                  bulunan salonumuzda siz değerli müşterilerimize hizmet
                  vermekteyiz.
                </p>
                <h5 className="about-title" style={{color:"black"}}>Misyonumuz</h5>
                <div className="about-description">
                  <p style={{color:"black"}}>
                  "Müşteri Memnuniyeti ve Estetik Mükemmeliyet İçin
                  Varız" Eftalia Diamond Güzellik Salonu olarak misyonumuz,
                  müşterilerimize en üstün güzellik ve bakım hizmetlerini sunmak
                  ve her bir müşterimizin kendini güzel ve özel hissetmesini
                  sağlamaktır. Her müşteriye kişisel ve özenli bir deneyim
                  sunarak, içsel güzelliklerini vurgulamaya ve kendilerini
                  yeniden keşfetmelerine yardımcı oluyoruz. Müşteri memnuniyeti,
                  işimizin kalbidir ve her aşamada bu değere odaklanıyoruz.
                  Erzurum'daki güzellik standartlarını yükseltmek için
                  titizlikle çalışıyoruz ve her müşterimizin güzellik
                  potansiyelini açığa çıkarmalarına yardımcı oluyoruz.
                  </p>
                </div>
                <h5 className="about-title"style={{color:"black"}}>Vizyonumuz</h5>
                <div className="about-description">
                  <p style={{color:"black"}}>
                  "Erzurum'un Güzellik Standartlarını Yeniden
                  Tanımlamak" Vizyonumuz, Erzurum'da güzellik ve bakım konusunda
                  bir öncü marka olmak ve müşterilerimize her seferinde
                  olağanüstü bir deneyim sunmaktır. Erzurum şehrinin güzellik
                  anlayışını ileriye taşımaya, güzellik ve bakımın kişinin
                  kendine olan saygısı ve özgüveniyle ilgili olduğunu
                  vurgulamaya kararlıyız. Gelecekte, Eftalia Diamond Güzellik
                  Salonu olarak daha fazla yenilikçi hizmet sunmayı,
                  sürdürülebilir uygulamaları benimsemeyi ve müşteri
                  memnuniyetini artırmayı hedefliyoruz. Erzurum'daki herkesin
                  güzelliklerini ve özgüvenlerini kutlamasına yardımcı olmak
                  için buradayız.
                  </p>
                </div>

                <a
                  href="https://tr.linkedin.com/in/hanife-ayg%C3%BCn-098584240"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary rounded-0 mr-2"
                >
                  Daha Fazla Bilgi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;
