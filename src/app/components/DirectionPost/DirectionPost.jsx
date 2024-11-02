"use client";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from './DirectionPost.module.css';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { Row, Col, Tag } from 'antd';

const DirectionPost = ({ posts }) => {
    const rowRef = useRef(null);
    const [isScrollable, setIsScrollable] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);

    const updateScrollable = () => {
        if (rowRef.current) {
            setIsScrollable(rowRef.current.scrollWidth > rowRef.current.clientWidth);
        }
    };

    useEffect(() => {
        updateScrollable();
        
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', updateScrollable);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', updateScrollable);
            }
        };
    }, []);

    const handleScroll = () => {
        if (rowRef.current) {
            setScrollPos(rowRef.current.scrollLeft);
        }
    };

    const scrollLeft = () => {
        if (rowRef.current) {
            rowRef.current.scrollBy({ left: -390, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (rowRef.current) {
            rowRef.current.scrollBy({ left: 390, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (rowRef.current) {
            rowRef.current.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (rowRef.current) {
                rowRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className={styles.cardRowContainer}>
            {isScrollable && scrollPos > 0 && (
                <button className={`${styles.arrowButton} ${styles.left}`} onClick={scrollLeft}>
                    <LeftOutlined />
                </button>
            )}
            {isScrollable && rowRef.current && scrollPos < (rowRef.current.scrollWidth - rowRef.current.clientWidth) - 5 && (
                <button className={`${styles.arrowButton} ${styles.right}`} onClick={scrollRight}>
                    <RightOutlined />
                </button>
            )}
            <div className={styles.cardRow} ref={rowRef}>
                {posts.map((post) => (
                    <div key={post.id}>
                        <Link href={`/PostDetail?id=${post.id}`} className={styles.link} passHref>
                            <div className={styles.customCard}>
                                <img src={post.img} alt={post.title} className={styles.cardImage} />
                                <div className={styles.cardContent}>
                                    <p className={styles.cardDescription}>{post.description}</p>
                                    <h3 className={styles.cardTitle}>{post.title}</h3>
                                    <div className={styles.tagContainer}>
                                        {post.tags.map((tag, index) => (
                                            <Tag key={index} className={styles.tag}>{tag}</Tag>
                                        ))}
                                    </div>
                                    <p className={styles.price}>From US$ {post.price}</p>
                                    {post.goldentag && (
                                        <Tag className={styles.guranteeTag}>{post.goldentag}</Tag>
                                    )}
                                </div>
                            </div>
                        </Link>
                        <p className={styles.additionalText}>{post.paragraph}</p>
                        <button className={styles.openMapButton}>Open in Google Maps</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DirectionPost;
