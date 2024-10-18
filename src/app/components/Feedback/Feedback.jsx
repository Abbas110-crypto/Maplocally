import React from 'react';
import styles from'./Feedback.module.css'; // We will define CSS in this file

const testimonials = [
  {
    name: "Ralph Gibson",
    location: "London, England",
    review: "I've been using map locally for years now...",
    desc:"It's very convenient to have this all around pass! It was our first time visiting New York and it is a must have to get this pass as it will save you time, money, and effort. Using this pass, my mom and I were able to visit The Rockefeller Center....",
    rating: 5,
  },
  {
    name: "Genvis",
    location: "France",
    review: "Ive been using map locally for years now...",
    desc:"It's very convenient to have this all around pass! It was our first time visiting New York and it is a must have to get this pass as it will save you time, money, and effort. Using this pass, my mom and I were able to visit The Rockefeller Center....",
    rating: 5,
  },
  {
    name: "Ariga",
    location: "Mexico, USA",
    review: "Ive been using map locally for years now...",
    desc:"Its very convenient to have this all around pass! It was our first time visiting New York and it is a must have to get this pass as it will save you time, money, and effort. Using this pass, my mom and I were able to visit The Rockefeller Center....",
    rating: 5,
  },
  {
    name: "Abbas",
    location: "Mexico, USA",
    review: "Ive been using map locally for years now...",
    desc:"Its very convenient to have this all around pass! It was our first time visiting New York and it is a must have to get this pass as it will save you time, money, and effort. Using this pass, my mom and I were able to visit The Rockefeller Center....",
    rating: 5,
  },
];

const Feedback = () => {
  return (
    <div className={styles.testimonialssection}>
      <h2>Why People <span className={styles.highlight}>Love</span> New York</h2>
      <div className={styles.testimonialscontainer}>
        {testimonials.map((testimonial, index) => (
          <div className={styles.testimonialcard} key={index}>
            <div className={styles.testimonialheader}>
              <img 
                src={`https://i.pravatar.cc/50?img=${index + 1}`} 
                alt={`${testimonial.name}'s profile`} 
                className="testimonial-avatar" 
              />
              <div className={styles.testimonialcontent}>
                <h4 className={styles.testimonialname}>{testimonial.name}</h4>
                <p className={styles.testimoniallocation}>{testimonial.location}</p>
              </div>
            </div>
            <p className={styles.testimonialreview}>{testimonial.review}</p>
            <p className={styles.testimonialdesc}>{testimonial.desc}</p>
            <div className={styles.testimonialrating}>
              {"⭐".repeat(testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
