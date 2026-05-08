import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">Please sign in to view your profile</h1>
        <button
          onClick={() => navigate("/login")}
          className="bg-az-yellow hover:bg-az-orange text-az-dark font-bold py-2 px-6 rounded transition-colors"
        >
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-az-dark dark:text-white mb-8">Your Account</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-dk-surface p-6 rounded-lg border border-gray-200 dark:border-dk-border shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-2xl">
              👤
            </div>
            <div>
              <h2 className="text-xl font-bold dark:text-white">{user.name}</h2>
              <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-dk-card dark:hover:bg-gray-700 text-az-dark dark:text-white font-medium py-2 rounded transition-colors"
          >
            Sign Out
          </button>
        </div>

        <div className="space-y-4">
          <div className="bg-white dark:bg-dk-surface p-6 rounded-lg border border-gray-200 dark:border-dk-border shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-dk-card transition-colors">
            <h3 className="font-bold text-lg dark:text-white">Your Orders</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Track, return, or buy things again</p>
          </div>
          <div className="bg-white dark:bg-dk-surface p-6 rounded-lg border border-gray-200 dark:border-dk-border shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-dk-card transition-colors">
            <h3 className="font-bold text-lg dark:text-white">Login & Security</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Edit login, name, and mobile number</p>
          </div>
          <div className="bg-white dark:bg-dk-surface p-6 rounded-lg border border-gray-200 dark:border-dk-border shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-dk-card transition-colors">
            <h3 className="font-bold text-lg dark:text-white">Your Addresses</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Edit addresses for orders and gifts</p>
          </div>
        </div>
      </div>
    </div>
  );
}
