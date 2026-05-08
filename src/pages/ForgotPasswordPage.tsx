import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-dk-surface p-8 border border-gray-200 dark:border-dk-border rounded-xl shadow-sm">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Password assistance
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Enter the email address associated with your AmaZone account.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded text-center">
            <p className="text-green-800 dark:text-green-400 font-medium">Check your email</p>
            <p className="text-sm text-green-600 dark:text-green-500 mt-1">We've sent password reset instructions to {email}</p>
            <Link to="/login" className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm">
              Return to sign in
            </Link>
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
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
              <Link to="/login" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
                Return to sign in
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
