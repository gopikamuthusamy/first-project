// import React, { useState } from "react";
// import { X, Truck } from "lucide-react";

// const SearchComponent = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const [isDropdownVisible, setDropdownVisible] = useState(false);

//   const trendingProducts = [
//     {
//       name: "Apple iPhone 15 128GB Blue",
//       color: "Blue",
//       deliveryTime: "Delivery by 30 minutes",
//       image: "https://via.placeholder.com/50x50", // Replace with actual images
//     },
//     {
//       name: "Apple iPhone 16 128GB Black",
//       color: "Black",
//       deliveryTime: "Delivery by 30 minutes",
//       image: "https://via.placeholder.com/50x50",
//     },
//     {
//       name: "Apple iPhone 15 128GB Black",
//       color: "Black",
//       deliveryTime: "Delivery by 30 minutes",
//       image: "https://via.placeholder.com/50x50",
//     },
//   ];

//   const handleSearchChange = (e) => {
//     setSearchInput(e.target.value);
//     setDropdownVisible(true);
//   };

//   return (
//     <div className="relative w-full max-w-md mx-auto">
//       {/* Search Bar */}
//       <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
//         <input
//           type="text"
//           placeholder="Search for smartphones, laptops etc"
//           className="w-full outline-none text-sm"
//           value={searchInput}
//           onChange={handleSearchChange}
//           onFocus={() => setDropdownVisible(true)}
//         />
//         {searchInput && (
//           <button
//             onClick={() => setSearchInput("")}
//             className="text-gray-500 focus:outline-none"
//           >
//             <X size={16} />
//           </button>
//         )}
//       </div>

//       {/* Dropdown */}
//       {isDropdownVisible && (
//         <div className="absolute top-14 left-0 w-full bg-white shadow-lg rounded-lg p-4 z-10">
//           {/* Recent Searches */}
//           <div className="mb-4">
//             <div className="flex justify-between text-gray-700 text-sm font-semibold">
//               <span>Recent Searches</span>
//               <button className="text-blue-500">Clear All</button>
//             </div>
//           </div>

//           {/* Trending Products */}
//           <div>
//             <div className="text-gray-700 text-sm font-semibold mb-2">
//               Trending Top 10
//             </div>
//             <ul className="space-y-4">
//               {trendingProducts.map((product, index) => (
//                 <li key={index} className="flex items-start">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-12 h-12 rounded-md mr-4"
//                   />
//                   <div>
//                     <p className="font-medium text-sm text-gray-900">
//                       {product.name}
//                     </p>
//                     <p className="text-gray-500 text-xs">{product.color}</p>
//                     <div className="flex items-center text-gray-400 text-xs mt-1">
//                       <Truck size={14} className="mr-1" />
//                       {product.deliveryTime}
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchComponent;












// import React, { useState, useEffect } from "react";
// import { X } from "lucide-react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./SearchComponent.css"
// const SearchComponent = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const [isDropdownVisible, setDropdownVisible] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   // Fetch products from the API on component mount
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/products");
//         setProducts(response.data.products);
//       } catch (err) {
//         console.error("Failed to fetch products", err);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Handle search input changes
//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchInput(query);
//     setDropdownVisible(true);

//     // Filter products based on search query
//     const filtered = products.filter((product) =>
//       product.name.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   };

//   // Close dropdown on clicking outside (optional improvement)
//   const handleCloseDropdown = () => {
//     setDropdownVisible(false);
//   };

//   return (
//     <div className="relative w-full max-w-md mx-auto">
//       {/* Search Bar */}
//       <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white">
//         <input
//           type="text"
//           placeholder="Search for products"
//           className="w-full outline-none text-sm"
//           value={searchInput}
//           onChange={handleSearchChange}
//           onFocus={() => setDropdownVisible(true)}
//         />
//         {searchInput && (
//           <button
//             onClick={() => setSearchInput("")}
//             className="text-gray-500 focus:outline-none"
//             style={{ width: "20px", height: "20px" }}
//           >
//             <X size={12} />
//           </button>
//         )}
//       </div>

//       {/* Dropdown */}
//       {isDropdownVisible && searchInput && (
//         <div
//           className="absolute top-14 left-0 w-full bg-white shadow-lg rounded-lg p-4 z-10"
//           onBlur={handleCloseDropdown}
//         >
//           {filteredProducts.length > 0 ? (
//             <ul className="space-y-2">
//               {filteredProducts.map((product) => (
//                 <li
//                   key={product.id}
//                   className="flex items-center p-2 border-b border-gray-200 hover:bg-gray-100"
//                 >
//                   <img
//                     src={`http://localhost:5000/${product.image}`}
//                     alt={product.name}
//                     className="w-12 h-12 rounded-md mr-4"
//                   />
//                   <div>
//                     <Link
//                       to={`/product/${product.id}`}
//                       className="font-medium text-sm text-gray-900"
//                     >
//                       {product.name}
//                     </Link>
//                     <p className="text-gray-500 text-xs">₹{product.price}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-500 text-sm">No products found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchComponent;









import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SearchComponent.css";

const SearchComponent = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products from the API on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data.products);
      } catch (err) {
        console.error("Failed to fetch products", err.message);
      }
    };

    fetchProducts();
  }, []);

  // Handle search input changes
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchInput(query);
    setDropdownVisible(true);

    // Filter products based on search query
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Close dropdown on clicking outside (optional improvement)
  const handleCloseDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Search Bar */}
      <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white">
        <input
          type="text"
          placeholder="Search for products"
          className="w-full outline-none text-sm"
          value={searchInput}
          onChange={handleSearchChange}
          onFocus={() => setDropdownVisible(true)}
        />
        {searchInput && (
          <button
            onClick={() => setSearchInput("")}
            className="text-gray-500 focus:outline-none"
            style={{ width: "20px", height: "20px" }}
          >
            <X size={12} />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {isDropdownVisible && searchInput && (
        <div
          className="absolute top-14 left-0 w-full bg-white shadow-lg rounded-lg p-4 z-10"
          onBlur={handleCloseDropdown}
        >
          {filteredProducts.length > 0 ? (
            <ul className="space-y-2">
              {filteredProducts.map((product) => (
                <li
                  key={product.id}
                  className="flex items-center p-2 border-b border-gray-200 hover:bg-gray-100"
                >
                  <img
                    src={`http://localhost:5000/${product.image}`}
                    alt={product.name}
                    className="w-12 h-12 rounded-md mr-4"
                  />
                  <div>
                    <Link
                      to={`/product/${product.id}`}
                      state={{ product }} // Pass product details to the detailed page
                      className="font-medium text-sm text-gray-900"
                    >
                      {product.name}
                    </Link>
                    <p className="text-gray-500 text-xs">₹{product.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
