import React from 'react';

const testimonialsData = [
  {
    name: 'John Doe',
    position: 'CEO at Tech Corp',
    image: 'https://via.placeholder.com/150',
    quote: 'This is a wonderful developer who delivers exceptional results. Highly recommended!',
  },
  {
    name: 'Jane Smith',
    position: 'Lead Developer at Software Solutions',
    image: 'https://via.placeholder.com/150',
    quote: 'A brilliant problem-solver and a dedicated professional. It’s a pleasure working with him.',
  },
  {
    name: 'Michael Johnson',
    position: 'Project Manager at Creative Inc',
    image: 'https://via.placeholder.com/150',
    quote: 'This developer has outstanding technical skills and creativity in all aspects of web development.',
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>What People Say</h2>
      <div className="testimonials-wrapper">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <div className="testimonial-content">
              <p className="quote">"{testimonial.quote}"</p>
              <h3>{testimonial.name}</h3>
              <p className="position">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
