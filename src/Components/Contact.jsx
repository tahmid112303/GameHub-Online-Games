import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <section class="contact">
  <h1 className='mb-4'>Contact Us</h1>

  <div class="contact-container">

    <div class="contact-info">
      <h3>Get in Touch</h3>
      <p>📧 <a className='link link-hover'>support@gamezonehub.com</a></p>
      <p>🐦 <a className='link link-hover'>gamezonehub</a></p>
      <p>📸 <a className='link link-hover'>gamezonehub</a></p>
      <p>⏱ Reply within 24–48 hours</p>
    </div>

    <form class="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message"></textarea>
      <button>Send Message</button>
    </form>

  </div>
</section>

        </div>
    );
};

export default Contact;