import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-section'>
      <img 
      src="https://i.ibb.co/g918t1D/Mask-group.png" 
      alt= "footer"
      className='footer-logo'
      />
      <div className='divider'></div>
      <div className='menu-icon'>
        <div className='menu-main'>
          <ul className='menu'>
            <li>About Secret NYC</li>
            <li>Advertise with us</li>
            <li>List your event</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='icon-main'>
          <ul className='icon-menu'>
            <li>
              <img 
              src='https://i.ibb.co/9YpFwRj/instagram-3.png'
              alt='instagram'
              className='icon'
              />
            </li>
            <li>
              <img 
              src='https://i.ibb.co/CMbHJKW/twitter-1.png'
              alt='Twitter'
              className='icon'
              />
            </li>
            <li>
              <img 
              src='https://i.ibb.co/bBMTvBN/youtube.png'
              alt='instagram'
              className='icon'
              />
            </li>
            <li>
              <img 
              src='https://i.ibb.co/DCQdS09/linkedin.png'
              alt='instagram'
              className='icon'
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;