// src/components/Review.js

import { Row, Col, Rate } from 'antd';
import Image from 'next/image';
import styles from './Review.module.css';

const Review = () => {
  return (
    <div className={styles.reviewContainer}>
      <Row className={styles.row}>
        {/* Left Section with Reviews */}
        <Col xs={24} md={12} className={styles.leftSection}>
          <div className={styles.customerReviews}>
            <h3 className={styles.heading}>Customer Reviews</h3>
            <div className={styles.overallRating}>
              <span className={styles.label}>Overall rating</span>
              <Rate allowHalf defaultValue={4.2} disabled className={styles.stars} />
              <span className={styles.ratingValue}>4.2/5</span>
              <span className={styles.reviewsCount}>152 Reviews</span>
            </div>
            <div className={styles.reviewSummary}>
              <h4 className={styles.subHeading}>Review Summary</h4>
              {[
                { title: 'Guide', rating: 5 },
                { title: 'Summary', rating: 5 },
                { title: 'Transportation', rating: 4 },
                { title: 'Service', rating: 5 },
                { title: 'Organization', rating: 5 },
              ].map((item, index) => (
                <div key={index} className={styles.summaryItem}>
                  <span>{item.title}</span>
                  <Rate value={item.rating} disabled className={styles.stars} />
                </div>
              ))}
            </div>
          </div>
        </Col>

        {/* Right Section with Plane Image */}
        <Col xs={24} md={12} className={styles.rightSection}>
          <div className={styles.planeImageContainer}>
            <Image
              src="https://i.ibb.co/c2Y8tWC/Asset-1-1.png"
              alt="plane"
              width={100}
              height={100}
              className={styles.planeImage}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Review;
