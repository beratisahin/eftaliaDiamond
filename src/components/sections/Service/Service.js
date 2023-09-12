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
            <span>Verilen </span>Hizmetler
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
                <li class="list-group-item active" aria-current="true" style={{backgroundColor:"#844c9c"}}>
                    <b>Lazer Epilasyonun Faydaları</b>
                  </li>
                  <li class="list-group-item">·        Kalıcı Sonuçlar: Lazer epilasyon, istenmeyen tüyleri kökten yok ederek kalıcı sonuçlar sağlar. Doğru şekilde uygulandığında, tüyler geri gelmez veya çok daha ince ve seyrek olarak yeniden büyür.</li>
                  <li class="list-group-item">·        Hız ve Verimlilik: Lazer epilasyon, büyük bölgelerde hızlı ve etkili bir şekilde uygulanabilir. Örneğin, bacakları veya sırtı kısa sürede tedavi etmek mümkündür.</li>
                  <li class="list-group-item">·        Daha Az Ağrı ve Rahatsızlık: Diğer epilasyon yöntemlerine kıyasla, lazer epilasyon daha az ağrılıdır. Ayrıca işlem sırasında genellikle rahatsızlık hissi azdır.</li>
                  <li class="list-group-item">·        Uzun Vadeli Maliyet Tasarrufu: Kalıcı sonuçlar elde edildiğinde, uzun vadede tıraş bıçakları veya epilasyon kremleri gibi diğer tüy alma yöntemlerine harcanan maliyeti azaltabilir.</li>
                </ul>
                <br />
                <ul class="list-group">
                  <li class="list-group-item active" aria-current="true" style={{backgroundColor:"#844c9c"}}>
                    <b>Cilt Bakımının Faydaları</b>
                  </li>
                  <li class="list-group-item">·        Cildin parlak ve iyi durumda kalması önemlidir.</li>
                  <li class="list-group-item">·        Cildin nemli ve dengeli kalmasına katkı sağlar.</li>
                  <li class="list-group-item">·        Cildin sıkı ve eşit tonda kalmasına destek olur</li>
                  <li class="list-group-item">·        Akne ve toksinlerin neden olabileceği sorunları en aza indirir.</li>
                </ul>
                <br />
                <ul class="list-group">
                <li class="list-group-item active" aria-current="true" style={{backgroundColor:"#844c9c"}}>
                    <b>Kavitasyonun Faydaları</b>
                  </li>
                  <li class="list-group-item">·        Yağ Kaybı: Kavitasyon, yağ hücrelerinin zarlarını titreterek yağların serbest hale gelmesine ve vücuttan atılmasına yardımcı olur. </li>
                  <li class="list-group-item">·        Ses Dalgaları ile Çalışır: Kavitasyon işlemi için yüksek yoğunluklu ses dalgaları kullanılır, bu nedenle cerrahi müdahale veya iğne enjeksiyonları gibi invazif prosedürlerin risklerini ortadan kaldırır.</li>
                  <li class="list-group-item">·        Vücut Kontürünü İyileştirir: Kavitasyon, istenmeyen yağ birikintilerinin bulunduğu bölgelerde vücut kontürünü düzeltebilir. Özellikle karın, kalça, bacak ve sırt bölgelerinde kullanılan popüler bir teknolojidir.</li>
                  <li class="list-group-item">·        Kolay Uygulama: Kavitasyon işlemi non-invazif olduğu için ağrısız ve rahattır. İşlem sırasında anestezi veya dikiş gerektirmez.</li>
                </ul>
                <br />
                <ul class="list-group">
                  <li class="list-group-item active" aria-current="true" style={{backgroundColor:"#844c9c"}}>
                    <b>G5 Selülit Masajının Faydaları</b>
                  </li>
                  <li class="list-group-item">·        Selülit Görünümünü Azaltır: G5 Selülit Masajı, selülit olarak bilinen cilt yüzeyinin "portakal kabuğu" görünümünü azaltmada etkili olabilir.</li>
                  <li class="list-group-item">·        Sıkılaştırıcı Etki: G5 masajı cildin altındaki kolajen üretimini teşvik edebilir. Bu, cilt dokusunun sıkılaşmasına ve daha genç bir görünüm kazanmasına yardımcı olabilir.</li>
                  <li class="list-group-item">·        Yağ Kaybını Destekler: G5 masajı, yağ hücrelerinin içerisindeki yağları serbest bırakabilir ve lenfatik drenajı uyararak vücuttan atılmasına yardımcı olabilir. Bu, yağ kaybını destekleyebilir.</li>
                  <li class="list-group-item">·       Dolaşımı İyileştirir: G5 masajı, kan dolaşımını artırır. İyileşmiş kan dolaşımı, dokulara daha fazla oksijen ve besin maddesi taşır ve toksinlerin daha etkili bir şekilde atılmasına yardımcı olabilir.</li>
                </ul>
                <br />
                <ul class="list-group">
                <li class="list-group-item active" aria-current="true" style={{backgroundColor:"#844c9c"}}>
                    <b>Kalıcı Makyajın Faydaları</b>
                  </li>
                  <li class="list-group-item">·        Cilt İçin Daha Az Kimyasal Kullanımı: Kalıcı makyaj, günlük makyaj ürünlerinin kullanımını azaltır. Bu, cildinizin daha az kimyasala maruz kalmasını sağlar.</li>
                  <li class="list-group-item">·        Kusursuz Dudak Renkleri: Kalıcı makyaj, dudaklara doğal ve kusursuz bir renk verir. Dudak kontürünü belirginleştirir ve dudaklara hacim katar.</li>
                  <li class="list-group-item">·        Saatlerce Makyaj Yapma Zamanından Tasarruf: Kalıcı makyaj, her gün saatlerce makyaj yapma ihtiyacını ortadan kaldırır. Sabahları daha fazla uyumak veya hazırlık süresini azaltmak için zaman kazandırabilir.</li>
                  <li class="list-group-item">·        Kaş ve Göz Hatlarını Düzeltebilir: Kalıcı makyaj, seyrek kaşları doldurabilir, dengesiz veya kayıp kaşları düzeltebilir ve göz hatlarını belirginleştirebilir. Bu, yüz simetrisini iyileştirir.</li>
                </ul>
                <br />
                <ul class="list-group">
                  <li class="list-group-item active" aria-current="true" style={{backgroundColor:"#844c9c"}}>
                    <b>Yosun Peelingin Faydaları</b>
                  </li>
                  <li class="list-group-item">·        Uygulandıktan sonra cildi katman katman soyar.</li>
                  <li class="list-group-item">·        Kararmış bölgelerin rengi açılır, cilt pigmentasyonu sağlanır ve cilt tonu eşitlenir.</li>
                  <li class="list-group-item">·        Kırışıklık ve elastikiyet gibi yaşlanmadan kaynaklı cilt sorunları en aza indirilir.</li>
                  <li class="list-group-item">·        Akne, leke, skar, yara vb. izler yok olur.</li>
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
