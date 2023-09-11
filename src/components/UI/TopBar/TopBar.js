import React from 'react';

const topBar = () => {
  return (
    <div className='top-bar pt-1 pb-1 text-light'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex pt-2 pb-2'>
            <div className='d-flex align-item-center mr-3'>
              <i className='fas fa-phone-alt mr-2' />
              <small>0543 137 35 48</small>
            </div>
            <div className='d-flex align-item-center'>
              <i className='fas fa-envelope mr-2' />
              <small>pskhanifeaygun@gmail.com</small>
            </div>
          </div>
          <div className='d-flex pt-2 pb-2'>
            <div className='social-media d-flex align-item-center'>
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
  );
};

export default topBar;
