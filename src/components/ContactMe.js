import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceID = 'service_apadw2n'; // Replace with your EmailJS service ID
    const templateID = 'template_4q9x5tc'; // Replace with your EmailJS template ID
    const userID = 'YX81fstcWoGiBzBxY'; // Your EmailJS public key

    try {
      await emailjs.sendForm(serviceID, templateID, e.target, userID);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send your message. Please try again later.');
      console.error('EmailJS error:', err);
    }
  };

  const handleNewMessage = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contactMe-wrapper" id='contact'>
      <div className="contactMe-bio">
        <h2>Let's Get in Touch</h2>
        <p>
          Hi, I'm Fam, a passionate developer with a love for creating dynamic web applications.
          I specialize in front-end development with a focus on React, and I'm always eager to learn and adapt to new technologies.
        </p>
        <p>
          Feel free to reach out if you have any questions or just want to chat about tech!
        </p>
        <p>
          <i className="fa-solid fa-map"></i> Abnob, Assuit, Egypt
        </p>
        <p>
          <i className="fa-solid fa-phone"></i> +20 1010145972
        </p>
        <p>
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:famashraf9@gmail.com">famashraf9@gmail.com</a>
        </p>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/fam-ashraf-99b41a1b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Famashrafs"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.facebook.com/fam.basm/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
      <div className="contactMe-form-container">
        <h2>Contact Me</h2>
        {submitted ? (
          <div className="contactMe-message">
            <h3>Thank You!</h3>
            <p>Your message has been sent successfully.</p>
            <button onClick={handleNewMessage} className='submit-message-btn'>Write a New Message</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contactMe-form">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
            {error && <p className="error-message">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactMe;
