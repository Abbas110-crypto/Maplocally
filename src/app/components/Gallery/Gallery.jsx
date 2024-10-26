// src/components/Gallery.js

import { Row, Col, Button } from 'antd';
import Image from 'next/image';
import styles from './Gallery.module.css'; // For custom CSS

const Gallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Niagara Falls Tour from NYC</h1>
        <p>
          Embark on a full-day guided tour along the stunning south coast of the
          Land of Fire and Ice, starting from either Vik or Reykjavik.
        </p>
      </div>

      <div className={styles.buttonContainer}>
        <Button
          className={styles.directionButton}
          type="primary"
          shape="round"
          size="large"
        >
          Direction
          <img
            src="https://i.ibb.co/MRwNXVD/Vector-1.png"
            alt="arrow"
            className={styles.arrowIcon}
          />
        </Button>
      </div>

      {/* Images grid */}
      <Row className={styles.imageGrid} gutter={[16, 16]}> {/* Keeping a small gutter for minimal spacing */}
        {/* Right Column (previously Left Column) */}
        <Col xs={24} md={8}>
          <Image
            src="https://i.ibb.co/9rxzbLD/image.png"
            alt="right-column-img-1"
            width={280}
            height={200}
            className={styles.imageSmall}
          />
          <Image
            src="https://i.ibb.co/vzBSvF3/image-1.png"
            alt="right-column-img-2"
            width={280}
            height={200}
            className={styles.imageSmall}
            style={{ marginTop: '0px' }}
          />
        </Col>

        {/* Middle Column */}
        <Col xs={24} md={8}>
          <Image
            src="https://i.ibb.co/sHnBNKh/image-2.png"
            alt="middle-column-img-1"
            width={280}
            height={200}
            className={styles.imageSmall}
          />
          <Image
            src="https://i.ibb.co/NttQ8XV/Rectangle-2279.png"
            alt="middle-column-img-2"
            width={280}
            height={200}
            className={styles.imageSmall}
            style={{ marginTop: '0px' }}
          />
        </Col>

        {/* Left Column (Double-size Image) */}
        <Col xs={24} md={8}>
          <Image
            src="https://i.ibb.co/0rx2Fft/image-3.png"
            alt="left-column-img"
            width={280}
            height={400}
            className={styles.imageLarge}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Gallery;
