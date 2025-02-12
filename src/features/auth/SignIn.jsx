import React, { useState, useContext } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { context } from '../../store/AppContext';
import { useNavigate } from 'react-router-dom';
import google from '../../assets/svg/light.svg';
import { useGoogleLogin, GoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';

const SignIn = () => {
  const { state, login, googleLogin } = useContext(context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleNavigateToSignUp = () => {
    navigate('/signup');
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

        // Passing the user info directly to context
        await googleLogin(userInfo.data);
        navigate('/');
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

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);

    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    login(email, password);

    if (state.error) {
      alert('Wrong email or password');
    } else if (state.user) {
      alert('Login successful');

      navigate('/');
    }
  };

  return (
    <div>
      <section>
        <div className="container mx-auto mt-10 px-6 py-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="grid grid-cols-1 gap-12">
              <img
                src="https://i.pinimg.com/736x/99/b0/d5/99b0d51b23d5f05728358a65bba3843d.jpg"
                alt=""
                className="aspect-square rounded-lg object-cover"
              />
            </div>

            <div className="rounded-lg py-5 md:p-8 lg:p-16">
              <div className="mb-2 text-gray-400">WELCOME BACK 👋🏻</div>
              <div className="mb-8 text-3xl">Continue to Your Account</div>
              <button
                type="button"
                onClick={() => handleGoogleLogin()}
                className="flex h-12 w-full items-center justify-center rounded-full border-gray-300 bg-[#E3F3FB] p-3"
              >
                <img src={google} alt="google" className="mr-3 h-6 w-6" />
                <span className="text-gray-700">Sign in with Google</span>
              </button>

              {/* Easy google auth implmentation */}
              {/* <GoogleLogin
                onSuccess={async (credentialResponse) => {
                  console.log(credentialResponse)
                  navigate('/')
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
                auto_select={true}
              /> */}

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

export default SignIn;
