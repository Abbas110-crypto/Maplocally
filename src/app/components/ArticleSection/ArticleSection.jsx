import React from 'react';
import { Row, Col, Image } from 'antd';
import styles from './ArticleSection.module.css';

const ArticleSection = () => {
  const mainArticle = {
    coverImage: 'https://i.ibb.co/fMKN2sL/image-7.png',
    profileImage: 'https://i.ibb.co/njhtKpt/Ellipse-17.png',
    author: 'Johnny Gaudreau',
    title: "The world's best cities for nightlife right now",
    description:
      'American professional ice hockey winger who played 11 seasons in the National Hockey League (NHL). He was selected by the Calgary Flames in the fourth',
    likes: 542,
    comments: 339,
    timeAgo: '2h ago',
  };

  const sideArticles = [
    {
      coverImage: 'https://i.ibb.co/5M4RXtK/image-8.png',
      profileImage: 'https://i.ibb.co/njhtKpt/Ellipse-17.png',
      title: "The hidden beauty of London's roadworks",
      author: 'Johnny Gaudreau',
      timeAgo: '1h ago',
    },
    {
      coverImage: 'https://i.ibb.co/5M4RXtK/image-8.png',
      profileImage: 'https://i.ibb.co/njhtKpt/Ellipse-17.png',
      title: 'Can popular European cities ever recover from overtourism?',
      author: 'Johnny Gaudreau',
      timeAgo: '1h ago',
    },
    {
      coverImage: 'https://i.ibb.co/5M4RXtK/image-8.png',
      profileImage: 'https://i.ibb.co/njhtKpt/Ellipse-17.png',
      title: 'The 35 best things to do in the UK',
      author: 'Johnny Gaudreau',
      timeAgo: '1h ago',
    },
  ];

  return (
    <div className={styles.mainSection}>
    <Row gutter={16} className={styles.articleComponent}>
      {/* Left Side (Main Article) */}
      <Col xs={24} md={16} className={styles.mainArticle}>
      <h2 className={styles.hd}>Articles</h2>
        <div className={styles.mainImageContainer}>
          <Image src={mainArticle.coverImage} alt="Main article image" preview={false} className={styles.mainImage} />
        </div>
        <div className={styles.mainContent}>
          <div className={styles.profileInfo}>
            <Image src={mainArticle.profileImage} alt="Profile" width={30} height={30} className={styles.profileImage} />
            <span className={styles.author}>{mainArticle.author}</span>
          </div>
          <h3 className={styles.title}>{mainArticle.title}</h3>
          <p className={styles.description}>{mainArticle.description}</p>
          <span className={styles.timeAgo}>{mainArticle.timeAgo}</span>
        </div>
      </Col>

      {/* Right Side (Side Articles) */}
      <Col xs={24} md={8} className={styles.sideArticles}>
        {sideArticles.map((article, index) => (
          <div key={index} className={styles.sideArticle}>
            <Image src={article.coverImage} alt="Side article image" width={60} height={60} className={styles.sideImage} />
            <div className={styles.sideContent}>
              <h4 className={styles.sideTitle}>{article.title}</h4>
              <div className={styles.profileInfo}>
                <Image src={article.profileImage} alt="Profile" width={20} height={20} className={styles.profileImage} />
                <span className={styles.author}>{article.author}</span>
              </div>
              <span className={styles.timeAgo}>{article.timeAgo}</span>
            </div>
          </div>
        ))}
      </Col>
    </Row>
    </div>
  );
};

export default ArticleSection;
