import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
const Footer = () => {
  return (
    <div className={styles.footersection}>
      <img 
      src="https://i.ibb.co/g918t1D/Mask-group.png" 
      alt= "footer"
      className={styles.footerlogo}
      />
      <div className={styles.divider}></div>
      <div className={styles.menuicon}>
        <div className={styles.menumain}>
          <ul className={styles.menu}>
            <li>About Secret NYC</li>
            <li>Advertise with us</li>
            <li>List your event</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.iconmain}>
          <ul className={styles.iconmenu}>
            <li>
              <Image 
              src='https://i.ibb.co/9YpFwRj/instagram-3.png'
              width={32}
              height={32}
              alt='instagram'
              className={styles.icon}
              />
            </li>
            <li>
              <Image 
              src='https://i.ibb.co/CMbHJKW/twitter-1.png'
              width={32}
              height={32}
              alt='Twitter'
              className={styles.icon}
              />
            </li>
            <li>
              <Image 
              src='https://i.ibb.co/bBMTvBN/youtube.png'
              width={32}
              height={32}
              alt='instagram'
              className={styles.icon}
              />
            </li>
            <li>
              <Image 
              src='https://i.ibb.co/DCQdS09/linkedin.png'
              width={32}
              height={32}
              alt='instagram'
              className={styles.icon}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;