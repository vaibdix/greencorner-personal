import { useState, useContext } from 'react';
import { context } from '../../store/AppContext'; // import the context
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
        <div className="container mx-auto mt-5 px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="rounded-lg py-6 md:p-8">
              <div className="mb-10 text-3xl">Sign up to get Started</div>
              <form onSubmit={handleSubmit}>
                <button
                  id="googleSignInBtn"
                  className="mb-4 flex h-12 w-full items-center justify-center rounded-full border-gray-300 bg-[#E3F3FB] p-3"
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
                  <div className="grow border-t border-gray-300"></div>
                  <span className="mx-4 text-gray-400">Or use Email</span>
                  <div className="grow border-t border-gray-300"></div>
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
                    className="absolute top-1/2 right-4 -translate-y-1/2 transform text-gray-400"
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
                      className={`tooltip absolute right-0 z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-100 shadow-xs dark:bg-gray-700 ${passwordRules.length && passwordRules.uppercase && passwordRules.specialChar ? 'bg-green-600' : 'bg-gray-900'}`}
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
                  disabled={
                    !!errors.email || !!errors.username || !!errors.contact || !!errors.password
                  } // Disable button if form is invalid
                >
                  GET STARTED
                </button>

                <div className="mt-2 text-[12px] text-gray-400">
                  By Signing up to Green Corner, you agree to our Privacy Policy and Terms of
                  Service
                </div>
              </form>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-12">
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
