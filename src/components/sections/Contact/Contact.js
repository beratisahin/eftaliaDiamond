import React from 'react';
import i2 from "./2.webp";
import i4 from "./4.webp";
import i5 from "./5.webp";
import i6 from "./6.webp";
import "./Contact.css";


import Section from '../../../HOC/Section';

const contact = () => {
  return (
    <Section id='contact'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Bizimle </span>İletişime Geçin
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-9 col-lg-7 mr-auto ml-auto'>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control rounded-0'
                    aria-describedby='emailHelp'
                    placeholder='İsminizi giriniz...'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control rounded-0'
                    aria-describedby='emailHelp'
                    placeholder='Emailinizi giriniz...'
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    className='form-control rounded-0'
                    rows='5'
                    placeholder='Mesajınızı giriniz...'
                  />
                </div>
                <div className='form-group text-center'>
                  <button className='btn btn-block btn-primary rounded-0 mr-auto ml-auto'>
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="row">
       
      <div class="col-lg-3s col-md-3 col-sm-12 col-12 p-5">
        <a
          href="tel: +905431373548"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={i2} className="contactIcons" title="Rezervasyon için Tıklayınız"></img>
        </a>
        <p className="contactText">
        <span style={{color:"#844c9c"}}><b>Rezervasyon:</b></span><br/>
          <b>0543 137 35 48</b>
        </p>
      </div>
      
      <div class="col-lg-3s col-md-3 col-sm-12 col-12 p-5">
      <a href="https://wa.me/+905431373548" target="_blank">
          <img src={i4} className="contactIcons" title="WhatsApp için Tıklayınız"></img>
        </a>
        <p className="contactText">
        <span style={{color:"#844c9c"}}><b>WhatsApp:</b></span><br/>
          <b>0543 137 35 48</b>
        </p>
      </div>
      <div class="col-lg-3s col-md-3 col-sm-12 col-12 p-5">
        <a href="https://www.instagram.com/uzmanpsikologhanifeaygun/" target="_blank">
          <img src={i5} className="contactIcons" title="Instagram için Tıklayınız"></img>
        </a>
        <p className="contactText">
        <span style={{color:"#844c9c"}}><b>Instagram:</b></span><br/>
          @uzmanpsikologhanifeaygun
        </p>
      </div>
      <div class="col-lg-3s col-md-3 col-sm-12 col-12 p-5">
        <a
          href="https://tr.linkedin.com/in/hanife-ayg%C3%BCn-098584240"
          target="_blank"
        >
          <img src={i6} className="contactIcons" title="Facebook için Tıklayınız"></img>
        </a>
        <p className="contactText">
        <span style={{color:"#844c9c"}}><b>LinkedIn:</b></span><br/>
          Hanife Aygün
        </p>
      </div>
      </div>
      </div>

     
    </Section>
  );
};

export default contact;
