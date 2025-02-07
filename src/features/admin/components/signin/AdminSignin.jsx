// import React, { useState, useContext } from 'react';
// import { Eye, EyeOff } from 'lucide-react';
// import { context } from '../../../../store/AppContext';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ACTIONS } from '../../../../store/context/actions';

// const AdminSignin = () => {
//   const { state, dispatch } = useContext(context);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');

//   const navigate = useNavigate();

//   const handleEmailChange = (e) => setEmail(e.target.value);
//   const handlePasswordChange = (e) => setPassword(e.target.value);
//   const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

//   const validateForm = () => {
//     const errors = {};

//     // Email validation
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!email) {
//       setError('Email is required');
//       return false;
//     } else if (!emailRegex.test(email)) {
//       setError('Please enter a valid email');
//       return false;
//     }

//     // Password validation
//     if (!password) {
//       setError('Password is required');
//       return false;
//     } else if (password.length < 6) {
//       setError('Password must be at least 6 characters long');
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     try {
//       // Use the existing API method
//       const response = await api.getUsers();
//       const users = response.data;
      
//       // Find admin user
//       const adminUser = users.find(
//         (user) => user.email === email && 
//         user.password === password && 
//         user.role === 'admin'
//       );

//       if (!adminUser) {
//         setError('Invalid credentials or insufficient privileges');
//         return;
//       }

//       // Dispatch the admin user data to the global state
//       dispatch({ type: ACTIONS.SET_USER, payload: adminUser });
//       navigate('/');
//     } catch (error) {
//       console.error('Login error:', error);
//       dispatch({
//         type: ACTIONS.SET_ERROR,
//         payload: 'Login failed. Please try again.',
//       });
//       setError('Login failed. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <section>
//         <div className="container mx-auto mt-10 px-6 py-12">
//           <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
//             <div className="grid grid-cols-1 gap-12">
//               <img
//                 src="https://i.pinimg.com/736x/99/b0/d5/99b0d51b23d5f05728358a65bba3843d.jpg"
//                 alt=""
//                 className="aspect-square rounded-lg object-cover"
//               />
//             </div>

//             <div className="rounded-lg py-5 md:p-8 lg:p-16">
//               <div className="mb-2 text-gray-400">ADMIN LOGIN 👋🏻</div>
//               <div className="mb-8 text-3xl">Continue to Admin Dashboard</div>

//               <form onSubmit={handleSubmit}>
//                 <div className="mt-4">
//                   <input
//                     type="email"
//                     placeholder="ADMIN EMAIL"
//                     value={email}
//                     onChange={handleEmailChange}
//                     className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
//                   />
//                 </div>

//                 <div className="relative mt-4">
//                   <input
//                     type={showPassword ? 'text' : 'password'}
//                     placeholder="PASSWORD"
//                     value={password}
//                     onChange={handlePasswordChange}
//                     className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
//                   />
//                   <button
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                     className="absolute top-1/2 right-4 -translate-y-1/2 transform text-gray-400"
//                   >
//                     {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
//                   </button>
//                 </div>

//                 {error && (
//                   <div className="mt-2 text-sm text-red-500">
//                     <p>{error}</p>
//                   </div>
//                 )}

//                 <button className="mt-4 h-12 w-full rounded-md bg-[#1C3035] px-6 text-sm text-white">
//                   LOGIN AS ADMIN
//                 </button>
//                 <div className="mt-2 text-[12px] text-gray-400">
//                   This login is restricted to admin users only
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AdminSignin;



import React, { useState, useContext } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Import the correct icons from lucide-react
import { context } from '../../../../store/AppContext'; // import the context
import { useNavigate } from 'react-router-dom'; // import useNavigate for navigation
import google from '../../../../assets/svg/light.svg';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const AdminSignin = () => {
  const { state, login, googleLogin } = useContext(context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Error state for form validation
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Initialize navigation hook

  const handleNavigateToSignUp = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  // Add Google login handler
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${response.access_token}` },
        });

        // Pass the user info directly to your context
        await googleLogin(userInfo.data);
        navigate('/admin');
      } catch (error) {
        console.error('Google login error:', error);
      }
    },
    onError: () => {
      console.error('Google login failed');
    },
  });

  const validateForm = () => {
    const newErrors = {
      email: '',
      password: '',
    };

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);

    // If no errors, return true
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    // Trigger login with email and password
    login(email, password);

    // Check if login was successful
    if (state.error) {
      alert('Wrong email or password');
    } else if (state.user) {
      // Check if user is admin
      if (state.user.role === 'admin') {
        alert('Admin login successful');
        navigate('/admin'); // Navigate to the admin dashboard
      } else {
        alert('You are not Admin try again');
        // navigate('/'); // Navigate to home page for regular users
      }
    }
  };

  return (
    <div>
      <section>
        <div className="container mx-auto mt-10 px-6 py-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="grid grid-cols-1 gap-12">
              <img
                src="https://www.ugaoo.com/cdn/shop/files/1_0041efc1-9511-4917-9825-019f31118568.jpg?v=1709643216&width=1780"
                alt=""
                className="aspect-square rounded-lg object-cover"
              />
            </div>

            <div className="rounded-lg py-5 md:p-8 lg:p-16">
              <div className="mb-2 text-gray-400">WELCOME BACK ADMIN 👋🏻</div>
              <div className="mb-8 text-3xl">Continue to Your Account</div>
              <button
                type="button"
                onClick={() => handleGoogleLogin()}
                className="flex h-12 w-full items-center justify-center rounded-full border-gray-300 bg-[#E3F3FB] p-3"
              >
                <img src={google} alt="google" className="mr-3 h-6 w-6" />
                <span className="text-gray-700">Sign in with Google</span>
              </button>

              <form onSubmit={handleSubmit}>
                <div className="relative m-6 flex items-center justify-center">
                  <div className="grow border-t border-gray-300"></div>
                  <span className="mx-4 text-gray-400">Or use Email</span>
                  <div className="grow border-t border-gray-300"></div>
                </div>

                <div className="mt-4">
                  <input
                    type="email"
                    placeholder="EMAIL"
                    value={email}
                    onChange={handleEmailChange}
                    className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
                  />
                  {errors.email && (
                    <div className="mt-2 text-sm text-red-500">
                      <p>{errors.email}</p>
                    </div>
                  )}
                </div>

                <div className="relative mt-4">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="PASSWORD"
                    value={password}
                    onChange={handlePasswordChange}
                    className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute top-1/2 right-4 -translate-y-1/2 transform text-gray-400"
                  >
                    {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                  </button>
                  {errors.password && (
                    <div className="mt-2 text-sm text-red-500">
                      <p>{errors.password}</p>
                    </div>
                  )}
                </div>

                <button
                  className="mt-4 h-12 w-full rounded-md bg-[#1C3035] px-6 text-sm text-white"
                  disabled={!!errors.email || !!errors.password} // Disable button if form is invalid
                >
                  CONTINUE
                </button>
                <div className="mt-2 text-[12px] text-gray-400">
                  By Signing In to Green Corner, you agree to our Privacy Policy and Terms of
                  Service
                </div>
              </form>
              <div className="mt-8 text-center text-gray-400">
                Don't have an account?{' '}
                <span
                  onClick={handleNavigateToSignUp} // Add the click handler
                  className="cursor-pointer font-bold text-gray-800"
                >
                  Sign up for free
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminSignin;
