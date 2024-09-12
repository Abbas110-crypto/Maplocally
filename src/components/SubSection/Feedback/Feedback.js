import React from 'react';
import './Feedback.css'; // We will define CSS in this file

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
    review: "I’ve been using map locally for years now...",
    desc:"It's very convenient to have this all around pass! It was our first time visiting New York and it is a must have to get this pass as it will save you time, money, and effort. Using this pass, my mom and I were able to visit The Rockefeller Center....",
    rating: 5,
  },
  {
    name: "Ariga",
    location: "Mexico, USA",
    review: "I've been using map locally for years now...",
    desc:"It's very convenient to have this all around pass! It was our first time visiting New York and it is a must have to get this pass as it will save you time, money, and effort. Using this pass, my mom and I were able to visit The Rockefeller Center....",
    rating: 5,
  },
  {
    name: "Abbas",
    location: "Mexico, USA",
    review: "I've been using map locally for years now...",
    desc:"It's very convenient to have this all around pass! It was our first time visiting New York and it is a must have to get this pass as it will save you time, money, and effort. Using this pass, my mom and I were able to visit The Rockefeller Center....",
    rating: 5,
  },
];

const Feedback = () => {
  return (
    <div className="testimonials-section">
      <h2>Why People <span className="highlight">Love</span> New York</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-header">
              <img 
                src={`https://i.pravatar.cc/50?img=${index + 1}`} 
                alt={`${testimonial.name}'s profile`} 
                className="testimonial-avatar" 
              />
              <div className='testimonial-content'>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.location}</p>
              </div>
            </div>
            <p className="testimonial-review">{testimonial.review}</p>
            <p className="testimonial-desc">{testimonial.desc}</p>
            <div className="testimonial-rating">
              {"⭐".repeat(testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
