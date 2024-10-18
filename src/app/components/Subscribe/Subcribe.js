import React from 'react';
import {Row,Col} from 'antd';
import './Subcribe.css';


const Subcribe= ()=> {
  return (
    <div className='main-section'>
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <img src='https://i.ibb.co/nmbFYpp/OBJECTS.png' alt='map-icon' className='map-icon' />
            <img src='https://i.ibb.co/kqqSwjp/pexels-koolshooters-8531232-1.png' alt='subimg' className='blog-image' />
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className='container'>
            <h3 className='subscribe-heading'>Your travel journey starts here</h3>
            <img
             src='https://i.ibb.co/gvqDdTG/Group-2.png' 
             alt='aeroplan-icon' 
             className='aeroplane-image' />
             <p className='subscribe-paragraph'>Sign up now for travel tips, personalized itineraries, and vacation inspiration
             straight to your inbox.</p>
             </div>
             <img
             src='https://i.ibb.co/BKHhsPR/Layer-2.png' 
             alt='location-icon' 
             className='location-2icon' />
             
            </Col>
        </Row>
    </div>
  )
}

export default Subcribe;