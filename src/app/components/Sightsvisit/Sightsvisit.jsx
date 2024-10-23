"use client"
import React from 'react'
import PostRow from '../PostRow/PostRow';
import styles from './Sightsvisit.module.css'
function Sightsvisit() {
    const posts1 = [
        { id: 1, title: "Niagara Falls Tour", category: "tour", price: 94, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Nature', 'Waterfall'] },
        { id: 2, title: "Broadway Show", category: "broadway", price: 120, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Theater', 'Musical'] },
        { id: 3, title: "NYC Park Tour", category: "park", price: 100, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Outdoor', 'Walking'] },
        { id: 4, title: "Central Park Picnic", category: "park", price: 75, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Outdoor', 'Picnic'] },
        { id: 4, title: "Central Park Picnic", category: "park", price: 75, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Outdoor', 'Picnic'] },
        { id: 4, title: "Central Park Picnic", category: "park", price: 75, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Outdoor', 'Picnic'] },
      ];
    
      const posts2 = [
        { id: 5, title: "Statue of Liberty Tour", category: "tour", price: 85, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Historic', 'Landmark'] },
        { id: 6, title: "Metropolitan Museum of Art", category: "museum", price: 50, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Art', 'Culture'] },
        { id: 7, title: "Brooklyn Bridge Walk", category: "park", price: 20, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Outdoor', 'Walking'] },
        { id: 8, title: "Times Square Visit", category: "sightseeing", price: 0, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Sightseeing', 'Nightlife'] },
        { id: 9, title: "Times Square Visit", category: "sightseeing", price: 0, img: 'https://i.ibb.co/XDTkpvb/images.jpg', tags: ['Sightseeing', 'Nightlife'] },
      
    ];
  return (
    <div className={styles.mainsection}>
      <h2 className={styles.title}>Sights You Can Visit in New York</h2>
      <PostRow posts={posts1} />
      <PostRow posts={posts2} />
    </div>
  )
}

export default Sightsvisit
