"use client";
import { Row, Col } from "antd";
import style from "./Experience.module.css";

// Modify the Experience component to accept dynamic data as props
const Experience = ({  fullDescription, highlights, includes, meetingPoint }) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>The Original experience</h2>

      {/* Highlight Section */}
      <Row className={style.section}>
        <Col span={4} className={style.label}>
          Highlight
        </Col>
        <Col span={20}>
          <ul className={`${style.list} ${style.highlightList}`}>
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
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
            {fullDescription}
            <br />
            <span className={style.link}>Free more</span>
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
            {includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
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
            {meetingPoint}
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
              <ul className={`${style.list} ${style.impList}`}>
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
