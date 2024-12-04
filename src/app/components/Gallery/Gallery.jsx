"use client"; // Make sure this is at the top
import { Row, Col, Button } from "antd";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import from next/navigation
import styles from "./Gallery.module.css";

const Gallery = ({ id }) => {
  // Receive `id` as a prop
  const [filledHearts, setFilledHearts] = useState([false, false, false, false, false]);
  const router = useRouter(); // Initialize useRouter

  const toggleHeart = (index) => {
    console.log("Heart clicked at index:", index);
    setFilledHearts((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleDirectionClick = () => {
    if (id) {
      router.push(`/Direction?id=${id}`); // Redirect with dynamic ID
    } else {
      console.error("ID is missing. Cannot navigate to direction.");
    }
  };

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
          onClick={handleDirectionClick} // Redirect on click
        >
          Direction
          <img
            src="https://i.ibb.co/1JnH575/Group-1000003434-1.png"
            alt="arrow"
            className={styles.arrowIcon}
          />
        </Button>
      </div>

      <Row className={styles.imageGrid} gutter={[16, 16]}>
        {/* Right Column */}
        <Col className={styles.customCol} xs={24} md={8}>
          <div className={styles.imageWrapper}>
            <Image
              src="https://i.ibb.co/9rxzbLD/image.png"
              alt="right-column-img-1"
              width={280}
              height={180}
              className={styles.imageSmall}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="https://i.ibb.co/vzBSvF3/image-1.png"
              alt="right-column-img-2"
              width={280}
              height={220}
              className={styles.imageSmall}
            />
          </div>
        </Col>

        {/* Middle Column */}
        <Col className={styles.customCol} xs={24} md={8}>
          <div className={styles.imageWrapper}>
            <Image
              src="https://i.ibb.co/sHnBNKh/image-2.png"
              alt="middle-column-img-1"
              width={280}
              height={250}
              className={styles.imageSmall}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="https://i.ibb.co/NttQ8XV/Rectangle-2279.png"
              alt="middle-column-img-2"
              width={280}
              height={150}
              className={styles.imageSmall}
            />
          </div>
        </Col>

        {/* Left Column */}
        <Col className={styles.customCol} xs={24} md={8}>
          <div className={styles.imageWrapper}>
            <Image
              src="https://i.ibb.co/0rx2Fft/image-3.png"
              alt="left-column-img"
              width={280}
              height={400}
              className={styles.imageLarge}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Gallery;
