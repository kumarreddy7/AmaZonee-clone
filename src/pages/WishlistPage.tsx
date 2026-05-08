import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import type { Product } from "../services/api";

export default function WishlistPage() {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    api.getWishlist().then((data: any) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-az-dark dark:text-white mb-8">Your Wishlist</h1>

      {loading ? (
        <p className="text-gray-500">Loading wishlist...</p>
      ) : items.length === 0 ? (
        <div className="bg-white dark:bg-dk-surface p-8 rounded-lg border border-gray-200 dark:border-dk-border text-center">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Your wishlist is empty.</p>
          <Link to="/products" className="inline-block bg-az-yellow hover:bg-az-orange text-az-dark font-bold py-2 px-6 rounded transition-colors">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white dark:bg-dk-surface border border-gray-200 dark:border-dk-border rounded-lg p-4 shadow-sm relative">
              <button className="absolute top-2 right-2 text-red-500 hover:text-red-700 bg-white dark:bg-dk-card rounded-full p-1 shadow">
                ❌
              </button>
              <div className="h-40 bg-gray-100 dark:bg-dk-card mb-4 rounded flex items-center justify-center">
                <span className="text-4xl">🛍️</span>
              </div>
              <Link to={`/product/${item.id}`} className="hover:text-az-orange">
                <h3 className="font-semibold text-lg text-az-dark dark:text-white line-clamp-1">{item.name}</h3>
              </Link>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xl font-bold text-az-dark dark:text-white">₹{item.price.toLocaleString()}</span>
              </div>
              <button className="w-full mt-4 bg-gray-100 hover:bg-gray-200 dark:bg-dk-card dark:hover:bg-gray-700 text-az-dark dark:text-white font-medium py-2 rounded text-sm transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
