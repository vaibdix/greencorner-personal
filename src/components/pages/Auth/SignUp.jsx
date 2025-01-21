
// const SignUp = () => {





  //   const [showPassword, setShowPassword] = useState(false);

//   const initialState = {
//     username: "",
//     password: "",
//     email: "",
//     contact: "",
//     error: "",
//     success: "",
//   };

//   const formReducer = (state, action) => {
//     switch (action.type) {
//       case "SET_FIELD":
//         return { ...state, [action.field]: action.value };
//       case "SET_ERROR":
//         return { ...state, error: action.value, success: "" };
//       case "SET_SUCCESS":
//         return { ...state, success: action.value, error: "" };
//       case "RESET_FORM":
//         return { ...initialState }; // Reset form to initial state
//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(formReducer, initialState);
//   const navigate = useNavigate();

//   const validateForm = () => {
//     if (!state.email || !/\S+@\S+\.\S+/.test(state.email)) {
//       dispatch({ type: "SET_ERROR", value: "Please enter a valid email." });
//       return false;
//     }
//     if (state.password.length < 6) {
//       dispatch({
//         type: "SET_ERROR",
//         value: "Password must be at least 6 characters long.",
//       });
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     const data = {
//       username: state.username,
//       password: state.password,
//       email: state.email,
//       contact: state.contact,
//     };

//     try {
//       const response = await axios.post(
//         "http://116.75.62.44:8000/adduser",
//         data,
//         { headers: { "Content-Type": "application/json" } }
//       );
//       console.log("Signup successful:", response.data);

//       dispatch({ type: "SET_SUCCESS", value: "Sign up successful!" });

//       // Reset the form fields after successful submission
//       dispatch({ type: "RESET_FORM" });

//       // Navigate to signin after 2 seconds
//       setTimeout(() => {
//         navigate("/signin");
//       }, 2000);
//     } catch (error) {
//       console.error("Signup error:", error);
//       dispatch({
//         type: "SET_ERROR",
//         value: "Signup failed! Please try again.",
//       });
//     }
//   };

//   const handleChange = (field, value) => {
//     dispatch({ type: "SET_FIELD", field, value });
//   };

//   return (
//     <div>
//       <Header />
//       <section>
//         <div className="container mx-auto px-6 mt-5">
//           <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
//             <div className="rounded-lg py-6 md:p-8 ">
//               <div className="mb-10 text-3xl">Sign up to get Started</div>
//               <form onSubmit={handleSubmit}>
//                 <button
//                   id="googleSignInBtn"
//                   className="flex h-12 w-full items-center justify-center rounded-full border-gray-300 bg-[#E3F3FB] p-3 mb-4"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 326667 333333"
//                     shapeRendering="geometricPrecision"
//                     textRendering="geometricPrecision"
//                     imageRendering="optimizeQuality"
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     className="mr-3 h-6 w-6"
//                   >
//                     <path
//                       d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
//                       fill="#4285f4"
//                     />
//                     <path
//                       d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
//                       fill="#34a853"
//                     />
//                     <path
//                       d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
//                       fill="#fbbc04"
//                     />
//                     <path
//                       d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
//                       fill="#ea4335"
//                     />
//                   </svg>
//                   <span className="text-gray-700">Sign up with Google</span>
//                 </button>

//                 <div className="relative m-6 flex items-center justify-center">
//                   <div className="flex-grow border-t border-gray-300"></div>
//                   <span className="mx-4 text-gray-400">Or use Email</span>
//                   <div className="flex-grow border-t border-gray-300"></div>
//                 </div>

//                 <div className="mt-4">
//                   <input
//                     type="email"
//                     placeholder="EMAIL"
//                     value={state.email}
//                     onChange={(e) => handleChange("email", e.target.value)}
//                     className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
//                   />
//                 </div>

//                 <div className="mt-4">
//                   <input
//                     type="text"
//                     placeholder="USERNAME"
//                     value={state.username}
//                     onChange={(e) => handleChange("username", e.target.value)}
//                     className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
//                   />
//                 </div>

//                 <div className="mt-4">
//                   <input
//                     type="number"
//                     placeholder="CONTACT"
//                     value={state.contact}
//                     onChange={(e) => handleChange("contact", e.target.value)}
//                     className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
//                   />
//                 </div>

//                 <div className="relative mt-4">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="PASSWORD"
//                     value={state.password}
//                     onChange={(e) => handleChange("password", e.target.value)}
//                     className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 transform text-gray-400"
//                   >
//                     {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
//                   </button>
//                 </div>

//                 <button className="mt-4 h-12 w-full rounded-md bg-[#1C3035] px-6 text-sm text-white">
//                   GET STARTED
//                 </button>

//                 <div className="mt-2 text-[12px] text-gray-400">
//                   By Signing up to Green Corner, you agree to our Privacy Policy and Terms of Service
//                 </div>
//               </form>
//               <div className="mt-8 text-center text-gray-400">
//                 Already a Member ? <span className="font-bold text-gray-800">LOG IN</span>
//               </div>

//               {/* Display success or error message */}
//               {state.success && (
//                 <div className="mt-4 text-green-600 text-center">{state.success}</div>
//               )}
//               {state.error && (
//                 <div className="mt-4 text-red-600 text-center">{state.error}</div>
//               )}
//             </div>

//             <div className="grid grid-cols-1 gap-12 mt-10">
//               <img
//                 src="https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//                 alt="Plant"
//                 className="aspect-square rounded-lg object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default SignUp;

// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

// import  { useState, useContext } from 'react';
// import { context } from '../../context/AppContext';// import the context
// import { useNavigate } from 'react-router-dom'; // import useNavigate for navigation
// import { Eye, EyeOff } from "lucide-react"; // Import the Eye and EyeOff icons from lucide-react

// const SignUp = () => {
//   const { state, signup } = useContext(context);
//   const [showPassword, setShowPassword] = useState(false);

//   // Error state for form validation
//   const [errors, setErrors] = useState({
//     email: '',
//     username: '',
//     contact: '',
//     password: '',
//   });

//   const navigate = useNavigate(); // Initialize navigation hook

//   const handleChange = (field, value) => {
//     state[field] = value;
//   };

//   const validateForm = () => {
//     const newErrors = {
//       email: '',
//       username: '',
//       contact: '',
//       password: '',
//     };

//     // Email validation
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!state.email) {
//       newErrors.email = 'Email is required';
//     } else if (!emailRegex.test(state.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }

//     // Username validation
//     if (!state.username) {
//       newErrors.username = 'Username is required';
//     }

//     // Contact validation
//     if (!state.contact) {
//       newErrors.contact = 'Contact is required';
//     } else if (!/^\d{10}$/.test(state.contact)) {
//       newErrors.contact = 'Please enter a valid 10-digit phone number';
//     }

//     // Password validation
//     if (!state.password) {
//       newErrors.password = 'Password is required';
//     } else if (state.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters long';
//     }

//     setErrors(newErrors);

//     // If no errors, return true
//     return !newErrors.email && !newErrors.username && !newErrors.contact && !newErrors.password;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate form before submitting
//     if (!validateForm()) {
//       return;
//     }

//     signup(state.email, state.username, state.contact, state.password); // Trigger signup with data

//     // Check if signup was successful or not
//     if (state.error) {
//       alert('Signup failed. Please try again.');
//     } else if (state.user) {
//       alert('Signup successful');
//       // After success, navigate to the home page
//       navigate('/');
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <section>
//         <div className="container mx-auto px-6 mt-5">
//           <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
//             <div className="rounded-lg py-6 md:p-8 ">
//               <div className="mb-10 text-3xl">Sign up to get Started</div>
//               <form onSubmit={handleSubmit}>
//                 <button
//                   id="googleSignInBtn"
//                   className="flex h-12 w-full items-center justify-center rounded-full border-gray-300 bg-[#E3F3FB] p-3 mb-4"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 326667 333333"
//                     shapeRendering="geometricPrecision"
//                     textRendering="geometricPrecision"
//                     imageRendering="optimizeQuality"
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     className="mr-3 h-6 w-6"
//                   >
//                     {/* Google icon SVG */}
//                   </svg>
//                   <span className="text-gray-700">Sign up with Google</span>
//                 </button>

//                 <div className="relative m-6 flex items-center justify-center">
//                   <div className="flex-grow border-t border-gray-300"></div>
//                   <span className="mx-4 text-gray-400">Or use Email</span>
//                   <div className="flex-grow border-t border-gray-300"></div>
//                 </div>

//                 <div className="mt-4">
//                   <input
//                     type="email"
//                     placeholder="EMAIL"
//                     value={state.email}
//                     onChange={(e) => handleChange('email', e.target.value)}
//                     className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
//                   />
//                   {errors.email && (
//                     <div className="mt-2 text-sm text-red-500">
//                       <p>{errors.email}</p>
//                     </div>
//                   )}
//                 </div>

//                 <div className="mt-4">
//                   <input
//                     type="text"
//                     placeholder="USERNAME"
//                     value={state.username}
//                     onChange={(e) => handleChange('username', e.target.value)}
//                     className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
//                   />
//                   {errors.username && (
//                     <div className="mt-2 text-sm text-red-500">
//                       <p>{errors.username}</p>
//                     </div>
//                   )}
//                 </div>

//                 <div className="mt-4">
//                   <input
//                     type="number"
//                     placeholder="CONTACT"
//                     value={state.contact}
//                     onChange={(e) => handleChange('contact', e.target.value)}
//                     className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
//                   />
//                   {errors.contact && (
//                     <div className="mt-2 text-sm text-red-500">
//                       <p>{errors.contact}</p>
//                     </div>
//                   )}
//                 </div>

//                 <div className="relative mt-4">
//                   <input
//                     type={showPassword ? 'text' : 'password'}
//                     placeholder="PASSWORD"
//                     value={state.password}
//                     onChange={(e) => handleChange('password', e.target.value)}
//                     className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 transform text-gray-400"
//                   >
//                     {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
//                   </button>
//                   {errors.password && (
//                     <div className="mt-2 text-sm text-red-500">
//                       <p>{errors.password}</p>
//                     </div>
//                   )}
//                 </div>

//                 <button
//                   type="submit"
//                   className="mt-4 h-12 w-full rounded-md bg-[#1C3035] px-6 text-sm text-white"
//                   disabled={!!errors.email || !!errors.username || !!errors.contact || !!errors.password} // Disable button if form is invalid
//                 >
//                   GET STARTED
//                 </button>

//                 <div className="mt-2 text-[12px] text-gray-400">
//                   By Signing up to Green Corner, you agree to our Privacy Policy and Terms of Service
//                 </div>
//               </form>

//               <div className="mt-8 text-center text-gray-400">
//                 Already a Member? <span className="font-bold text-gray-800">LOG IN</span>
//               </div>

//               {/* Display success or error message */}
//               {state.success && (
//                 <div className="mt-4 text-green-600 text-center">{state.success}</div>
//               )}
//               {state.error && (
//                 <div className="mt-4 text-red-600 text-center">{state.error}</div>
//               )}
//             </div>

//             <div className="grid grid-cols-1 gap-12 mt-10">
//               <img
//                 src="https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//                 alt="Plant"
//                 className="aspect-square rounded-lg object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default SignUp;







import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState, useContext } from 'react';
import { context } from '../../context/AppContext'; // import the context
import { useNavigate } from 'react-router-dom'; // import useNavigate for navigation
import { Eye, EyeOff } from 'lucide-react'; // Import the Eye and EyeOff icons from lucide-react

const SignUp = () => {
  const { state, signup } = useContext(context);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordRules, setPasswordRules] = useState({
    length: false,
    uppercase: false,
    specialChar: false,
  });
  const [errors, setErrors] = useState({
    email: '',
    username: '',
    contact: '',
    password: '',
  });
  const [isPasswordFocused, setIsPasswordFocused] = useState(false); // Track focus state for password field

  const navigate = useNavigate();

  const handleChange = (field, value) => {
    state[field] = value;
  };

  const validatePassword = (password) => {
    setPasswordRules({
      length: password.length >= 6,
      uppercase: /[A-Z]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      alert('Some fields are incorrect. Please fix the errors.');
      return;
    }

    signup(state.email, state.username, state.contact, state.password);

    if (state.error) {
      alert('Signup failed. Please try again.');
    } else if (state.user) {
      alert('Signup successful!');
      navigate('/signin');
    }
  };

  const validateForm = () => {
    const newErrors = {
      email: '',
      username: '',
      contact: '',
      password: '',
    };

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!state.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(state.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Username validation
    if (!state.username) {
      newErrors.username = 'Username is required';
    }

    // Contact validation
    if (!state.contact) {
      newErrors.contact = 'Contact is required';
    } else if (!/^\d{10}$/.test(state.contact)) {
      newErrors.contact = 'Please enter a valid 10-digit phone number';
    }

    // Password validation
    if (!state.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    return !newErrors.email && !newErrors.username && !newErrors.contact && !newErrors.password;
  };

  return (
    <div>

      <section>
        <div className="container mx-auto px-6 mt-5">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="rounded-lg py-6 md:p-8 ">
              <div className="mb-10 text-3xl">Sign up to get Started</div>
              <form onSubmit={handleSubmit}>
                <button
                  id="googleSignInBtn"
                  className="flex h-12 w-full items-center justify-center rounded-full border-gray-300 bg-[#E3F3FB] p-3 mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 326667 333333"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="mr-3 h-6 w-6"
                  >
                    {/* Google icon SVG */}
                  </svg>
                  <span className="text-gray-700">Sign up with Google</span>
                </button>

                <div className="relative m-6 flex items-center justify-center">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-4 text-gray-400">Or use Email</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <div className="mt-4">
                  <input
                    type="email"
                    placeholder="EMAIL"
                    value={state.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
                  />
                  {errors.email && (
                    <div className="mt-2 text-sm text-red-500">
                      <p>{errors.email}</p>
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="USERNAME"
                    value={state.username}
                    onChange={(e) => handleChange('username', e.target.value)}
                    className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
                  />
                  {errors.username && (
                    <div className="mt-2 text-sm text-red-500">
                      <p>{errors.username}</p>
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <input
                    type="number"
                    placeholder="CONTACT"
                    value={state.contact}
                    onChange={(e) => handleChange('contact', e.target.value)}
                    className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
                  />
                  {errors.contact && (
                    <div className="mt-2 text-sm text-red-500">
                      <p>{errors.contact}</p>
                    </div>
                  )}
                </div>

                <div className="relative mt-4">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="PASSWORD"
                    value={state.password}
                    onChange={(e) => {
                      handleChange('password', e.target.value);
                      validatePassword(e.target.value);
                    }}
                    onFocus={() => setIsPasswordFocused(true)} // Show tooltip on focus
                    onBlur={() => setIsPasswordFocused(false)} // Hide tooltip on blur
                    className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 transform text-gray-400"
                  >
                    {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                  </button>
                  {errors.password && (
                    <div className="mt-2 text-sm text-red-500">
                      <p>{errors.password}</p>
                    </div>
                  )}

                  {/* Tooltip with password rules (only visible when password field is focused) */}
                  {isPasswordFocused && (
                    <div
                      id="tooltip-right"
                      role="tooltip"
                      className={`absolute right-0 z-10 inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-100 tooltip dark:bg-gray-700 ${passwordRules.length && passwordRules.uppercase && passwordRules.specialChar ? 'bg-green-600' : 'bg-gray-900'}`}
                      style={{ top: 'calc(100% + 8px)' }}
                    >
                      <div>Password Rules:</div>
                      <ul className="space-y-1">
                        <li className={passwordRules.length ? 'text-green-500' : ''}>
                          ✔ Minimum 6 characters
                        </li>
                        <li className={passwordRules.uppercase ? 'text-green-500' : ''}>
                          ✔ Contains an uppercase letter
                        </li>
                        <li className={passwordRules.specialChar ? 'text-green-500' : ''}>
                          ✔ Contains a special character
                        </li>
                      </ul>
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-4 h-12 w-full rounded-md bg-[#1C3035] px-6 text-sm text-white"
                  disabled={!!errors.email || !!errors.username || !!errors.contact || !!errors.password} // Disable button if form is invalid
                >
                  GET STARTED
                </button>

                <div className="mt-2 text-[12px] text-gray-400">
                  By Signing up to Green Corner, you agree to our Privacy Policy and Terms of Service
                </div>
              </form>
            </div>

            <div className="grid grid-cols-1 gap-12 mt-10">
              <img
                src="https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Plant"
                className="aspect-square rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SignUp;



