// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./LoginPage.css";

// const LoginForm = ({ onClose, onLoginSuccess, onSignupClick }) => {
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Client-side validation
//     if (!email || !email.includes("@")) {
//       setErrorMessage("Please enter a valid email.");
//       return;
//     }
//     if (!phoneNumber || phoneNumber.length < 10) {
//       setErrorMessage("Please enter a valid phone number.");
//       return;
//     }

//     try {
//       console.log("Sending login request with:", { email, phoneNumber }); // Debugging log

//       const response = await axios.post("http://localhost:5000/api/login", { email, phoneNumber });

//       if (response.status === 200) {
//         setErrorMessage("");
//         setSuccessMessage("Login successful!");
//         const { token, isAdmin } = response.data;

//         // Store the JWT token
//         localStorage.setItem("token", token);

//         if (isAdmin) {
//           navigate("/admin-dashboard"); // Navigate to admin dashboard
//         } else {
//           navigate("/"); // Navigate to user homepage
//         }
//         onClose(); // Close the modal after successful login
//       }
//     } catch (error) {
//       console.error("Login error response:", error.response?.data); // Debugging log
//       setErrorMessage(error.response?.data?.message || "Login failed. Please try again.");
//       setSuccessMessage("");
//     }
//   };

//   return (
//     <div className="form-overlay">
//       <div className="form-container custom-login-form">
//         <button className="close-button" onClick={onClose}>X</button>
//         <div className="login-header">
//           <h2>Welcome to Kongu Cellulars</h2>
//           <p>Please add Bank Registered Phone Number to get Best Offers and Finance Options</p>
//         </div>
//         <form onSubmit={handleLogin} className="login-form">
//           <div className="input-group">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="+91 Enter Phone Number"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">Login</button>
//         </form>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         {successMessage && <p className="success-message">{successMessage}</p>}
//         <p className="signup-link">
//           Don't have an account?{" "}
//           <span onClick={onSignupClick} className="signup-text">Signup</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./LoginPage.css";

// const LoginForm = ({ onClose, onLoginSuccess, onSignupClick }) => {
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Client-side validation
//     if (!email || !email.includes("@")) {
//       setErrorMessage("Please enter a valid email.");
//       return;
//     }
//     if (!phoneNumber || phoneNumber.length < 10) {
//       setErrorMessage("Please enter a valid phone number.");
//       return;
//     }

//     try {
//       console.log("Sending login request with:", { email, phoneNumber }); // Debugging log

//       const response = await axios.post("http://localhost:5000/api/login", { email, phoneNumber });

//       if (response.status === 200) {
//         setErrorMessage("");
//         setSuccessMessage("Login successful!");
//         const { token, isAdmin } = response.data;

//         // Store the JWT token
//         localStorage.setItem("token", token);

//         // Call onLoginSuccess with the email to set initials
//         onLoginSuccess(email);

//         if (isAdmin) {
//           navigate("/admin-dashboard"); // Navigate to admin dashboard
//         } else {
//           navigate("/"); // Navigate to user homepage
//         }
//         onClose(); // Close the modal after successful login
//       }
//     } catch (error) {
//       console.error("Login error response:", error.response?.data); // Debugging log
//       setErrorMessage(error.response?.data?.message || "Login failed. Please try again.");
//       setSuccessMessage("");
//     }
//   };

//   return (
//     <div className="form-overlay">
//       <div className="form-container custom-login-form">
//         <button className="close-button" onClick={onClose}>X</button>
//         <div className="login-header">
//           <h2>Welcome to Kongu Cellulars</h2>
//           <p>Please add Bank Registered Phone Number to get Best Offers and Finance Options</p>
//         </div>
//         <form onSubmit={handleLogin} className="login-form">
//           <div className="input-group">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="+91 Enter Phone Number"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">Login</button>
//         </form>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         {successMessage && <p className="success-message">{successMessage}</p>}
//         <p className="signup-link">
//           Don't have an account?{" "}
//           <span onClick={onSignupClick} className="signup-text">Signup</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;














// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./LoginPage.css";

// const LoginForm = ({ onClose, onLoginSuccess, onSignupClick }) => {
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Client-side validation
//     if (!email || !email.includes("@")) {
//       setErrorMessage("Please enter a valid email.");
//       return;
//     }
//     if (!phoneNumber || phoneNumber.length < 10) {
//       setErrorMessage("Please enter a valid phone number.");
//       return;
//     }

//     try {
//       console.log("Sending login request with:", { email, phoneNumber });

//       const response = await axios.post("http://localhost:5000/api/login", {
//         email,
//         phoneNumber,
//       });

//       if (response.status === 200) {
//         setErrorMessage("");
//         setSuccessMessage("Login successful!");
//         const { token, isAdmin } = response.data;

//         // Store the JWT token
//         localStorage.setItem("token", token);

//         // Call onLoginSuccess with the email to set initials
//         if (onLoginSuccess) {
//           onLoginSuccess(email);
//         }

//         // Redirect based on user role
//         if (isAdmin) {
//           navigate("/admin-dashboard"); // Navigate to admin dashboard
//         } else {
//           navigate("/"); // Navigate to user homepage
//         }
//         onClose(); // Close the modal after successful login
//       }
//     } catch (error) {
//       console.error("Error object:", error); // Log the entire error object for debugging
//       console.error("Error response:", error.response); // Log the error.response if available

//       if (error.response) {
//         setErrorMessage(error.response.data?.message || "Login failed. Please try again.");
//       } else if (error.request) {
//         setErrorMessage("No response from the server. Please try again later.");
//       } else {
//         setErrorMessage(error.message || "An unexpected error occurred.");
//       }

//       setSuccessMessage("");
//     }
//   };

//   return (
//     <div className="form-overlay">
//       <div className="form-container custom-login-form">
//         <button className="close-button" onClick={onClose}>X</button>
//         <div className="login-header">
//           <h2>Welcome to Kongu Cellulars</h2>
//           <p>Please add Bank Registered Phone Number to get Best Offers and Finance Options</p>
//         </div>
//         <form onSubmit={handleLogin} className="login-form">
//           <div className="input-group">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="+91 Enter Phone Number"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">Login</button>
//         </form>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         {successMessage && <p className="success-message">{successMessage}</p>}
//         <p className="signup-link">
//           Don't have an account?{" "}
//           <span onClick={onSignupClick} className="signup-text">
//             Signup
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// // Default Props to Avoid Runtime Errors
// LoginForm.defaultProps = {
//   onLoginSuccess: () => {}, // No-op function as fallback
//   onClose: () => {}, // No-op function as fallback
//   onSignupClick: () => {}, // No-op function as fallback
// };

// export default LoginForm;




/////////////////today

import React, { useState } from "react";
import "./LoginPage.css";

const LoginForm = ({ onClose, onLoginSuccess, onSignupClick }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Client-side validation
    if (!email || !email.includes("@")) {
      setErrorMessage("Please enter a valid email.");
      return;
    }
    if (!phoneNumber || phoneNumber.length < 10) {
      setErrorMessage("Please enter a valid phone number.");
      return;
    }

    // Simulate login success
    setErrorMessage("");
    setSuccessMessage("Login successful!");

    // Extract first letter of email and store in local state
    const firstLetter = email.charAt(0).toUpperCase();
    localStorage.setItem("userInitial", firstLetter);

    // Pass first letter to parent component
    if (onLoginSuccess) {
      onLoginSuccess(firstLetter);
    }

     setTimeout(() => {
      if (onClose) {   // ✅ Prevents error if `onClose` is undefined
        onClose(); 
      }
    }, 1000);
  };

  return (
    <div className="form-overlay">
      <div className="form-container custom-login-form">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="login-header">
          <h2>Welcome to Musical Instrumental World</h2>
          <p>Please add Bank Registered Phone Number to get Best Offers and Finance Options</p>
        </div>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="+91 Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <p className="signup-link">
          Don't have an account?{" "}
          <span onClick={onSignupClick} className="signup-text">
            Signup
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;


///now
// import React, { useState } from "react";
// import "./LoginPage.css";

// const LoginForm = ({ onClose, onLoginSuccess }) => { 
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!email || !email.includes("@")) {
//       setErrorMessage("Please enter a valid email.");
//       return;
//     }
//     if (!phoneNumber || phoneNumber.length < 10) {
//       setErrorMessage("Please enter a valid phone number.");
//       return;
//     }

//     setErrorMessage("");
//     setSuccessMessage("Login successful!");

//     // Extract first letter of email
//     const firstLetter = email.charAt(0).toUpperCase();
//     localStorage.setItem("userInitial", firstLetter);

//     // Pass first letter to parent component
//     if (onLoginSuccess) {
//       onLoginSuccess(firstLetter);
//     }

//     setTimeout(() => {
//       if (onClose) {   // ✅ Prevents error if `onClose` is undefined
//         onClose(); 
//       }
//     }, 1000);
//   };

//   return (
//     <div className="form-overlay">
//       <div className="form-container">
//         <button className="close-button" onClick={onClose}>X</button>
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <input 
//             type="email" 
//             placeholder="Email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             required 
//           />
//           <input 
//             type="text" 
//             placeholder="Phone Number" 
//             value={phoneNumber} 
//             onChange={(e) => setPhoneNumber(e.target.value)} 
//             required 
//           />
//           <button type="submit">Login</button>
//         </form>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         {successMessage && <p className="success-message">{successMessage}</p>}
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
