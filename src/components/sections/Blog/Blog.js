import React from "react";

import Section from "../../../HOC/Section";

import blogImage1 from "../../../assets/img/b1.PNG";
import blogImage2 from "../../../assets/img/b2.PNG";
import blogImage3 from "../../../assets/img/b3.PNG";

const Blog = () => {
  return (
    <Section id="blog">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span> </span>Blog
          </h3>
          <h6 className="section-subtitle mr-auto ml-auto"></h6>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-lg-4 mb-3">
              <div className="card rounded-0" >
                <img src={blogImage1} className="card-img-top" alt="Blog 1" />
                <div className="card-body" >
                  <h5 className="card-title">Zayıflamada Krom Etkisi?</h5>
                  <p className="card-text" style={{height:"300px"}}>
                    İştah artışı krom eksikliği yaşayanlarda ortaya çıkmaktadır.
                    Vücutta idrarla fazla krom atılınca kan şekeri yükselir ve
                    tatlıya karşı aşırı istek gözlenebilir. Bunun mekanizması
                    nedir? Vücutta bu nasıl işler? Yemekten hemen sonra besinler
                    sindirime uğrar. Sindirime uğrayan bu besinler enzimler
                    sayesinde glukoza (şeker) parçalanır. Enerji üretmek için bu
                    glukoz vücudun belirli hücrelere: -Yağ hücreleri -Kas
                    hücreleri -Karaciğer hücrelerine girmek zorundadır. Ama bunu
                    tek başına yapamaz.
                  </p>
                  <a
                    href="https://www.instagram.com/eftalia.diamond.beauty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-primary rounded-0 mr-2"
                  >
                    Daha Fazla Bilgi
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="card rounded-0" >
                <img src={blogImage2} className="card-img-top" alt="Blog 2" />
                <div className="card-body">
                  <h5 className="card-title">CİLT BAKIMI NEDEN LAZIM?</h5>
                  <p className="card-text" style={{height:"300px"}}>
                    Cildimiz vücudumuzun en büyük organı olup birçok katmandan
                    oluşmuştur. Sinirler, salgı bezleri ,saç ve tırnakları
                    barındıran büyük bir sistemin parçasıdır. . En önemli görevi
                    de bu unsurlar arasında bir bariyer görevi görmesidir. En
                    önemli soru: Bu bariyeri nasıl koruruz, cilt bakımı nasıl
                    yapılmalı? Cildimiz, vücudumuzun her yerinde aynı kalınlıkta
                    değildir. Yüzümüzde daha narinken avuç içleri ya da ayak
                    tabanlarımızda daha kalındır. 
                  </p>
                  <a
                    href="https://www.instagram.com/eftalia.diamond.beauty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-primary rounded-0 mr-2"
                  >
                    Daha Fazla Bilgi
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="card rounded-0" >
                <img src={blogImage3} className="card-img-top" alt="Blog 3" />
                <div className="card-body">
                  <h5 className="card-title">Göz Altı Morarması Neden Olur?</h5>
                  <p className="card-text" style={{height:"300px"}}>
                    Aynaya baktığımızda bizleri karşılayan göz çevresindeki koyu
                    halkalar canımızı sıkar. Direkt olarak göz çevresi
                    morarmasının sebebini merak edilir. Bunun ile beraber göz
                    altı morluğuna ne iyi gelir sorusuna da yanıt aranır.
                    Gözaltlarındaki morarmasebepleri nelerdir? Göz altı
                    morarmasının birçok sebebi bulunmaktadır. Genetik ve
                    çevresel sebeplere bağlı olarak göz çevresi morarması
                    oluşabilmektedir. Morarmanın başlıca sebepleri: • Göz
                    çevresindeki cildin narin bir yapıya sahip olması, • Mavi
                    ışıkla uzun süre temas
                  </p>
                  <a
                    href="https://www.instagram.com/eftalia.diamond.beauty/"
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
      </div>
    </Section>
  );
};

export default Blog;
