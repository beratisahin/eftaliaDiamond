import React from 'react';

const topBar = () => {
  return (
    <div className='top-bar pt-1 pb-1 text-light' style={{backgroundColor:"#844c9c"}}>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex pt-2 pb-2'>
            <div className='d-flex align-item-center mr-3'>
              <i className='fas fa-phone-alt mr-2' />
              <small>0552 184 02 25</small>
            </div>
            <div className='d-flex align-item-center'>
              <i className='fas fa-envelope mr-2' />
              <small>eftalia.diamond.beauty@gmail.com</small>
            </div>
          </div>
          <div className='d-flex pt-2 pb-2'>
            <div className='social-media d-flex align-item-center'>
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
  );
};

export default topBar;
