"use client"
import { Card, Row, Col } from 'antd';
import style from './Aboutplace.module.css';

const Aboutplace = ({ title, sections }) => {
  return (
    <Card
      className={style.mainsection}
    >
      <h2 className={style.title}>{title}</h2>
      <Row gutter={[16, 16]}>
        {sections.map((section, index) => (
          <Col span={24} key={index}>
            <p className={style.description}>{section}</p>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default Aboutplace;
