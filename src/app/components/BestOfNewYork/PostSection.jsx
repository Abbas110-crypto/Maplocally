import React, { useRef } from 'react';
import styles from './PostSection.module.css'; // Import the CSS module
import PostRow from './PostRow'
const PostSection = () => {
  const posts1 = [
    { id: 1, title: "Niagara Falls Tour", category: "tour", price: 94, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Nature', 'Waterfall'] },
    { id: 2, title: "Broadway Show", category: "broadway", price: 120, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Theater', 'Musical'] },
    { id: 3, title: "NYC Park Tour", category: "park", price: 100, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Outdoor', 'Walking'] },
    { id: 4, title: "Central Park Picnic", category: "park", price: 75, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Outdoor', 'Picnic'] },
    { id: 5, title: "Central Park Picnic", category: "park", price: 75, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Outdoor', 'Picnic'] },
    { id: 6, title: "Central Park Picnic", category: "park", price: 75, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Outdoor', 'Picnic'] },
  ];

  const posts2 = [
    { id: 5, title: "Statue of Liberty Tour", category: "tour", price: 85, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Historic', 'Landmark'] },
    { id: 6, title: "Metropolitan Museum of Art", category: "museum", price: 50, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Art', 'Culture'] },
    { id: 7, title: "Brooklyn Bridge Walk", category: "park", price: 20, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Outdoor', 'Walking'] },
    { id: 8, title: "Times Square Visit", category: "sightseeing", price: 0, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Sightseeing', 'Nightlife'] },
    { id: 8, title: "Times Square Visit", category: "sightseeing", price: 0, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Sightseeing', 'Nightlife'] },
  ];

  const posts3 = [
    { id: 9, title: "Empire State Building", category: "sightseeing", price: 38, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Historic', 'Landmark'] },
    { id: 10, title: "Brooklyn Heights", category: "park", price: 10, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Outdoor', 'Scenic'] },
    // Add more posts as needed
  ];


  return (
    <div className={styles.postSection}>
      <h2 className={styles.title}>The Best of New York's</h2>
      <PostRow posts={posts1} />
      <PostRow posts={posts2} />
      <PostRow posts={posts3} /> {/* Add more PostRow components as needed */}
    </div>
  );
};

export default PostSection;
