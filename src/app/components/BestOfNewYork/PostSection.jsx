import React, { useRef } from 'react';
import styles from './PostSection.module.css'; // Import the CSS module
import PostRow from './PostRow'
const PostSection = () => {
  const posts1 = [
    { id: 1, title: "Niagara Falls Tour", category: "tour", price: 94, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Nature', 'Waterfall'] , description: "Attraction passes. NewYork"},
    { id: 2, title: "Broadway Show", category: "broadway", price: 120, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Theater', 'Musical'], description: "Attraction passes. NewYork" },
    { id: 3, title: "NYC Park Tour", category: "park", price: 100, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Outdoor', 'Walking'], description: "Attraction passes. NewYork" },
    { id: 4, title: "Central Park Picnic", category: "park", price: 75, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Outdoor', 'Picnic'] , description: "Attraction passes. NewYork" },
    { id: 5, title: "Central Park Picnic", category: "park", price: 75, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Outdoor', 'Picnic'] , description: "Attraction passes. NewYork" },
  
      
  ];

  const posts2 = [
    { id: 1, title: "Niagara Falls Tour", category: "tour", price: 94, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Nature', 'Waterfall'] , description: "Attraction passes. NewYork"},
    { id: 2, title: "Broadway Show", category: "broadway", price: 120, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Theater', 'Musical'], description: "Attraction passes. NewYork" },
    { id: 3, title: "NYC Park Tour", category: "park", price: 100, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Outdoor', 'Walking'], description: "Attraction passes. NewYork" },
    { id: 4, title: "Central Park Picnic", category: "park", price: 75, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Outdoor', 'Picnic'] , description: "Attraction passes. NewYork" },
    ];

  const posts3 = [
    { id: 1, title: "Niagara Falls Tour", category: "tour", price: 94, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Nature', 'Waterfall'] , description: "Attraction passes. NewYork"},
    { id: 2, title: "Broadway Show", category: "broadway", price: 120, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Theater', 'Musical'], description: "Attraction passes. NewYork" },
  
  ];


  return (
    <div className={styles.postSection}>
      <h2 className={styles.title}>The Best of New York&apos;s</h2>
      <PostRow posts={posts1} />
      <PostRow posts={posts2} />
      <PostRow posts={posts3} /> {/* Add more PostRow components as needed */}
    </div>
  );
};

export default PostSection;
