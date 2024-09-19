import React from 'react';
import {Row,Col} from 'antd';
import {RightOutlined } from '@ant-design/icons';
import './MemorablePlace.css';

function MemorablePlace() {
  return (
    <div className='memorableplaces-section'>
      <Row>
        <h2 className='memorable-heading'><span>Memorable Places</span> to visit in New York</h2>
      </Row>
      <Row>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Row>
            <div className='blog'>
              <img 
              src='https://i.ibb.co/qxykY5r/Rectangle-33.png'
              alt='blog-ico'
              className='blog-image'
              />
              <div className='blog-content'>
                <h2 className='blog-heading'>Statue of Liberty</h2>
                <p className='blog-paragraph'>The Statue of Liberty is a must-visit tourist spot in New York City. This iconic symbol of freedom and democracy stands tall on Liberty Island in the middle of the New York Harbor....</p>
                <div className='blog-link'>
                  <h3 className='blog-link-heading'>Explore all activities <RightOutlined /></h3>
                </div>
              </div>
            </div>
          </Row>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Row>
            <div className='blog'>
              <img 
              src='https://i.ibb.co/qxykY5r/Rectangle-33.png'
              alt='blog-ico'
              className='blog-image'
              />
              <div className='blog-content'>
                <h2 className='blog-heading'>Statue of Liberty</h2>
                <p className='blog-paragraph'>The Statue of Liberty is a must-visit tourist spot in New York City. This iconic symbol of freedom and democracy stands tall on Liberty Island in the middle of the New York Harbor....</p>
                <div className='blog-link'>
                  <h3 className='blog-link-heading'>Explore all activities <RightOutlined /></h3>
                </div>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
      
    </div>
  )
}

export default MemorablePlace;