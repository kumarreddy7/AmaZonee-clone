import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SellerRegisterPage() {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gstin, setGstin] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (businessName && email && phone) {
      alert("Registration submitted! Pending approval.");
      navigate("/seller");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dk-bg">
      <div className="max-w-xl w-full space-y-8 bg-white dark:bg-dk-surface p-10 border border-gray-200 dark:border-dk-border rounded-2xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Start Selling on AmaZone
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Reach crores of customers and grow your business
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <div className="space-y-4">
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Business Name / Company Name <span className="text-red-500">*</span>
              </label>
              <input
                id="businessName"
                name="businessName"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 dark:border-dk-border placeholder-gray-400 text-gray-900 dark:text-white dark:bg-dk-card focus:outline-none focus:ring-2 focus:ring-az-orange focus:border-transparent sm:text-sm transition-shadow"
                placeholder="Enter your registered business name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Business Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 dark:border-dk-border placeholder-gray-400 text-gray-900 dark:text-white dark:bg-dk-card focus:outline-none focus:ring-2 focus:ring-az-orange focus:border-transparent sm:text-sm transition-shadow"
                  placeholder="contact@yourbusiness.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 dark:border-dk-border placeholder-gray-400 text-gray-900 dark:text-white dark:bg-dk-card focus:outline-none focus:ring-2 focus:ring-az-orange focus:border-transparent sm:text-sm transition-shadow"
                  placeholder="+91 00000 00000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="gstin" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                GSTIN (Optional for initial registration)
              </label>
              <input
                id="gstin"
                name="gstin"
                type="text"
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 dark:border-dk-border placeholder-gray-400 text-gray-900 dark:text-white dark:bg-dk-card focus:outline-none focus:ring-2 focus:ring-az-orange focus:border-transparent sm:text-sm transition-shadow"
                placeholder="22AAAAA0000A1Z5"
                value={gstin}
                onChange={(e) => setGstin(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-az-orange focus:ring-az-orange border-gray-300 rounded cursor-pointer"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
                I agree to the <Link to="#" className="text-blue-600 hover:underline">Seller Agreement</Link> and <Link to="#" className="text-blue-600 hover:underline">Privacy Policy</Link>.
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-az-dark bg-az-yellow hover:bg-az-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-az-orange shadow-sm transition-all transform active:scale-[0.98]"
            >
              Register & Continue
            </button>
          </div>

          <div className="text-center mt-4 border-t border-gray-200 dark:border-dk-border pt-6">
            <span className="text-sm text-gray-600 dark:text-gray-400">Already a seller? </span>
            <Link to="/seller" className="text-sm font-bold text-blue-600 hover:underline dark:text-blue-400">
              Go to Seller Central
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
