import React from 'react';
import {Row,Col} from 'antd';
import Image from 'next/image';
import {RightOutlined } from '@ant-design/icons';
import styles from './MemorablePlace.module.css';

const MemorablePlace = () => {
  return (
    <div className={styles.memorableplacessection}>
      <Row>
        <h2 className={styles.memorableheading}><span>Memorable Places</span> to visit in New York</h2>
      </Row>
      <Row>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Row>
            <div className={styles.blog}>
              <Image 
              src='https://i.ibb.co/qxykY5r/Rectangle-33.png'
              width={200}
              height={200}
              alt='blog-ico'
              className={styles.blogimage}
              />
              <div className={styles.blogcontent}>
                <h2 className={styles.blogheading}>Statue of Liberty</h2>
                <p className={styles.blogparagraph}>The Statue of Liberty is a must-visit tourist spot in New York City. This iconic symbol of freedom and democracy stands tall on Liberty Island in the middle of the New York Harbor....</p>
                <div className={styles.bloglink}>
                  <h3 className={styles.bloglinkheading}>Explore all activities <RightOutlined /></h3>
                </div>
              </div>
            </div>
          </Row>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Row>
            <div className={styles.blog}>
              <Image
              src='https://i.ibb.co/qxykY5r/Rectangle-33.png'
              width={200}
              height={200}
              alt='blog-ico'
              className={styles.blogimage}
              />
              <div className={styles.blogcontent}>
                <h2 className={styles.blogheading}>Statue of Liberty</h2>
                <p className={styles.blogparagraph}>The Statue of Liberty is a must-visit tourist spot in New York City. This iconic symbol of freedom and democracy stands tall on Liberty Island in the middle of the New York Harbor....</p>
                <div className={styles.bloglink}>
                  <h3 className={styles.bloglinkheading}>Explore all activities <RightOutlined /></h3>
                </div>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
      <div className={styles.mainblog3}>
      <Row>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Row>
            <div className={styles.blog}>
              <Image 
              src='https://i.ibb.co/qxykY5r/Rectangle-33.png'
              width={200}
              height={200}
              alt='blog-ico'
              className={styles.blogimage}
              />
              <div className={styles.blogcontent}>
                <h2 className={styles.blogheading}>Statue of Liberty</h2>
                <p className={styles.blogparagraph}>The Statue of Liberty is a must-visit tourist spot in New York City. This iconic symbol of freedom and democracy stands tall on Liberty Island in the middle of the New York Harbor....</p>
                <div className={styles.bloglink}>
                  <h3 className={styles.bloglinkheading}>Explore all activities <RightOutlined /></h3>
                </div>
              </div>
            </div>
          </Row>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Row>
            <div className={styles.blog}>
              <Image
              src='https://i.ibb.co/qxykY5r/Rectangle-33.png'
              width={200}
              height={200}
              alt='blog-ico'
              className={styles.blogimage}
              />
              <div className={styles.blogcontent}>
                <h2 className={styles.blogheading}>Statue of Liberty</h2>
                <p className={styles.blogparagraph}>The Statue of Liberty is a must-visit tourist spot in New York City. This iconic symbol of freedom and democracy stands tall on Liberty Island in the middle of the New York Harbor....</p>
                <div className={styles.bloglink}>
                  <h3 className={styles.bloglinkheading}>Explore all activities <RightOutlined /></h3>
                </div>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
      </div>
      
    </div>
  )
}

export default MemorablePlace;