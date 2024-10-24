import { Card, Tag } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from './PostRow.module.css';
import { useRef, useEffect, useState } from 'react';

const PostRow = ({ posts }) => {
  const rowRef = useRef(null); // Reference for the card row
  const [isScrollable, setIsScrollable] = useState(false); // To check if scroll is necessary
  const [scrollPos, setScrollPos] = useState(0); // Current scroll position

  // Function to update scrollable state
  const updateScrollable = () => {
    if (rowRef.current) {
      // Update isScrollable based on scrollWidth and clientWidth comparison
      setIsScrollable(rowRef.current.scrollWidth > rowRef.current.clientWidth);
    }
  };

  useEffect(() => {
    updateScrollable(); // Initial check for scrollable content
    window.addEventListener('resize', updateScrollable); // Update on window resize

    return () => {
      window.removeEventListener('resize', updateScrollable); // Cleanup listener
    };
  }, []);

  // Handle scroll event to track current scroll position
  const handleScroll = () => {
    if (rowRef.current) {
      // Update scroll position to detect when the user reaches the end of scrolling
      setScrollPos(rowRef.current.scrollLeft);
    }
  };

  const scrollLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: -300, behavior: 'smooth' }); // Scroll left by 310 pixels
    }
  };

  const scrollRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: 300, behavior: 'smooth' }); // Scroll right by 310 pixels
    }
  };

  useEffect(() => {
    if (rowRef.current) {
      rowRef.current.addEventListener('scroll', handleScroll); // Add scroll event listener
    }

    return () => {
      if (rowRef.current) {
        rowRef.current.removeEventListener('scroll', handleScroll); // Cleanup listener
      }
    };
  }, []);

  return (
    <div className={styles.cardRowContainer}>
      {isScrollable && scrollPos > 0 && (
        // Show left button only if there is content to scroll left
        <button className={`${styles.arrowButton} ${styles.left}`} onClick={scrollLeft}>
          <LeftOutlined />
        </button>
      )}
      {isScrollable && rowRef.current && scrollPos < (rowRef.current.scrollWidth - rowRef.current.clientWidth) - 5 && (
        // Show right button only if there is content to scroll right
        <button className={`${styles.arrowButton} ${styles.right}`} onClick={scrollRight}>
          <RightOutlined />
        </button>
      )}
      <div className={styles.cardRow} ref={rowRef}>
        {posts.map((post) => (
          <Card key={post.id} className={styles.card}>
            <img src={post.img} alt={post.title} className={styles.image} />
            <h3 className={styles.cardTitle}>{post.title}</h3>
            <div className={styles.tagContainer}>
              {post.tags.map((tag, index) => (
                <Tag key={index} className={styles.tag}>{tag}</Tag>
              ))}
            </div>
            <p className={styles.price}>From US$ {post.price}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PostRow;
