import React from "react";

import Section from "../../../HOC/Section";
import i1 from "./1.webp";
import i2 from "./2.webp";
import i3 from "./3.webp";
import i4 from "./4.webp";
import i5 from "./5.webp";
import i6 from "./6.webp";
const Service = () => {
  return (
    <Section id="services">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>Çalışma </span>Alanlarımız
          </h3>
          <h6 className="section-subtitle mr-auto ml-auto"></h6>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="service-box d-flex">
                <div class="card">
                  <img
                    src={i2}
                    class="card-img-top"
                    style={{ width: "%100", height: "350px" }}
                    alt="..."
                  ></img>
                  <div class="card-body">
                    <h5
                      className="service-title"
                      style={{ color: "#844c9c", fontWeight: "bold" }}
                    >
                      Lazer Epilasyon
                    </h5>
                    <p class="card-text">
                      Işınların uyarılmasıyla elde edilen ışık demeti olan
                      lazer, tıbbi ve estetik gibi pek çok alanda kullanılır.
                      Kozmetik ve psikososyal bir sorun olan tüylenmenin
                      giderilmesi için kullanılan lazer epilasyon yaklaşık 25
                      senedir uygulanan bir yöntemdir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="service-box d-flex">
                <div class="card">
                  <img
                    src={i1}
                    class="card-img-top"
                    style={{ width: "%100", height: "350px" }}
                    alt="..."
                  ></img>
                  <div class="card-body">
                    <h5
                      className="service-title"
                      style={{ color: "#844c9c", fontWeight: "bold" }}
                    >
                      Cilt Bakımı
                    </h5>
                    <p class="card-text">
                      Cildin ihtiyaçlarına uygun ürünleri düzenli olarak
                      kullanarak elde edilen sonuçlar bütünüdür diyebiliriz.
                      Cilt yapısını tanıyıp eksikleri gidermek adına bakım
                      yapmak oldukça önemlidir. Böylece daha sağlıklı görünen,
                      aydınlık ciltlere sahip olunabilir.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-6">
              <div className="service-box d-flex">
                <div class="card">
                  <img
                    src={i3}
                    class="card-img-top"
                    style={{ width: "%100", height: "350px" }}
                    alt="..."
                  ></img>
                  <div class="card-body">
                    <h5
                      className="service-title"
                      style={{ color: "#844c9c", fontWeight: "bold" }}
                    >
                      Kavitasyon
                    </h5>
                    <p class="card-text">
                      Bölgesel yağlanma ve selülit ile ses dalgaları yardımıyla
                      savaşan, cerrahi olmayan bir yöntemdir. Kavitasyon, yağı
                      sıvılaştırıp hücrelerin duvarlarını tahrip ederek yağların
                      yapısını bozar. Bu dokudaki yağ hücreleri ve açığa çıkan
                      yağ asitleri parçalanarak, lenf yolları sayesinde
                      buralardan uzaklaştırılmaya çalışılır.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="service-box d-flex">
                <div class="card">
                  <img
                    src={i4}
                    class="card-img-top"
                    style={{ width: "%100", height: "350px" }}
                    alt="..."
                  ></img>
                  <div class="card-body">
                    <h5
                      className="service-title"
                      style={{ color: "#844c9c", fontWeight: "bold" }}
                    >
                      G5 Selülit Masajı
                    </h5>
                    <p class="card-text">
                      G5 Masajı, Ritmik bir masaj aleti olan özel cihazı ile
                      uygulanan, hızlı titreşimlerle sıkılaşma sağlayan ve
                      selülit giderici etkisi olan bir uygulamadır. Özellikle
                      selülit tedavisi ve bölgesel zayıflamada kullanılan G5,
                      kaslarda biriken laktik asit ve ödemin atılmasında ve
                      spazm tedavilerinde de oldukça başarılıdır.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-6">
              <div className="service-box d-flex">
                <div class="card">
                  <img
                    src={i5}
                    class="card-img-top"
                    style={{ width: "%100", height: "350px" }}
                    alt="..."
                  ></img>
                  <div class="card-body">
                    <h5
                      className="service-title"
                      style={{ color: "#844c9c", fontWeight: "bold" }}
                    >
                      Kalıcı Makyaj
                    </h5>
                    <p class="card-text">
                      Kalıcı makyaj yani mikropigmentasyon cildin içine pigment
                      yerleştirilerek , geçici olarak görsel eksikliklerin
                      tamamlanması sanatıdır. Kalıcı makyaj bünyesinde; İpek
                      Kirpik, Microblading, Kaş Pudralama, Dudak Renklendirme ve
                      Kirpik Lifting işlemlerini barındırır.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="service-box d-flex">
                <div class="card">
                  <img
                    src={i6}
                    class="card-img-top"
                    style={{ width: "%100", height: "350px" }}
                    alt="..."
                  ></img>
                  <div class="card-body">
                    <h5
                      className="service-title"
                      style={{ color: "#844c9c", fontWeight: "bold" }}
                    >
                      Yosun Peeling
                    </h5>
                    <p class="card-text">
                      Kollajen azalması ve ince çizgilere karşı cilde anti-aging
                      (yaşlanma karşıtı) bir etki sağlar. Akne, leke, cilt tonu
                      eşitsizliği gibi cilt problemlerini giderir. Cilde
                      canlılık verir. Oluşabilecek problemlere karşı cilt
                      bariyerini güçlendirir ve cildi korur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="row">
              <div className="col-md-12 col-lg-12 mb-12">
                <br />
                <ul class="list-group">
                  <li class="list-group-item active" aria-current="true">
                    <b>Aile ve Çift Terapisi</b>
                  </li>
                  <li class="list-group-item">
                    ·        Aile İçi İletişim Sorunları
                  </li>
                  <li class="list-group-item">·        Çatışmalar</li>
                  <li class="list-group-item">
                    ·        Boşanma ve Boşanma Sonrası Süreç
                  </li>
                  <li class="list-group-item">·        Aldatma</li>
                  <li class="list-group-item">
                    ·        İlişki İçindeki Temel İhtiyaçlar
                  </li>
                </ul>
                <br />
                <ul class="list-group">
                  <li class="list-group-item active" aria-current="true">
                    <b>Cinsel Terapiler</b>
                  </li>
                  <li class="list-group-item">·        Vajinismus</li>
                  <li class="list-group-item">·        Disparoni</li>
                  <li class="list-group-item">·        Cinsel İsteksizlik</li>
                </ul>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Service;
