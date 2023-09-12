import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/eft4.jpg';
import Link from '../../UI/Link/Link';

const home = () => {
  return (
    <Section id='home'>
      <div>
        <div
          className='home-content p-5'
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className='intro container text-center text-light'>
            <h1 className='title'>ERZURUM EFTALİA DİAMOND <br/>GÜZELLİK SALONU</h1>
            <h2 className='sub-title mb-4'>
              "Hizmetlerimizle Güzelliğinizde Fark Yaratın" <br/><br/>
              "Bizimle Güzelliğinizi Yeninden Keşfedin"
            </h2>
            <a href="https://wa.me/+905521840225" target="_blank" rel="noopener noreferrer" class='btn btn-success rounded-0 mr-2'>
              Whatsapp
            </a>
            <a href="tel: +905521840225" target="_blank" rel="noopener noreferrer" class='btn btn-primary rounded-0 mr-2'>
              Randevu
            </a>

            
          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;
