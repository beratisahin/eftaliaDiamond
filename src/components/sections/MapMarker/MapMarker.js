import React from 'react';
import Section from '../../../HOC/Section';

const mapMarker = () => {
  return (
    <Section id='map'>
      <div>
        <iframe
          title='mapMarker'
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d227.48607698207957!2d41.268733941143715!3d39.903894181245526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9456ca30ef20cd3%3A0x2cead6412d389a0b!2sErzurum%20Eftalia%20Diamond%20Beauty!5e0!3m2!1str!2str!4v1694465507537!5m2!1str!2str'
          width='100%'
          height='450'
          frameBorder='0'
          style={{ border: 0, marginBottom: '-7px' }}
          allowFullScreen
        />
      </div>
    </Section>
  );
};

export default mapMarker;
