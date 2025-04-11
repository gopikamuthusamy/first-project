import React from "react";
import "./AboutPage.css";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <div className="about-page">
     
      {/* Breadcrumb Section */}
      <nav className="navigation-links">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/account">My Account</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>

      {/* About Content */}
      <section className="about-content">
        <div className="content-container">
          <h2>Online music Instrument world</h2>
          <p>
          Welcome to Online Musical Instrument World, your ultimate destination for high-quality musical instruments, accessories, and expert guidance. Whether you're a beginner, a passionate musician, or a professional artist, we provide everything you need to bring your music to life.
          </p><h2>Our Story</h2>
          <p>
          ounded with a deep love for music, Online Musical Instrument World was created to bridge the gap between musicians and premium musical gear. We understand that the right instrument can transform melodies into masterpieces, and our mission is to help musicians find their perfect match.
          </p><h2>What we Offers</h2>
          <p>
          Wide Range of Instruments – From guitars, keyboards, and drums to violins, flutes, and DJ equipment, we have it all!
✅ Top Brands – We partner with leading brands to ensure quality and durability.
✅ Expert Guidance – Our team of musicians and experts is here to help you choose the best instrument based on your needs.
✅ Affordable Prices & Deals – Get the best value for your money with competitive prices and exclusive discounts.
✅ Fast & Secure Delivery – Enjoy hassle-free shipping right to your doorstep.
✅ Accessories & Sheet Music – Find strings, picks, tuners, stands, and everything else you need.
          </p>
          <h2>Why Choose Us?</h2>
          <p>
          Why Choose Us? 🎶
🎵 Passion for Music – We are musicians at heart and understand what artists need.
🎵 Customer Satisfaction – Our priority is to provide a seamless shopping experience.
🎵 24/7 Support – Need assistance? Our support team is always ready to help.
🎵 Easy Returns & Warranty – Shop with confidence, knowing you are covered.

At Online Musical Instrument World, we believe that music has the power to inspire, heal, and connect people. Whether you're starting your journey or looking to upgrade, we're here to make your musical dreams a reality.

🎸🎵 Let’s make music together! 🎵🥁

📩 Have Questions? Contact Us Today!
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-item">
          <h3>DEDICATED SERVICE</h3>
          <p>Consult our specialists for help with orders, specifications, or any advice.</p>
        </div>
        <div className="feature-item">
          <h3>FREE RETURNS</h3>
          <p>We stand behind our goods and services and want you to be satisfied.</p>
        </div>
        <div className="feature-item">
          <h3>SHIPPING</h3>
          <p>We ship all over Tamil Nadu, ensuring timely and secure delivery.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
