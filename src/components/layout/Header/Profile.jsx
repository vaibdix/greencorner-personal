import { useContext } from 'react';
import { context } from '../../../store/AppContext';

const Profile = () => {
  const { state } = useContext(context);
  const { user } = state;

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="relative mx-auto max-w-4xl px-4 py-20">
        {/* Decorative elements */}
        <div className="absolute top-40 left-10 h-40 w-40 rounded-full bg-[#1c3035] opacity-5"></div>
        <div className="absolute top-60 right-20 h-20 w-20 rounded-full bg-[#1c3035] opacity-5"></div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Profile Image Container with animated border */}
          <div className="group relative mb-8">
            <div className="animate-spin-slow absolute inset-0 rounded-full bg-gradient-to-r from-[#1c3035] to-emerald-500 blur-sm transition-all duration-500 group-hover:blur-md"></div>
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white bg-white">
              <img
                src={user?.profileImage || '/src/assets/images/user.jpg'}
                alt="Profile"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* User Info with hover effects */}
          <div className="text-center">
            <h2 className="mb-2 text-4xl font-light tracking-tight text-[#1c3035]">
              {user?.username}
            </h2>
            <div className="group relative inline-block">
              <span className="block text-lg text-gray-600 transition-all duration-300 group-hover:-translate-y-1">
                {user?.email}
              </span>
              <span className="block h-0.5 max-w-0 bg-[#1c3035] transition-all duration-500 group-hover:max-w-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
