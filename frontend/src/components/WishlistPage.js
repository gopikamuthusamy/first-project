// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./WishlistPage.css"; // Optional: include this CSS if you have a custom stylesheet for styling

// const WishlistPage = () => {
//   // State to manage the wishlist
//   const [wishlist, setWishlist] = useState([]);

//   // Load the wishlist from localStorage on component mount
//   useEffect(() => {
//     const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlist(storedWishlist);
//   }, []);

//   // Remove product from wishlist
//   const removeFromWishlist = (productId) => {
//     const updatedWishlist = wishlist.filter(item => item.id !== productId);
//     setWishlist(updatedWishlist);
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save updated wishlist to localStorage
//   };

//   return (
//     <div className="wishlist-page">
//       <h1>Your Wishlist</h1>
//       <p>Here are the items you’ve added to your wishlist.</p>

//       {/* If wishlist is empty, show a message */}
//       {wishlist.length === 0 ? (
//         <p>Your wishlist is empty. Start adding products!</p>
//       ) : (
//         <div className="wishlist-items">
//           {/* Render wishlist items */}
//           {wishlist.map((product) => (
//             <div key={product.id} className="wishlist-item">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="wishlist-item-image"
//               />
//               <div className="wishlist-item-info">
//                 <h3>{product.name}</h3>
//                 <p>₹{product.price}</p>
//                 <button
//                   onClick={() => removeFromWishlist(product.id)}
//                   className="remove-button"
//                 >
//                   Remove from Wishlist
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <div className="wishlist-footer">
//         <Link to="/shop" className="continue-shopping-button">
//           Continue Shopping
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default WishlistPage;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./WishlistPage.css"; // Optional: Add custom styles
import { wishlistItems } from "./data"; // Import predefined wishlist items

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage OR fallback to predefined wishlistItems
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (storedWishlist && storedWishlist.length > 0) {
      setWishlist(storedWishlist);
    } else {
      setWishlist(wishlistItems); // Load default items if localStorage is empty
      localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    }
  }, []);

  // Remove product from wishlist
  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="wishlist-page">
      <h1>Your Wishlist</h1>
      <p>Here are the items you’ve added to your wishlist.</p>

      {/* If wishlist is empty, show a message */}
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty. Start adding products!</p>
      ) : (
        <div className="wishlist-items">
          {/* Render wishlist items */}
          {wishlist.map((product) => (
            <div key={product.id} className="wishlist-item">
              <img
                src={product.image} // Ensure the correct image path
                alt={product.name}
                className="wishlist-item-image"
                onError={(e) => { e.target.src = "/fallback-image.jpeg"; }} // Fallback image
              />
              <div className="wishlist-item-info">
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="remove-button"
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="wishlist-footer">
        <Link to="/shop" className="continue-shopping-button">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default WishlistPage;
