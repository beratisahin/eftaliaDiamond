import React from 'react';

import Link from '../Link/Link';

const footer = () => {
  return (
    <footer className=''>
      <div className='container text-light pt-5'>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-4 mb-5'>
            <div className='footer-title'>
              <h6>Hakkında</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small className='text-muted'>
                Erzurum Eftalia Daimond Beauty Salonu olarak şehrin merkezinde bulunan salonumuzda siz değerli müşterilerimize hizmet vermekteyiz. Epilasyon için İğneli, Buz ve Diode Lazer Epilasyon hizmetimiz bulunmaktadır. Cilt Bakımı için, Hydrafacial, Medikal Cilt Bakımı ve Yosun Peeling hizmetimiz bulunmaktadır. Bölgesel Zayıflama için, G5 Masajı, Selülit Sıkılaştırma, Heykeltıraş ve Kavitasyon hizmetlerimiz mevcuttur. 
                </small>
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
          <div className='col-sm-6 col-md-6 col-lg-2 mb-5'>
            <div className='footer-title'>
              <h6>Bağlantılar</h6>
            </div>
            <div className='footer-content'>
              <ul className='list-group quick-links'>
                <li>
                  <Link target='home' offset={-120}>
                    Anasayfa
                  </Link>
                </li>
                <li>
                  <Link target='about'>Hakkında</Link>
                </li>
                <li>
                  <Link target='services'>Hizmetler</Link>
                </li>
                <li>
                  <Link target='blog'>Blog</Link>
                </li>
                <li>
                  <Link target='contact'>İletişim</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Çalışma Saatleri</h6>
            </div>
            <div className='footer-content'>
            <table class="table table-striped" >
                    
                    <tbody>
                        <tr style={{height:"2px", color:"gray", fontSize:"small"}}>
                            <td>Haftaiçi</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                        <tr style={{height:"2px", color:"gray",fontSize:"small"}}>
                            <td>Cumartesi</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                        <tr style={{height:"2px", color:"gray",fontSize:"small"}}>
                            <td>Pazar</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                      
                    </tbody>
                    
                    </table>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>İletişim Bilgileri</h6>
            </div>
            <div className='footer-content'>
              <p className='text-muted'>
                <small> <span style={{color:"white"}}>Adres : </span> Muratpaşa Mahallesi, Sarıca İş Merkezi, Saray Bosna Cd. No:24, 25100 Yakutiye/Erzurum</small>
              </p>
              <p className='text-muted'>
                <small><span style={{color:"white"}}>Telefon : </span> 0552 184 02 25</small>
              </p>
              <p className='text-muted'>
                <small><span style={{color:"white"}}>E-mail : </span> eftalia.diamond.beauty@gmail.com</small>
              </p>
              <div className='social-media mt-4'>
                <a href='https://www.facebook.com/profile.php?id=100095782531206' target="_blank" className='text-light'>
                  <i className='fab fa-facebook-f mr-4' />
                </a>
                <a href='https://wa.me/+905521840225' target="_blank" className='text-light'>
                  <i className='fab fa-whatsapp mr-4' />
                </a>
                <a href='https://www.instagram.com/eftalia.diamond.beauty/' target="_blank" className='text-light'>
                  <i className='fab fa-instagram mr-4' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer pt-3 pb-3 text-center'>
        <small>© All Right Reserved. Design By Berati Şahin</small>
      </div>
    </footer>
  );
};

export default footer;
