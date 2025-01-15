import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react'; // Import the correct icons from lucide-react

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const payload = {
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:3000/users', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const authenticatedUser = response.data.user;
        if (authenticatedUser) {
          navigate('/home');
        }
      } else {
        setError(response.data.message || 'Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred while logging in');
    }
  };

  return (
    <div>
      <section>
        <div className="container mx-auto mt-10 px-6 py-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
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

              <form onSubmit={handleSubmit}>
                <button
                  id="googleSignInBtn"
                  className="flex h-12 w-full items-center justify-center rounded-full border-gray-300 bg-[#E3F3FB] p-3"
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
                    <path
                      d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                      fill="#4285f4"
                    />
                    <path
                      d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                      fill="#34a853"
                    />
                    <path
                      d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                      fill="#ea4335"
                    />
                  </svg>
                  <span className="text-gray-700">Sign in with Google</span>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
                  />
                </div>

                <div className="relative mt-4">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="PASSWORD"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-4 top-1/2 -translate-y-1/2 transform text-gray-400"
                  >
                    {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                  </button>
                </div>

                {error && <div className="mt-2 text-sm text-red-500">{error}</div>}

                <button className="mt-4 h-12 w-full rounded-md bg-[#1C3035] px-6 text-sm text-white">
                  CONTINUE
                </button>
                <div className="mt-2 text-[12px] text-gray-400">
                  By Signing In to Green Corner, you agree to our Privacy Policy and Terms of
                  Service
                </div>
              </form>
              <div className="mt-8 text-center text-sm text-gray-400">
                Already a Member ?{' '}
                <span className="font-bold text-gray-800">GET STARTED - IT'S FREE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
