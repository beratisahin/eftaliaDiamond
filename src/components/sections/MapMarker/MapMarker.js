import React from 'react';
import Section from '../../../HOC/Section';

const mapMarker = () => {
  return (
    <Section id='map'>
      <div>
        <iframe
          title='mapMarker'
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d893.2865536487514!2d35.46096731703522!3d41.14226207981678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408645b74c3ed019%3A0x1d01e76743dd3bb1!2sAyg%C3%BCn%20Psikoloji%20-%20Psikolog%20Hanife%20Ayg%C3%BCn!5e0!3m2!1str!2str!4v1685280892250!5m2!1str!2str'
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
