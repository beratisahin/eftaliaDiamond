import React from "react";

import Section from "../../../HOC/Section";

import blogImage1 from "../../../assets/img/1.png";
import blogImage2 from "../../../assets/img/2.png";
import blogImage3 from "../../../assets/img/3.png";

const Blog = () => {
  return (
    <Section id="blog">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span> </span>Yazılarımız
          </h3>
          <h6 className="section-subtitle mr-auto ml-auto"></h6>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-lg-4 mb-3">
              <div className="card rounded-0">
                <img src={blogImage1} className="card-img-top" alt="Blog 1" />
                <div className="card-body">
                  <h5 className="card-title">PSİKOLOG NEDİR?</h5>
                  <p className="card-text">
                    Psikoloji insanı kaynak olarak alan bir bilim dalıdır.
                    Psikoloji bilim dallarının en genç üyelerinden biridir,
                    bunun sebebi insan psikolojisinin bir bilim şeklinde ele
                    alınmasının yeni sayılan bir gelişme olmasındandır. İnsan
                    psikolojisi diğer pek çok canlıdan daha farklıdır. Dünya
                    üzerinde düşünen tek varlıkların insanlar olmasından dolayı
                    yaşanan tecrübelerin bizi nasıl etkilediği konusunda da
                    insandan başka bir yerde cevap aranamaz. Psikoloji bir
                    insanın yaptığı davranışlara niçin sorusunu yöneltir. Bu
                    soru çevresinde oluşan cevaplar ile insanı anlamaya çalışır.
                  </p>
                  <a href="#!" className="btn btn-sm btn-primary">
                    Daha Fazla Bilgi
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="card rounded-0">
                <img src={blogImage2} className="card-img-top" alt="Blog 2" />
                <div className="card-body">
                  <h5 className="card-title">Öfke Kontrolü Bozukluğu Nedir?</h5>
                  <p className="card-text">
                    fke, bireylerin kendilerini tehdit altında hissetmeleri
                    durumunda doğal içgüdü olarak sergilemiş olduğu duygusal
                    tepkidir. Öfke kontrolünün zorlaştığı durumlarda bireyler
                    başta kendisi olmak üzere karşı tarafı incitecek ya da zarar
                    verecek tepkileri hem söyleyebilir hem de yapabilir. Bu
                    durumların oluş şekline öfke bozukluğu ismi verilmektedir.
                    Buna göre öfke bir bozukluk olarak değil, öfkenin gösterilme
                    şekli, kontrol altında tutulamama durumları ve öfke
                    belirtilerinin incitici ve zarar verici durumlar sonucunda
                    gösterilmesi öfke kontrol bozukluğu olarak tanımlanmaktadır.
                  </p>
                  <a href="#!" className="btn btn-sm btn-primary">
                    Daha Fazla Bilgi
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="card rounded-0">
                <img src={blogImage3} className="card-img-top" alt="Blog 3" />
                <div className="card-body">
                  <h5 className="card-title">Sendeleyen Hayattan Kurtulmak</h5>
                  <p className="card-text">
                    İhtiyaçlarımızın arttığı, yaşamımızın hızlandığı ve iş
                    çevremizden aile, arkadaş çevremize kadar sosyal
                    ilişkilerimizin daha girift hale geldiği günümüz modern
                    dünyasında kimi zaman insan psikolojisi bu tempoya uygun
                    cevaplar veremeyebiliyor. İşte sizin ihtiyacınıza göre
                    psikolojik danışmanlık hizmeti veren Uzm. Klinik Psikolog
                    Furkan LENK bunun için var. Dış yaşamımızdaki tempoya ayak
                    uyduracağım derken oldukça yıpranabilen psikolojinize
                    takviye yapmak için ya da bir başka yöntem olarak hayatınıza
                    dair uygun kararlar verebilmeniz adına rehberlik takviyesi
                    yapmak için var.
                  </p>
                  <a href="#!" className="btn btn-sm btn-primary">
                    Daha Fazla Bilgi
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
