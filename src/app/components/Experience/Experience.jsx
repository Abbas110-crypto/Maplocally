"use client";
import { Row, Col } from "antd";
import style from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>The Original experience</h2>

      {/* Highlight Section */}
      <Row className={style.section}>
        <Col span={4} className={style.label}>
          Highlight
        </Col>
        <Col span={20}>
          <ul className={style.list}>
            <li>See the light display of the Aurora Borealis</li>
            <li>Escape the bright lights of Reykjavik for better views of the Northern Lights</li>
            <li>Learn more about how and why the dancing lights occur</li>
            <li>Free entrance to the Aurora Museum</li>
          </ul>
        </Col>
      </Row>

      {/* Full description Section */}
      <Row className={style.section}>
        <Col span={4} className={style.label}>
          Full description
        </Col>
        <Col span={20}>
          <p className={style.para}>
            Embark on an evening trip to see the Aurora Borealis. Hear fascinating facts about them from your guides, visit the Aurora Museum, and search to see the lights firsthand.
            <br />
            Depart the bright lights of Reykjavik city center to see the dancing lights of the Auro
            <span className={style.link}> Free more</span>
          </p>
        </Col>
      </Row>

      {/* Includes Section */}
      <Row className={style.section}>
        <Col span={4} className={style.label}>
          Includes
        </Col>
        <Col span={20}>
          <ul className={`${style.list} ${style.includesList}`}>
            <li>Evening trip to see the Aurora Borealis</li>
            <li>Transportation</li>
            <li>Professional guide</li>
            <li>Stops to take photos</li>
            <li>Entry to the Aurora Museum (on the day of the tour only)</li>
            <li>Open ticket for 3 years if the Northern Lights do not appear</li>
          </ul>
        </Col>
      </Row>

      {/* Meeting point Section */}
      <Row className={style.section}>
        <Col span={4} className={style.label}>
          Meeting point
        </Col>
        <Col span={20}>
          <p className={style.para}>
            Please meet your guide at Bus Stop 12.
            <br />
            <span className={style.link}>Google Maps</span>
          </p>
        </Col>
      </Row>

      {/* Important information Section */}
      <Row className={`${style.section} ${style.sectionImportantInfo}`}>
        <Col span={4} className={style.label}>
          Important information
        </Col>
        <Col span={20}>
          <Row>
            <Col span={20} className={style.infosec}>
              <h4 className={style.subtitle}>What to bring</h4>
              <ul className={style.list}>
                <li>Comfortable shoes</li>
                <li>Warm clothing</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Experience;
