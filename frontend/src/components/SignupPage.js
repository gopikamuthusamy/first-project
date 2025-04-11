// import React, { useState } from 'react';
// import axios from 'axios';
// import './SignupPage.css';
// import 'font-awesome/css/font-awesome.min.css';
// import OTPInput from './OTPInput';

// const SignupForm = ({ onClose, onLoginClick, onSignupSuccess }) => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     phoneNumber: ''
//   });
//   const [otp, setOtp] = useState('');
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');
//     setSuccessMessage('');
//     try {
//       const response = await axios.post('http://localhost:5000/api/signup', {
//         username: formData.username,
//         email: formData.email,
//         phoneNumber: formData.phoneNumber
//       });
//       if (response.status === 200) {
//         setIsOtpSent(true);
//         setSuccessMessage('Signup successful! OTP sent to your phone.');
//       }
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || 'Signup failed.');
//     }
//   };

//   const handleOtpChange = (otpArray) => {
//     setOtp(otpArray.join(''));
//   };

//   const handleOtpVerify = async (e) => {
//     e.preventDefault();
//     if (otp.length !== 6) {
//       setErrorMessage('Please enter the complete OTP.');
//       return;
//     }
//     try {
//       const response = await axios.post('http://localhost:5000/api/verify-otp', {
//         email: formData.email,
//         otp
//       });
//       if (response.status === 200) {
//         setSuccessMessage('Signup and OTP verification successful!');
//         onSignupSuccess(formData.email);
//         onClose();
//       }
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || 'OTP verification failed.');
//     }
//   };

//   return (
//     <div className="form-overlay">
//       <div className="form-container">
//         <button className="close-button" onClick={onClose}>X</button>
//         <h2>Sign Up</h2>
//         {!isOtpSent ? (
//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               <i className="fa fa-user icon"></i>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <i className="fa fa-envelope icon"></i>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <i className="fa fa-phone icon"></i>
//               <input
//                 type="text"
//                 name="phoneNumber"
//                 placeholder="Phone Number"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <button type="submit">Send OTP</button>
//           </form>
//         ) : (
//           <form onSubmit={handleOtpVerify}>
//             <div className="input-group">
//               <OTPInput length={6} onChange={handleOtpChange} />
//             </div>
//             <button type="submit">Verify OTP</button>
//             <div className="retry-options">
//               <button type="button" onClick={() => setIsOtpSent(false)}>Back</button>
//               <button type="button" onClick={handleSubmit}>Resend OTP</button>
//             </div>
//           </form>
//         )}
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         {successMessage && <p className="success-message">{successMessage}</p>}
//         {!isOtpSent && (
//           <p className="login-link">
//             Already have an account?{' '}
//             <span onClick={onLoginClick} className="login-text" style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
//               Login
//             </span>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignupForm;







// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './SignupPage.css';
// import 'font-awesome/css/font-awesome.min.css';
// import OTPInput from './OTPInput';

// const SignupForm = ({ onClose, onLoginClick }) => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     phoneNumber: '',
//   });
//   const [otp, setOtp] = useState('');
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');
//     setSuccessMessage('');
//     try {
//       const response = await axios.post('http://localhost:5000/api/signup', formData);
//       if (response.status === 200) {
//         setIsOtpSent(true);
//         setSuccessMessage('Signup successful! OTP sent to your phone.');
//       }
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || 'Signup failed.');
//     }
//   };

//   const handleOtpChange = (otpArray) => {
//     setOtp(otpArray.join(''));
//   };

//   const handleOtpVerify = async (e) => {
//     e.preventDefault();
//     if (otp.length !== 6) {
//       setErrorMessage('Please enter the complete OTP.');
//       return;
//     }
//     try {
//       const response = await axios.post('http://localhost:5000/api/verify-otp', {
//         email: formData.email,
//         otp,
//       });
//       if (response.status === 200) {
//         setSuccessMessage('Signup and OTP verification successful!');
//         navigate('/login'); // Redirect to login page after successful signup
//       }
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || 'OTP verification failed.');
//     }
//   };

//   return (
//     <div className="form-overlay">
//       <div className="form-container">
//         <button className="close-button" onClick={onClose}>X</button>
//         <h2>Sign Up</h2>
//         {!isOtpSent ? (
//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               <i className="fa fa-user icon"></i>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <i className="fa fa-envelope icon"></i>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <i className="fa fa-phone icon"></i>
//               <input
//                 type="text"
//                 name="phoneNumber"
//                 placeholder="Phone Number"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <button type="submit">Send OTP</button>
//           </form>
//         ) : (
//           <form onSubmit={handleOtpVerify}>
//             <div className="input-group">
//               <OTPInput length={6} onChange={handleOtpChange} />
//             </div>
//             <button type="submit">Verify OTP</button>
//             <div className="retry-options">
//               <button type="button" onClick={() => setIsOtpSent(false)}>Back</button>
//               <button type="button" onClick={handleSubmit}>Resend OTP</button>
//             </div>
//           </form>
//         )}
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         {successMessage && <p className="success-message">{successMessage}</p>}
//         {!isOtpSent && (
//           <p className="login-link">
//             Already have an account?{' '}
//             <span
//               onClick={onLoginClick}
//               className="login-text"
//               style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
//             >
//               Login
//             </span>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignupForm;






// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './SignupPage.css';
// import 'font-awesome/css/font-awesome.min.css';
// import OTPInput from './OTPInput';

// const SignupForm = ({ onClose, onLoginClick }) => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     phoneNumber: '',
//   });
//   const [otp, setOtp] = useState('');
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');
//     setSuccessMessage('');
//     try {
//       const response = await axios.post('http://localhost:5000/api/signup', formData);
//       if (response.status === 200) {
//         setIsOtpSent(true);
//         setSuccessMessage('Signup successful! OTP sent to your mail.');
//       }
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || 'Signup failed.');
//     }
//   };

//   const handleOtpChange = (otpArray) => {
//     setOtp(otpArray.join(''));
//   };

//   const handleOtpVerify = async (e) => {
//     e.preventDefault();
//     if (otp.length !== 6) {
//       setErrorMessage('Please enter the complete OTP.');
//       return;
//     }
//     try {
//       const response = await axios.post('http://localhost:5000/api/verify-otp', {
//         email: formData.email,
//         otp,
//       });
//       if (response.status === 200) {
//         setSuccessMessage('Signup and OTP verification successful!');
//         navigate('/login'); // Redirect to login page after successful signup
//         onClose(); // Close the signup modal
//       }
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || 'OTP verification failed.');
//     }
//   };

//   return (
//     <div className="form-overlay">
//       <div className="form-container">
//         <button className="close-button" onClick={onClose}>X</button>
//         <h2>Sign Up</h2>
//         {!isOtpSent ? (
//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               <i className="fa fa-user icon"></i>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <i className="fa fa-envelope icon"></i>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <i className="fa fa-phone icon"></i>
//               <input
//                 type="text"
//                 name="phoneNumber"
//                 placeholder="Phone Number"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <button type="submit">Send OTP</button>
//           </form>
//         ) : (
//           <form onSubmit={handleOtpVerify}>
//             <div className="input-group">
//               <OTPInput length={6} onChange={handleOtpChange} />
//             </div>
//             <button type="submit">Verify OTP</button>
//             <div className="retry-options">
//               <button type="button" onClick={() => setIsOtpSent(false)}>Back</button>
//               <button type="button" onClick={handleSubmit}>Resend OTP</button>
//             </div>
//           </form>
//         )}
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         {successMessage && <p className="success-message">{successMessage}</p>}
//         {!isOtpSent && (
//           <p className="login-link">
//             Already have an account?{' '}
//             <span
//               onClick={onLoginClick}
//               className="login-text"
//               style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
//             >
//               Login
//             </span>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignupForm;
import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./SignupPage.css";

const SignupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email already exists
    const isUserExists = existingUsers.some(
      (user) => user.email === formData.email
    );

    if (isUserExists) {
      alert("Email already registered! Please log in.");
      return;
    }

    // Save new user data
    const newUser = { 
      username: formData.username, 
      email: formData.email, 
      phoneNumber: formData.phoneNumber, 
      password: formData.password
    };

    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

    alert("Signup successful! You can now log in."); // ✅ Show success message

    onClose(); // ✅ Close the signup form after successful signup
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <i className="fa fa-user icon"></i>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <i className="fa fa-envelope icon"></i>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <i className="fa fa-phone icon"></i>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <i className="fa fa-lock icon"></i>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account?{" "}
          <span
            onClick={() => alert("Please close this form and go to login!")}
            className="login-text"
            style={{
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
