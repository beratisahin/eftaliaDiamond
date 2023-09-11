import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/aygun4.webp';

const Facts = () => {
  return (
    <Section id='facts'>
      <div
        className='facts-container'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='container pt-5 pb-4'>
          <div className='row'>
            <div className='col-12 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-smile' />
              </div>
              <h4 className='facts-counter text-light'>Uzman Klinik Psikolog Hanife Aygün</h4>
              <h5 className='facts-title text-light'>Vezirköprü Aygün Psikoloji</h5>
            </div>
            
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Facts;
