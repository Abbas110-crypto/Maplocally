"use client"; // Make sure this is at the top
import { Row, Col, Button, Skeleton, Carousel } from "antd"; // Import Carousel
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import from next/navigation
import styles from "./Gallery.module.css";

const Gallery = ({ id, loading }) => {
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

  if (loading) {
    return (
      <div className={styles.container}>
        <Skeleton.Input active style={{ width: 300, height: 40, marginBottom: 16 }} />
        <Skeleton active paragraph={{ rows: 2 }} />
        <Skeleton.Button active style={{ width: 150, height: 45, margin: "16px 0" }} />

        <Row className={styles.imageGrid} gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Skeleton.Image active style={{ width: 280, height: 180, marginBottom: 16 }} />
            <Skeleton.Image active style={{ width: 280, height: 220, marginBottom: 16 }} />
          </Col>
          <Col xs={24} md={8}>
            <Skeleton.Image active style={{ width: 280, height: 250, marginBottom: 16 }} />
            <Skeleton.Image active style={{ width: 280, height: 150, marginBottom: 16 }} />
          </Col>
          <Col xs={24} md={8}>
            <Skeleton.Image active style={{ width: 280, height: 400, marginBottom: 16 }} />
          </Col>
        </Row>
      </div>
    );
  }

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

      {/* Slider for screen sizes less than 950px */}
      <div className={styles.sliderWrapper}>
        <Carousel className={styles.carousel} dots={false}>
          <div>
            <Image
              src="https://i.ibb.co/9rxzbLD/image.png"
              alt="right-column-img-1"
              layout="intrinsic"
              width={1200}
              height={800}
              className={styles.image}
            />
          </div>
          <div>
            <Image
              src="https://i.ibb.co/vzBSvF3/image-1.png"
              alt="right-column-img-2"
              layout="intrinsic"
              width={1200}
              height={800}
              className={styles.image}
            />
          </div>
          <div>
            <Image
              src="https://i.ibb.co/sHnBNKh/image-2.png"
              alt="middle-column-img-1"
              layout="intrinsic"
              width={1200}
              height={800}
              className={styles.image}
            />
          </div>
          <div>
            <Image
              src="https://i.ibb.co/NttQ8XV/Rectangle-2279.png"
              alt="middle-column-img-2"
              layout="intrinsic"
              width={1200}
              height={800}
              className={styles.image}
            />
          </div>
          <div>
            <Image
              src="https://i.ibb.co/0rx2Fft/image-3.png"
              alt="left-column-img"
              layout="intrinsic"
              width={1200}
              height={800}
              className={styles.image}
            />
          </div>
        </Carousel>
      </div>

      {/* Regular Grid for larger screens */}
      <Row className={styles.imageGrid} gutter={[16, 16]}>
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
