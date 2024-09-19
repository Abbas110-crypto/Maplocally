import React from 'react';
import './Home.css';
import { Input } from 'antd';
import Feedback from '../../SubSection/Feedback/Feedback';
import Faq from '../../SubSection/FAQ\'s/faq';
import MemorablePlace from '../../SubSection/MemorablePlace/MemorablePlace';

const { Search } = Input;


const onSearch = (value, _e, info) => console.log(info?.source, value);

function Home() {
  return (
    <div className='main'>
      <div className='herosection'>
        <h1 className='heading'>Discover dreams in New York's Iconic Spots</h1>
        <p className='paragraph'>like the Empire State Buliding, Ouggenheim Museum, ond Michelin-starred Jean Georges</p>
        <div className='search-bar'>
        <Search placeholder="Search for any destination" onSearch={onSearch} enterButton  className='search'/>
        </div>
        <Feedback />
        <Faq />
        <MemorablePlace />
      </div>
    </div>
  )
}

export default Home;