// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Pages
// import HomePage from "./components/HomePage";
// import AboutPage from "./components/AboutPage";
// import ShopPage from "./components/ShopPage";
// import MyAccount from "./components/MyAccount";
// import CheckoutPage from "./components/CheckoutPage";
// import ContactPage from "./components/ContactPage";
// import LoginPage from "./components/LoginPage";
// import SignupPage from "./components/SignupPage";
// import WishlistPage from "./components/WishlistPage";
// import CartPage from "./components/CartPage";
// import ProductDetailsPage from "./components/ProductDetailsPage"; // Dynamic Product Details Page

// // Shared Components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// // Global CSS (if needed, keep shared styles here or use CSS Modules)
// import "./App.css";

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         {/* Navbar (common across pages) */}
//         <Navbar />
        
//         {/* Routes */}
//         <Routes>
//           {/* Main Pages */}
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/shop" element={<ShopPage />} />
//           <Route path="/account" element={<MyAccount />} />
//           <Route path="/checkout" element={<CheckoutPage />} />
//           <Route path="/contact" element={<ContactPage />} />

//           {/* Authentication */}
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignupPage />} />

//           {/* Other Pages */}
//           <Route path="/wishlist" element={<WishlistPage />} />
//           <Route path="/cart" element={<CartPage />} />

//           {/* Dynamic Product Page */}
//           <Route path="/product/:id" element={<ProductDetailsPage />} />
//         </Routes>

//         {/* Footer (common across pages) */}
//         <Footer />
//       </div>
//     </Router>
//   );
// };

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components
import HomePage from "./components/HomePage";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import AboutPage from "./components/AboutPage";
import WishlistPage from "./components/WishlistPage";



// Global CSS
import "./App.css";

const App = () => {
  const [userInitial, setUserInitial] = useState(localStorage.getItem("userInitial") || "");

  useEffect(() => {
    // Get the stored initial on page load
    const storedInitial = localStorage.getItem("userInitial");
    if (storedInitial) {
      setUserInitial(storedInitial);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage userInitial={userInitial} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage onLoginSuccess={setUserInitial} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/wishlist" element={<WishlistPage />} /> Wishlist Route
        </Routes>
      </div>
    </Router>
  );
};

export default App;
