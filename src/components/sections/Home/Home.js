import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/aygun5.jpg';
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
            <h1 className='title'>UZMAN KLİNİK PSİKOLOG <br/>HANİFE AYGÜN</h1>
            <h2 className='sub-title mb-4'>
              "Ancak farkında olan insan kendini keşfetme yolculuğuna çıkabilir." <br/> Doğan Cüceloğlu
            </h2>
            <a href="https://wa.me/+905431373548" target="_blank" rel="noopener noreferrer" class='btn btn-success rounded-0 mr-2'>
              Whatsapp
            </a>
            <a href="tel: +905431373548" target="_blank" rel="noopener noreferrer" class='btn btn-primary rounded-0 mr-2'>
              Randevu
            </a>

            
          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;
