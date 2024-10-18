'use client';
import React from 'react';
import styles from './Hero.module.css';
import { Input } from 'antd';
const { Search } = Input;


const onSearch = (value, _e, info) => console.log(info?.source, value);

const Hero =() =>{
  return (
    <div className={styles.main}>
      <div className={styles.herosection}>
        <h1 className={styles.heading}>Discover dreams in New York's Iconic Spots</h1>
        <p className={styles.paragraph}>like the Empire State Buliding, Ouggenheim Museum, ond Michelin-starred Jean Georges</p>
        <div className={styles.searchbar}>
        <Search placeholder="Search for any destination" onSearch={onSearch} enterButton  className={styles.search} />
        </div>
      </div>
    </div>
  )
}

export default Hero;