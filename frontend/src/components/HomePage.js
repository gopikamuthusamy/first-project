import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import "./Navbar.css"
import Navbar from './Navbar';
import AboutPage from "./AboutPage";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import productImage from "../assets/backimage.jpeg";
import whatsappIcon from "../assets/whatsapp.jpeg";
import violin from "../assets/violin.jpeg";
import guitar from "../assets/guitar.jpeg";
import trumpet from "../assets/trumpet.jpeg";
import drums from "../assets/drums.jpeg";
import piano from "../assets/piano.jpeg";
import keyboard from "../assets/keyboard.jpeg";
import sitar from "../assets/sitar.jpeg";
import flute from "../assets/flute.jpeg";
import truck from "../assets/delivery.png";
import coin from "../assets/coin.png";
import support from "../assets/24-hours.png";
import drumset from "../assets/drumset.jpeg";
import violinset from "../assets/violinset.jpeg";
import guitarset from "../assets/guitarset.jpeg";
import appleLogo from "../assets/apple.png";
import samsungLogo from "../assets/samsung.png";
import miLogo from "../assets/xiomi.png";
import realmeLogo from "../assets/realme.png";
import oneplusLogo from "../assets/oneplus.png";
import oppo from "../assets/oppo.png";
import vivo from "../assets/vivo.png";
import nothing from "../assets/nothing.png";
//import nothingImage from "../assets/redmi13c 5G.jpeg";
// import apple from "../assets/apple iphone 15.jpeg";
// import vivoph from "../assets/vivo t3 lite 5g.jpeg";
// import apple2 from "../assets/apple iphone 15 256GB.jpeg";
// import apple3 from "../assets/starlight.jpg";
// import applepink from "../assets/apple iphone 16 .jpeg";
// import vivot from "../assets/vivo t3 lite 5g 6GB.jpeg";
// import apple15 from "../assets/apple iphone 15 256GB.jpeg";
// import apple13 from "../assets/Apple iphone 13 blue.jpeg";

import saleGuitar from "../assets/saleg1.jpeg"; // Ensure filename is correct
import electronicDrum from "../assets/electornic-Drum.jpeg";
import midiKeyboard from "../assets/midiKeyboard.jpeg";
import microphone from "../assets/microphone.jpeg";
import snareDrum from "../assets/snare-drum.jpeg";
import soloStudio from "../assets/solo-studio.jpeg";
import gLefthand from "../assets/g-lefthand.jpeg";
import salep from "../assets/salep.jpeg";
import salet from "../assets/salet.jpeg";

import { users } from "./data.js"; // Correct import
import { bestSellingProducts } from "./data"; // Fix typo in bestSellingProducts

const HomePage = () => {
  const [wishlist, setWishlist] = useState([]); // State to manage the wishlist
  const [likedProducts, setLikedProducts] = useState({}); // State to store liked products
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [modalMessage, setModalMessage] = useState(""); // State to store the message for the modal
  const bestSellingProducts = [
    { id: 1, name: "Guitar", image: saleGuitar, price: 13499, oldPrice: 13999 },
    { id: 2, name: "Electronic Drum", image:electronicDrum, price: 56168, oldPrice: 69900 },
    { id: 3, name: "Midi keyboard", image: midiKeyboard, price: 11499, oldPrice: 15499 },
    { id: 4, name: "Microphone", image: microphone, price: 65837, oldPrice: 79900 },
    { id: 5, name: "Snare Drum", image: snareDrum, price: 41146, oldPrice: 59000 },
    { id: 6, name: "Solo Studio", image: soloStudio, price: 68365, oldPrice: 79900 },
    { id: 7, name: "Guitar Lefthand", image: gLefthand, price: 11499, oldPrice: 15499 },
    { id: 8, name: "Piano", image:salep, price: 75696, oldPrice: 89900 },
    { id: 9, name: "Trumpet", image:salet, price: 42246, oldPrice: 59600 },
  ];
  // Handle adding product to the wishlist
  const addToWishlist = (product) => {
    // Retrieve the current wishlist from localStorage
    let savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    
    if (savedWishlist.find((item) => item.id === product.id)) {
      setModalMessage(`${product.name} is already in your wishlist.`);
    } else {
      savedWishlist.push(product); // Add the product to the wishlist
      localStorage.setItem("wishlist", JSON.stringify(savedWishlist)); // Save the updated wishlist to localStorage
      setModalMessage(`${product.name} added to your wishlist.`);
    }
    setIsModalOpen(true);
  };

  // Handle liking a product
  const handleLikeClick = (productId) => {
    setLikedProducts((prevLikedProducts) => ({
      ...prevLikedProducts,
      [productId]: !prevLikedProducts[productId],
    }));
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Slider Controls
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = bestSellingProducts.length;

  const moveToPreviousSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const moveToNextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;700&display=swap');
          body {
            font-family: 'Poppins', 'Roboto', sans-serif;
          }
        `}
      </style>
      <div>
      <Navbar />
      
    </div>
      <div className="homepage">
        {/* Navigation links */}
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

        {/* Categories Section */}
        <section className="categories-section">
          <h2 className="categories-title">Explore Our Categories</h2>
          <div className="categories-container">
            <Link to="/smartphones" className="category-item"><img src={violin} alt="Violin" /><p>Violin</p></Link>
            <Link to="/smartwatches" className="category-item"><img src={guitar} alt="Guitar" /><p>Guitar</p></Link>
            <Link to="/laptops" className="category-item"><img src={trumpet} alt="Trumpet" /><p>Trumpet</p></Link>
            <Link to="/bluetooth" className="category-item"><img src={drums} alt="Drums" /><p>Drums</p></Link>
            <Link to="/audio-store" className="category-item"><img src={piano} alt="Piano" /><p>Piano</p></Link>
            <Link to="/tablets" className="category-item"><img src={keyboard} alt="Keyboard" /><p>Keyboard</p></Link>
            <Link to="/personal-care" className="category-item"><img src={sitar} alt="Sitar" /><p>Sitar</p></Link>
            <Link to="/home-appliances" className="category-item"><img src={flute} alt="Flute" /><p>Flute</p></Link>
          </div>
        </section>

             {/* Hero Section */}
        <section className="hero">
          <div className="hero-container">
            <img src={productImage} alt="MI Phones" className="product-image" />
            {/* <div className="hero-overlay">
              <h2>MI Phones at unbelievable Discounts!</h2>
              <h1>MI MOBILES</h1>
              <h3 className="discount">30% OFF</h3>
              <p>Starting at <span className="price">Rs. 6000.00</span></p>
              <button className="shop-now-btn">Shop Now!</button>
            </div> */}
          </div>
        </section>
           {/* Features Section */}
        <section className="features-section">
          <div className="features-container">
            <div className="feature-item">
              <img
                src={truck}
                alt="Free Shipping"
                className="feature-icon"
              />
              <div>
                <h3>FREE SHIPPING & RETURN</h3>
                <p>Free shipping on all orders over Rs.10,000.00</p>
              </div>
            </div>
            <div className="feature-item">
              <img
                src={coin}
                alt="Money Back Guarantee"
                className="feature-icon"
              />
              <div>
                <h3>MONEY BACK GUARANTEE</h3>
                <p>100% money back guarantee</p>
              </div>
            </div>
            <div className="feature-item">
              <img
                src={support}
                alt="Online Support"
                className="feature-icon"
              />
              <div>
                <h3>ONLINE SUPPORT 24/7</h3>
                <p>WhatsApp & Call</p>
              </div>
            </div>
          </div>
        </section>
       

        {/* Discount Section */}
        <section className="discount-section">
          <div className="discount-container">
            <div className="discount-item"><img src={drumset} alt="drumset" /><div className="discount-info"><p>Save Up To</p><h3>Rs.5000</h3><p>on DRUMSET</p></div></div>
            <div className="discount-item"><img src={violinset} alt="violinset" /><div className="discount-info"><p>Save Up To</p><h3>Rs.1000</h3><p>on VIOLINSET</p></div></div>
            <div className="discount-item"><img src={guitarset} alt="guitarset" /><div className="discount-info"><p>Save Up To</p><h3>Rs.3000</h3><p>on GUITARSET</p></div></div>
          </div>
        </section>
        {/* <section className="brands-section">
          <h2 className="brands-title">Shop Instruments by Brand</h2>
          <div className="brands-container">
            <Link to="/shop/apple" className="brand-item">
              <img src={drums} alt="Apple" />
            </Link>
            <Link to="/shop/oppo" className="brand-item">
              <img src={oppo} alt="Oppo" />
            </Link>
            <Link to="/shop/vivo" className="brand-item">
              <img src={vivo} alt="Vivo" />
            </Link>
            <Link to="/shop/nothing" className="brand-item">
              <img src={nothing} alt="Nothing" />
            </Link>
            <Link to="/shop/samsung" className="brand-item">
              <img src={samsungLogo} alt="Samsung" />
            </Link>
            <Link to="/shop/mi" className="brand-item">
              <img src={miLogo} alt="Xiaomi" />
            </Link>
            <Link to="/shop/realme" className="brand-item">
              <img src={realmeLogo} alt="Realme" />
            </Link>
            <Link to="/shop/oneplus" className="brand-item">
              <img src={oneplusLogo} alt="OnePlus" />
            </Link>
          </div>
        </section> */}




       
        <section className="best-selling">
          <h2 className="best-selling-title">Best Selling Instruments</h2>
          <div className="carousel-controls">
            <button className="carousel-prev" onClick={moveToPreviousSlide}>{"<"}</button>
            <button className="carousel-next" onClick={moveToNextSlide}>{">"}</button>
          </div>
          <div className="carousel-container" style={{ display: "flex", overflow: "hidden" }}>
            {bestSellingProducts.map((product, index) => (
              <div
                key={product.id}
                className="product-card"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: "transform 0.5s ease-in-out",
                  minWidth: "20%",
                  position: "relative",
                }}
              >
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} />
                </Link>
                <div className="wishlist-container">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="wishlist-icon"
                    style={{ color: likedProducts[product.id] ? "red" : "gray" }} 
                    onClick={() => {
                      handleLikeClick(product.id);
                      addToWishlist(product); 
                    }}
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-prices">
                    <span className="product-price">₹{product.price}</span>
                    <span className="product-old-price">₹{product.oldPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

       
        {isModalOpen && (
          <div className="wishlist-modal">
            <div className="modal-content">
              <p>{modalMessage}</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
              {/* WhatsApp Chat
              <div className="whatsapp-chat">
          <a
            href="https://wa.me/919865798657"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={whatsappIcon}
              alt="WhatsApp Chat"
              className="whatsapp-icon"
            />
          </a>
          <p>We are here!</p>
        </div> */}
      
    
    </>
  );
};

export default HomePage;





