// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import logo from "../assets/kongucellularslogo.png";
// import LoginForm from "./LoginPage";
// import SignupForm from "./SignupPage";
// import cart from "../assets/order.png";
// const Navbar = () => {
//   const [user, setUser] = useState(null);
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//   const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleLoginSuccess = (email) => {
//     const initials = email
//       .split(" ")
//       .map((name) => name.charAt(0).toUpperCase())
//       .join("");
//     setUser({ initials });
//     setIsLoginModalOpen(false);
//     setIsSignupModalOpen(false);
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setIsDropdownOpen(false);
//   };

//   const toggleLoginModal = () => {
//     setIsLoginModalOpen(!isLoginModalOpen);
//     setIsSignupModalOpen(false);
//   };

//   const toggleSignupModal = () => {
//     setIsSignupModalOpen(!isSignupModalOpen);
//     setIsLoginModalOpen(false);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <header className="navbar-container">
//       {/* Logo */}
//       <div className="navbar-left">
//         <img src={logo} alt="Kongu Cellulars Logo" className="navbar-logo" />
//       </div>

//       {/* Search Bar and Icons */}
//       <div className="navbar-center">
//         <div className="navbar-search">
//           <input
//             type="text"
//             placeholder="Search for smartphones, laptops, etc."
//             className="search-input"
//           />
//           <i className="fa fa-search search-icon"></i>
//         </div>
//         <div className="navbar-icons">
//           <Link to="/wishlist">
//             <i className="fa fa-heart icon"></i> {/* Wishlist Icon */}
//           </Link>
//           <Link to="/cart">
//             <i className="fa fa-shopping-cart icon"></i> {/* Cart Icon */}
//           </Link>
//         </div>
//       </div>

//       {/* User Section */}
//       <div className="navbar-right">
//         {user ? (
//           <div className="user-initials">
//             <span className="initials" onClick={toggleDropdown}>
//               {user.initials}
//             </span>
//             {isDropdownOpen && (
//               <div className="dropdown-menu">
//                 <Link to="/orders" className="dropdown-item">
//                   <div className="dropdown-item-content">
//                   <img src={cart} alt="Cart" className="icon-image" />

//                     <div>
//                       <span className="dropdown-title">Order</span>
//                       <span className="dropdown-subtext">Track your orders</span>
//                     </div>
//                   </div>
//                   <i className="fa fa-chevron-right arrow-icon"></i>
//                 </Link>
//                 <Link to="/personal-details" className="dropdown-item">
//                   <div className="dropdown-item-content">
//                     <i className="fa fa-user dropdown-icon"></i>
//                     <div>
//                       <span className="dropdown-title">Personal Details</span>
//                       <span className="dropdown-subtext">Name, Email, Phone Number</span>
//                     </div>
//                   </div>
//                   <i className="fa fa-chevron-right arrow-icon"></i>
//                 </Link>
//                 <Link to="/saved-address" className="dropdown-item">
//                   <div className="dropdown-item-content">
//                     <i className="fa fa-map-marker dropdown-icon"></i>
//                     <div>
//                       <span className="dropdown-title">Saved Address</span>
//                     </div>
//                   </div>
//                   <i className="fa fa-chevron-right arrow-icon"></i>
//                 </Link>
//                 <Link to="/coupons" className="dropdown-item">
//                   <div className="dropdown-item-content">
//                     <i className="fa fa-tags dropdown-icon"></i>
//                     <div>
//                       <span className="dropdown-title">My Coupons</span>
//                       <span className="dropdown-subtext">Manage coupons for additional discounts</span>
//                     </div>
//                   </div>
//                   <i className="fa fa-chevron-right arrow-icon"></i>
//                 </Link>
//                 <Link to="/help-support" className="dropdown-item">
//                   <div className="dropdown-item-content">
//                     <i className="fa fa-headphones dropdown-icon"></i>
//                     <div>
//                       <span className="dropdown-title">Help and Support</span>
//                     </div>
//                   </div>
//                   <i className="fa fa-chevron-right arrow-icon"></i>
//                 </Link>
//                 <Link to="/language-preferences" className="dropdown-item">
//                   <div className="dropdown-item-content">
//                     <i className="fa fa-language dropdown-icon"></i>
//                     <div>
//                       <span className="dropdown-title">Change Preferred Language</span>
//                       <span className="dropdown-subtext">English</span>
//                     </div>
//                   </div>
//                   <i className="fa fa-chevron-right arrow-icon"></i>
//                 </Link>
//                 <button
//                   className="dropdown-item logout-button"
//                   onClick={handleLogout}
//                 >
//                   Log Out
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <button className="login-button" onClick={toggleLoginModal}>
//             Login/Sign Up
//           </button>
//         )}
//       </div>

//       {/* Login and Signup Modals */}
//       {isLoginModalOpen && (
//         <LoginForm
//           onClose={toggleLoginModal}
//           onLoginSuccess={handleLoginSuccess}
//           onSignupClick={toggleSignupModal}
//         />
//       )}
//       {isSignupModalOpen && (
//         <SignupForm
//           onClose={toggleSignupModal}
//           onSignupSuccess={handleLoginSuccess}
//           onLoginClick={toggleLoginModal}
//         />
//       )}
//     </header>
//   );
// };

// export default Navbar;






// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import logo from "../assets/kongucellularslogo.png";
// import LoginForm from "./LoginPage";
// import SignupForm from "./SignupPage";
// import cart from "../assets/order.png";

// const Navbar = () => {
//   const [user, setUser] = useState(null);
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//   const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleLoginSuccess = (email) => {
//     // Ensure email is in the correct format for initials
//     if (email) {
//       const initials = email
//         .split(" ")
//         .map((name) => name.charAt(0).toUpperCase())
//         .join("");
//       setUser({ initials });
//     }
//     setIsLoginModalOpen(false);
//     setIsSignupModalOpen(false);
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setIsDropdownOpen(false);
//   };

//   const toggleLoginModal = () => {
//     setIsLoginModalOpen(!isLoginModalOpen);
//     setIsSignupModalOpen(false);
//   };

//   const toggleSignupModal = () => {
//     setIsSignupModalOpen(!isSignupModalOpen);
//     setIsLoginModalOpen(false);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <header className="navbar-container">
//       {/* Logo */}
//       <div className="navbar-left">
//         <img src={logo} alt="Kongu Cellulars Logo" className="navbar-logo" />
//       </div>

//       {/* Search Bar and Icons */}
//       <div className="navbar-center">
//         <div className="navbar-search">
//           <input
//             type="text"
//             placeholder="Search for smartphones, laptops, etc."
//             className="search-input"
//           />
//           <i className="fa fa-search search-icon"></i>
//         </div>
//         <div className="navbar-icons">
//           <Link to="/wishlist">
//             <i className="fa fa-heart icon"></i> {/* Wishlist Icon */}
//           </Link>
//           <Link to="/cart">
//             <i className="fa fa-shopping-cart icon"></i> {/* Cart Icon */}
//           </Link>
//         </div>
//       </div>

//       {/* User Section */}
//       <div className="navbar-right">
//         {user ? (
//           <div className="user-initials">
//             <span className="initials" onClick={toggleDropdown}>
//               {user.initials}
//             </span>
      //       {isDropdownOpen && (
      //         <div className="dropdown-menu">
      //           <Link to="/dropdown/:option"  className="dropdown-item">
      //             <div className="dropdown-item-content">
      //               <img src={cart} alt="Cart" className="icon-image" />
      //               <div>
      //                 <span className="dropdown-title">Order</span>
      //                 <span className="dropdown-subtext">Track your orders</span>
      //               </div>
      //             </div>
      //             <i className="fa fa-chevron-right arrow-icon"></i>
      //           </Link>
      //           <Link to="/dropdown/:option" className="dropdown-item">
      //             <div className="dropdown-item-content">
      //               <i className="fa fa-user dropdown-icon"></i>
      //               <div>
      //                 <span className="dropdown-title">Personal Details</span>
      //                 <span className="dropdown-subtext">Name, Email, Phone Number</span>
      //               </div>
      //             </div>
      //             <i className="fa fa-chevron-right arrow-icon"></i>
      //           </Link>
      //           <Link to="/dropdown/:option" className="dropdown-item">
      //             <div className="dropdown-item-content">
      //               <i className="fa fa-map-marker dropdown-icon"></i>
      //               <div>
      //                 <span className="dropdown-title">Saved Address</span>
      //               </div>
      //             </div>
      //             <i className="fa fa-chevron-right arrow-icon"></i>
      //           </Link>
      //           <Link to="/dropdown/:option" className="dropdown-item">
      //             <div className="dropdown-item-content">
      //               <i className="fa fa-tags dropdown-icon"></i>
      //               <div>
      //                 <span className="dropdown-title">My Coupons</span>
      //                 <span className="dropdown-subtext">Manage coupons for additional discounts</span>
      //               </div>
      //             </div>
      //             <i className="fa fa-chevron-right arrow-icon"></i>
      //           </Link>
      //           <Link to="/dropdown/:option" className="dropdown-item">
      //             <div className="dropdown-item-content">
      //               <i className="fa fa-headphones dropdown-icon"></i>
      //               <div>
      //                 <span className="dropdown-title">Help and Support</span>
      //               </div>
      //             </div>
      //             <i className="fa fa-chevron-right arrow-icon"></i>
      //           </Link>
      //           <Link to="/dropdown/:option" className="dropdown-item">
      //             <div className="dropdown-item-content">
      //               <i className="fa fa-language dropdown-icon"></i>
      //               <div>
      //                 <span className="dropdown-title">Change Preferred Language</span>
      //                 <span className="dropdown-subtext">English</span>
      //               </div>
      //             </div>
      //             <i className="fa fa-chevron-right arrow-icon"></i>
      //           </Link>
      //           <button
      //             className="dropdown-item logout-button"
      //             onClick={handleLogout}
      //           >
      //             Log Out
      //           </button>
      //         </div>
      //       )}
      //     </div>
      //   ) : (
      //     <button className="login-button" onClick={toggleLoginModal}>
      //       Login/Sign Up
      //     </button>
      //   )}
      // </div>

      // {/* Login and Signup Modals */}
      // {isLoginModalOpen && (
      //   <LoginForm
      //     onClose={toggleLoginModal}
      //     onLoginSuccess={handleLoginSuccess}
      //     onSignupClick={toggleSignupModal}
      //   />
      // )}
      // {isSignupModalOpen && (
      //   <SignupForm
      //     onClose={toggleSignupModal}
      //     onSignupSuccess={handleLoginSuccess}
      //     onLoginClick={toggleLoginModal}
      //   />
      // )}
//     </header>
//   );
// };

// export default Navbar;






// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import logo from "../assets/kongucellularslogo.png";
// import LoginForm from "./LoginPage";
// import SignupForm from "./SignupPage";
// import cart from "../assets/order.png";

// const Navbar = () => {
//   const [user, setUser] = useState(null);
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//   const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

//   const trendingItems = [
//     { id: 1, name: "Apple iPhone 15 128GB Blue", color: "Blue", delivery: "Delivery by 30 minutes" },
//     { id: 2, name: "Apple iPhone 16 128GB Black", color: "Black", delivery: "Delivery by 30 minutes" },
//     { id: 3, name: "Apple iPhone 15 128GB Black", color: "Black", delivery: "Delivery by 30 minutes" },
//   ];

//   const handleLoginSuccess = (email) => {
//     if (email) {
//       const initials = email
//         .split(" ")
//         .map((name) => name.charAt(0).toUpperCase())
//         .join("");
//       setUser({ initials });
//     }
//     setIsLoginModalOpen(false);
//     setIsSignupModalOpen(false);
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setIsDropdownOpen(false);
//   };

//   const toggleLoginModal = () => {
//     setIsLoginModalOpen(!isLoginModalOpen);
//     setIsSignupModalOpen(false);
//   };

//   const toggleSignupModal = () => {
//     setIsSignupModalOpen(!isSignupModalOpen);
//     setIsLoginModalOpen(false);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleSearchInputChange = (e) => {
//     const value = e.target.value;
//     setSearchQuery(value);
//     setShowSearchSuggestions(value.trim() !== "");
//   };

//   const clearSearch = () => {
//     setSearchQuery("");
//     setShowSearchSuggestions(false);
//   };

//   return (
//     <header className="navbar-container">
//       {/* Logo */}
//       <div className="navbar-left">
//         <img src={logo} alt="Kongu Cellulars Logo" className="navbar-logo" />
//       </div>

//       {/* Search Bar */}
//       <div className="navbar-center">
//         <div className="navbar-search">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearchInputChange}
//             placeholder="Search for smartphones, laptops, etc."
//             className="search-input"
//           />
//           <i className="fa fa-search search-icon"></i>

//           {/* Search Suggestions */}
//           {showSearchSuggestions && (
//             <div className="search-suggestions">
//               <div className="recent-searches">
//                 <span className="suggestion-header">Recent Searches</span>
//                 <button className="clear-all" onClick={clearSearch}>
//                   Clear All
//                 </button>
//               </div>
//               <div className="trending-section">
//                 <span className="suggestion-header">Trending Top 10</span>
//                 {trendingItems.map((item) => (
//                   <div key={item.id} className="trending-item">
//                     <div>
//                       <span className="item-name">{item.name}</span>
//                       <span className="item-color">{item.color}</span>
//                     </div>
//                     <span className="item-delivery">{item.delivery}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="navbar-icons">
//           <Link to="/wishlist">
//             <i className="fa fa-heart icon"></i>
//           </Link>
//           <Link to="/cart">
//             <i className="fa fa-shopping-cart icon"></i>
//           </Link>
//         </div>
//       </div>

//       {/* User Section */}
//       <div className="navbar-right">
//         {user ? (
//           <div className="user-initials">
//             <span className="initials" onClick={toggleDropdown}>
//               {user.initials}
//             </span>
//             {isDropdownOpen && (
//               <div className="dropdown-menu">
                
//                 <button
//                   className="dropdown-item logout-button"
//                   onClick={handleLogout}
//                 >
//                   Log Out
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <button className="login-button" onClick={toggleLoginModal}>
//             Login/Sign Up
//           </button>
//         )}
//       </div>

//       {/* Login and Signup Modals */}
//       {isLoginModalOpen && (
//         <LoginForm
//           onClose={toggleLoginModal}
//           onLoginSuccess={handleLoginSuccess}
//           onSignupClick={toggleSignupModal}
//         />
//       )}
//       {isSignupModalOpen && (
//         <SignupForm
//           onClose={toggleSignupModal}
//           onSignupSuccess={handleLoginSuccess}
//           onLoginClick={toggleLoginModal}
//         />
//       )}
//     </header>
//   );
// };

// export default Navbar;
















// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import logo from "../assets/kongucellularslogo.png";
// import LoginForm from "./LoginPage";
// import SignupForm from "./SignupPage";
// import cart from "../assets/order.png";

// const Navbar = () => {
//   const [user, setUser] = useState(null);
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//   const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

//   const trendingItems = [
//     { id: 1, name: "Apple iPhone 15 128GB Blue", color: "Blue", delivery: "Delivery by 30 minutes" },
//     { id: 2, name: "Apple iPhone 16 128GB Black", color: "Black", delivery: "Delivery by 30 minutes" },
//     { id: 3, name: "Apple iPhone 15 128GB Black", color: "Black", delivery: "Delivery by 30 minutes" },
//   ];

//   const handleLoginSuccess = (email) => {
//     if (email) {
//       const initials = email
//         .split(" ")
//         .map((name) => name.charAt(0).toUpperCase())
//         .join("");
//       setUser({ initials });
//     }
//     setIsLoginModalOpen(false);
//     setIsSignupModalOpen(false);
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setIsDropdownOpen(false);
//   };

//   const toggleLoginModal = () => {
//     setIsLoginModalOpen(!isLoginModalOpen);
//     setIsSignupModalOpen(false);
//   };

//   const toggleSignupModal = () => {
//     setIsSignupModalOpen(!isSignupModalOpen);
//     setIsLoginModalOpen(false);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleSearchInputChange = (e) => {
//     const value = e.target.value;
//     setSearchQuery(value);
//     setShowSearchSuggestions(value.trim() !== "");
//   };

//   const clearSearch = () => {
//     setSearchQuery("");
//     setShowSearchSuggestions(false);
//   };

//   return (
//     <header className="navbar-container">
//       {/* Logo */}
//       <div className="navbar-left">
//         <img src={logo} alt="Kongu Cellulars Logo" className="navbar-logo" />
//       </div>

//       {/* Search Bar */}
//       <div className="navbar-center">
//         <div className="navbar-search">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearchInputChange}
//             placeholder="Search for smartphones, laptops, etc."
//             className="search-input"
//           />
//           <i className="fa fa-search search-icon"></i>

//           {/* Search Suggestions */}
//           {showSearchSuggestions && (
//             <div className="search-suggestions">
//               <div className="recent-searches">
//                 <span className="suggestion-header">Recent Searches</span>
//                 <button className="clear-all" onClick={clearSearch}>
//                   Clear All
//                 </button>
//               </div>
//               <div className="trending-section">
//                 <span className="suggestion-header">Trending Top 10</span>
//                 {trendingItems.map((item) => (
//                   <div key={item.id} className="trending-item">
//                     <div>
//                       <span className="item-name">{item.name}</span>
//                       <span className="item-color">{item.color}</span>
//                     </div>
//                     <span className="item-delivery">{item.delivery}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="navbar-icons">
//           <Link to="/wishlist">
//             <i className="fa fa-heart icon"></i>
//           </Link>
//           <Link to="/cart">
//             <i className="fa fa-shopping-cart icon"></i>
//           </Link>
//         </div>
//       </div>

//       {/* User Section */}
//       <div className="navbar-right">
//         {user ? (
//           <div className="user-initials">
//             <span className="initials" onClick={toggleDropdown}>
//               {user.initials}
//             </span>
//             {isDropdownOpen && (
//               <div className="dropdown-menu">
//                 <Link to="/order" className="dropdown-item">
//                   <div className="dropdown-item-content">
//                     <img src={cart} alt="Cart" className="icon-image" />
//                     <div>
//                       <span className="dropdown-title">Order</span>
//                       <span className="dropdown-subtext">Track your orders</span>
//                     </div>
//                   </div>
//                   <i className="fa fa-chevron-right arrow-icon"></i>
//                 </Link>
//                 <Link to="/personal-details" className="dropdown-item">
//                   <div className="dropdown-item-content">
//                     <i className="fa fa-user dropdown-icon"></i>
//                     <div>
//                       <span className="dropdown-title">Personal Details</span>
//                       <span className="dropdown-subtext">Name, Email, Phone Number</span>
//                     </div>
//                   </div>
//                   <i className="fa fa-chevron-right arrow-icon"></i>
//                 </Link>
//                 <Link to="/saved-address" className="dropdown-item">
//                   <div className="dropdown-item-content">
//                     <i className="fa fa-map-marker dropdown-icon"></i>
//                     <div>
//                       <span className="dropdown-title">Saved Address</span>
//                     </div>
//                   </div>
//                   <i className="fa fa-chevron-right arrow-icon"></i>
//                 </Link>
//                 <Link to="/my-coupons" className="dropdown-item">
//                   <div className="dropdown-item-content">
//                     <i className="fa fa-tags dropdown-icon"></i>
//                     <div>
//                       <span className="dropdown-title">My Coupons</span>
//                       <span className="dropdown-subtext">Manage coupons for additional discounts</span>
//                     </div>
//                   </div>
//                   <i className="fa fa-chevron-right arrow-icon"></i>
//                 </Link>
//                 <Link to="/help-support" className="dropdown-item">
//                   <div className="dropdown-item-content">
//                     <i className="fa fa-headphones dropdown-icon"></i>
//                     <div>
//                       <span className="dropdown-title">Help and Support</span>
//                     </div>
//                   </div>
//                   <i className="fa fa-chevron-right arrow-icon"></i>
//                 </Link>
//                 <Link to="/change-language" className="dropdown-item">
//                   <div className="dropdown-item-content">
//                     <i className="fa fa-language dropdown-icon"></i>
//                     <div>
//                       <span className="dropdown-title">Change Preferred Language</span>
//                       <span className="dropdown-subtext">English</span>
//                     </div>
//                   </div>
//                   <i className="fa fa-chevron-right arrow-icon"></i>
//                 </Link>
//                 <button
//                   className="dropdown-item logout-button"
//                   onClick={handleLogout}
//                 >
//                   Log Out
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <button className="login-button" onClick={toggleLoginModal}>
//             Login/Sign Up
//           </button>
//         )}
//       </div>

//       {/* Login and Signup Modals */}
//       {isLoginModalOpen && (
//         <LoginForm
//           onClose={toggleLoginModal}
//           onLoginSuccess={handleLoginSuccess}
//           onSignupClick={toggleSignupModal}
//         />
//       )}
//       {isSignupModalOpen && (
//         <SignupForm
//           onClose={toggleSignupModal}
//           onSignupSuccess={handleLoginSuccess}
//           onLoginClick={toggleLoginModal}
//         />
//       )}
//     </header>
//   );
// };

// export default Navbar;











import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/kongucellularslogo.png";
import LoginForm from "./LoginPage";
import SignupForm from "./SignupPage";
import SearchBar from "./SearchComponent"; // Import the SearchBar component
import cart from "../assets/order.png";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLoginSuccess = (email) => {
    if (email) {
      const initials = email
        .split(" ")
        .map((name) => name.charAt(0).toUpperCase())
        .join("");
      setUser({ initials });
    }
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsDropdownOpen(false);
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
    setIsSignupModalOpen(false);
  };

  const toggleSignupModal = () => {
    setIsSignupModalOpen(!isSignupModalOpen);
    setIsLoginModalOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="navbar-container">
      {/* Logo */}
      {/* <div className="navbar-left">
        <img src={logo} alt="Kongu Cellulars Logo" className="navbar-logo" />
      </div> */}

      {/* Search Bar */}
      <div className="navbar-center">
        <SearchBar />
        <div className="navbar-icons">
          <Link to="/wishlist">
            <i className="fa fa-heart icon"></i>
          </Link>
          <Link to="/cart">
            <i className="fa fa-shopping-cart icon"></i>
          </Link>
        </div>
      </div>

      {/* User Section */}
      <div className="navbar-right">
        {user ? (
          <div className="user-initials">
            <span className="initials" onClick={toggleDropdown}>
              {user.initials}
            </span>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/order" className="dropdown-item">
                  <div className="dropdown-item-content">
                    <img src={cart} alt="Cart" className="icon-image" />
                    <div>
                      <span className="dropdown-title">Order</span>
                      <span className="dropdown-subtext">Track your orders</span>
                    </div>
                  </div>
                  <i className="fa fa-chevron-right arrow-icon"></i>
                </Link>
                <Link to="/personal-details" className="dropdown-item">
                  <div className="dropdown-item-content">
                    <i className="fa fa-user dropdown-icon"></i>
                    <div>
                      <span className="dropdown-title">Personal Details</span>
                      <span className="dropdown-subtext">Name, Email, Phone Number</span>
                    </div>
                  </div>
                  <i className="fa fa-chevron-right arrow-icon"></i>
                </Link>
                <Link to="/saved-address" className="dropdown-item">
                  <div className="dropdown-item-content">
                    <i className="fa fa-map-marker dropdown-icon"></i>
                    <div>
                      <span className="dropdown-title">Saved Address</span>
                    </div>
                  </div>
                  <i className="fa fa-chevron-right arrow-icon"></i>
                </Link>
                <Link to="/my-coupons" className="dropdown-item">
                  <div className="dropdown-item-content">
                    <i className="fa fa-tags dropdown-icon"></i>
                    <div>
                      <span className="dropdown-title">My Coupons</span>
                      <span className="dropdown-subtext">Manage coupons for additional discounts</span>
                    </div>
                  </div>
                  <i className="fa fa-chevron-right arrow-icon"></i>
                </Link>
                <Link to="/help-support" className="dropdown-item">
                  <div className="dropdown-item-content">
                    <i className="fa fa-headphones dropdown-icon"></i>
                    <div>
                      <span className="dropdown-title">Help and Support</span>
                    </div>
                  </div>
                  <i className="fa fa-chevron-right arrow-icon"></i>
                </Link>
                <Link to="/change-language" className="dropdown-item">
                  <div className="dropdown-item-content">
                    <i className="fa fa-language dropdown-icon"></i>
                    <div>
                      <span className="dropdown-title">Change Preferred Language</span>
                      <span className="dropdown-subtext">English</span>
                    </div>
                  </div>
                  <i className="fa fa-chevron-right arrow-icon"></i>
                </Link>
                <button
                  className="dropdown-item logout-button"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button className="login-button" onClick={toggleLoginModal}>
            Login/Sign Up
          </button>
        )}
      </div>

      {/* Login and Signup Modals */}
      {isLoginModalOpen && (
        <LoginForm
          onClose={toggleLoginModal}
          onLoginSuccess={handleLoginSuccess}
          onSignupClick={toggleSignupModal}
        />
      )}
      {isSignupModalOpen && (
        <SignupForm
          onClose={toggleSignupModal}
          onSignupSuccess={handleLoginSuccess}
          onLoginClick={toggleLoginModal}
        />
      )}
    </header>
  );
};

export default Navbar;
