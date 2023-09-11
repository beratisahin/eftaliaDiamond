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
                Samsun Vezirköprü ilçesinde doğan Uzman Klinik Psikolog Hanife Aygün psikoloji lisans eğitimini Trabzon Avrasya Üniversitesinde bitirdikten sonra İstanbul Üsküdar Üniversitesi Klinik Psikoloji Yüksek Lisans eğitimine başlamıştır.
                </small>
              </p>
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
                            <td>09:00 - 18:00</td>
                        </tr>
                        <tr style={{height:"2px", color:"gray",fontSize:"small"}}>
                            <td>Cumartesi</td>
                            <td>10:00 - 17:00</td>
                        </tr>
                        <tr style={{height:"2px", color:"gray",fontSize:"small"}}>
                            <td>Pazar</td>
                            <td>Kapalı</td>
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
                <small> <span style={{color:"white"}}>Adres : </span> Fazıl Ahmet Paşa, Fazıl Mustafa Caddesi N0:73 D:1, 55900 Vezirköprü/Samsun</small>
              </p>
              <p className='text-muted'>
                <small><span style={{color:"white"}}>Telefon : </span> 0543 137 35 48</small>
              </p>
              <p className='text-muted'>
                <small><span style={{color:"white"}}>E-mail : </span> pskhanifeaygun@gmail.com</small>
              </p>
              <div className='social-media mt-4'>
                <a href='https://www.facebook.com/psikologhanifeaygun/' target="_blank" className='text-light'>
                  <i className='fab fa-facebook-f mr-4' />
                </a>
                <a href='https://tr.linkedin.com/in/hanife-ayg%C3%BCn-098584240' target="_blank" className='text-light'>
                  <i className='fab fa-linkedin mr-4' />
                </a>
                <a href='https://www.instagram.com/uzmanpsikologhanifeaygun/' target="_blank" className='text-light'>
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
