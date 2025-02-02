import { useContext } from 'react';
import { context } from '../../../store/AppContext';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { state, logout } = useContext(context);
  const { user } = state;
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0F1E] to-[#1A1F2E]">
      <div className="relative mx-auto w-1/3 px-4 py-24">
        {/* Background decorative elements */}
        <div className="pointer-events-none inset-0 overflow-hidden">
          <div className="absolute top-0 -left-1/4 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-3xl"></div>
          <div className="absolute top-1/3 -right-1/4 h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* Header Section */}
          <div className="mb-16 text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative h-28 w-28">
                <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-xl"></div>
                <img
                  src={user?.picture || user?.profileImage || '../../../assets/images/user.jpg'}
                  alt="Profile"
                  className="relative h-full w-full rounded-full border-2 border-white/10 object-cover backdrop-blur-sm"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <h1 className="bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
              {user?.name || user?.username}
            </h1>
            <p className="mt-4 text-lg text-gray-400">{user?.email}</p>
          </div>

          {/* Account Details Card */}
          {user?.provider === 'google' && (
            <div className="rounded-2xl border border-white/10 bg-white/5">
              <div className="border-b border-white/10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-medium text-white">Account Information</h2>
                  <span className="rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
                    Google Account
                  </span>
                </div>
              </div>

              <div className="divide-y divide-white/5">
                {user?.given_name && (
                  <div className="flex items-center justify-between p-6">
                    <span className="text-sm text-gray-400">First Name</span>
                    <span className="font-medium text-white">{user.given_name}</span>
                  </div>
                )}

                {user?.family_name && (
                  <div className="flex items-center justify-between p-6">
                    <span className="text-sm text-gray-400">Last Name</span>
                    <span className="font-medium text-white">{user.family_name}</span>
                  </div>
                )}

                {user?.locale && (
                  <div className="flex items-center justify-between p-6">
                    <span className="text-sm text-gray-400">Locale</span>
                    <span className="font-medium text-white">{user.locale}</span>
                  </div>
                )}

                <div className="flex items-center justify-between p-6">
                  <span className="text-sm text-gray-400">Email Verification</span>
                  {user?.email_verified ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Verified
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400">
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Not Verified
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-5 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
