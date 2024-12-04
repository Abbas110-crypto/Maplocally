"use client";
import { Row, Col, Image } from 'antd';
import styles from './Tourinfo.module.css';

const Tourinfo = ({ details }) => {
  return (
    <Row className={styles.tourinfo} gutter={[16, 16]}>
      {details?.length > 0 ? (
        details.map((detail, index) => (
          <Col key={index} span={24}>
            <div className={styles.detailRow}>
              <Image
                src={detail.image}
                alt={detail.title}
                width={30}
                height={30}
                preview={false}
                className={styles.icon}
              />
              <div className={styles.textContainer}>
                <h4 className={styles.title}>{detail.title}</h4>
                <p className={styles.description}>{detail.description}</p>
              </div>
            </div>
          </Col>
        ))
      ) : (
        <p>No details available.</p>
      )}
    </Row>
  );
};

export default Tourinfo;
