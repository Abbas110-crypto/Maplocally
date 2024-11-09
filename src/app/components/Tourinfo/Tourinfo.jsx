"use client";
import { Row, Col, Image } from 'antd';
import styles from './Tourinfo.module.css';

const Tourinfo = () => {
  const details = [
    {
      icon: "https://i.ibb.co/555Rvxy/Group-48101161.png",  // Duration icon URL
      title: "Duration 3-11 hours",
      description: "Check availability",
    },
    {
      icon: "https://i.ibb.co/8z1SrhM/Group-48101165.png",  // Live tour icon URL
      title: "Live Tour",
      description: "French",
    },
    {
      icon: "https://i.ibb.co/VL0rbqd/Group-48101160.png",  // Pickup optional icon URL
      title: "Pickup optional",
      description:
        "Pickup is included at selected hotels and guesthouses as well as authorized bus stops in the central areas of Reykjavik.",
    },
    {
      icon: "https://i.ibb.co/x5LYGrY/Group-48101166.png",  // Small group icon URL
      title: "Small group",
      description: "Limited to 14 participants",
    },
  ];

  return (
    <Row className={styles.tourinfo} gutter={[16, 16]}>
      {details.map((detail, index) => (
        <Col key={index} span={24}>
          <div className={styles.detailRow}>
            <Image
              src={detail.icon}
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
      ))}
    </Row>
  );
};

export default Tourinfo;
