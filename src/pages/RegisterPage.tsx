import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password) {
      login({ name, email });
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-dk-surface p-8 border border-gray-200 dark:border-dk-border rounded-xl shadow-sm">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Create account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 dark:border-dk-border placeholder-gray-500 text-gray-900 dark:text-white dark:bg-dk-card focus:outline-none focus:ring-az-orange focus:border-az-orange focus:z-10 sm:text-sm"
                placeholder="First and last name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Email</label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 dark:border-dk-border placeholder-gray-500 text-gray-900 dark:text-white dark:bg-dk-card focus:outline-none focus:ring-az-orange focus:border-az-orange focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 dark:border-dk-border placeholder-gray-500 text-gray-900 dark:text-white dark:bg-dk-card focus:outline-none focus:ring-az-orange focus:border-az-orange focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-az-dark bg-az-yellow hover:bg-az-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-az-orange transition-colors"
            >
              Continue
            </button>
          </div>

          <div className="text-center mt-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">Already have an account? </span>
            <Link to="/login" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
